'use strict'

// npm
require('dotenv-safe').config()
const fetchRepo = require('rollodeqc-gh-repo')
const utils = require('rollodeqc-gh-utils')
const pify = require('pify')
const db = require('nano')('http://localhost:5984/repos')

const dbInsert = pify(db.insert)

const addId = (doc) => {
  doc._id = `repo:${doc.id}`
  delete doc.permissions
  doc.snapshot_extra = true
  if (doc.license) { doc.license = utils.chosenFields(doc.license) }
  return doc
}

fetchRepo(process.argv[2] || 'Theano', process.argv[3] || 'Theano')
  .then(addId)
  .then(dbInsert)
  .then(console.log)
  .catch(console.error)
