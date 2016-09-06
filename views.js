'use strict'

// core
const fs = require('fs')

// npm
const pify = require('pify')
const db = require('nano')('http://localhost:5984/repos')
const view = pify(db.view)

const sorter = (a, b) => {
  if (a.value > b.value) return 1
  if (a.value < b.value) return -1
  return 0
}

const viewBy = (field) => view('app', field, {group: true})
  .then((x) => x.rows.sort(sorter).reverse().map((repo) => `${repo.key} (${repo.value})`))

const top = 15

viewBy('names')
  .then((rows) => {
    console.log('BY-NAME:', rows.slice(0, top).join('\n'))
  })
  .catch(console.error)

viewBy('languages')
  .then((rows) => {
    console.log('BY-LANGUAGE:', rows.slice(0, top).join('\n'))
  })
  .catch(console.error)

viewBy('licenses')
  .then((rows) => {
    console.log('BY-LICENSE:', rows.slice(0, top).join('\n'))
  })
  .catch(console.error)

viewBy('owners')
  .then((rows) => {
    console.log('BY-OWNER:', rows.slice(0, top).join('\n'))
  })
  .catch(console.error)
