'use strict'

// core
const fs = require('fs')

// npm
require('dotenv-safe').load()
const fetchRepos = require('rollodeqc-gh-repos')
const utils = require('rollodeqc-gh-utils')
const pify = require('pify')
const db = require('nano')('http://localhost:5984/repos')
const throttler = require('rate-limit-promise')(8, 10000)
const getFile = pify(fs.readFile)

const putDataRepos = (() => {
  const bulk = pify(db.bulk)
  const withID = (doc) => {
    doc._id = 'repo:' + doc.id
    return doc
  }

  return (data) => bulk({ docs: data.map(withID) })
    .then((x) => {
      return {
        oks: x.filter((a) => a.ok).length,
        errors: x.filter((a) => a.error).length,
        total: x.length
      }
    })
})()

const putRepos = (username) => {
  return throttler()
    .then(() => {
      console.log('Processing', username)
      return fetchRepos(username, true)
    })
    .then(putDataRepos)
}

getFile('./usernames.txt', 'utf-8')
  .then((users) => {
    users.split('\n').forEach((u) => {
      putRepos(u)
        .then(console.log)
        .catch((e) => {
          console.error(new Date().toISOString(), e)
        })
    })
  })

console.log('CTRL-C to end')

setInterval(() => {
  utils.rateLimit().then((rl) => console.log(new Date().toISOString(), rl.rate.remaining, new Date(rl.rate.reset * 1000).toISOString()))
}, 15000)
