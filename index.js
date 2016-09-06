'use strict'

// core
const fs = require('fs')

// npm
require('dotenv-safe').load()
const got = require('got')
const fetchRepos = require('rollodeqc-gh-repos')
const pify = require('pify')
const db = require('nano')('http://localhost:5984/repos')

const putRepos = () => {
  const bulk = pify(db.bulk)
  const withID = (doc) => {
    doc._id = 'repo:' + doc.id
    return doc
  }

  return (data) => {
    const docs = { docs: data.map(withID) }
    return bulk(docs)
  }
}()

putRepos(require('./repos/dfcreative-repos.json'))
  .then(console.log)
  .catch(console.error)
