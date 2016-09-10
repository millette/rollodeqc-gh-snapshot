'use strict'

// core
const fs = require('fs')

// npm
const _ = require('lodash')
const marked = require('marked')
const db = require('nano')('http://localhost:5984/repos')
const pify = require('pify')
const tpl = require('./lodash-templates')

marked.setOptions({ smartypants: true })

const dbView = pify(db.view)
const readFile = pify(fs.readFile)
const fullNamesView = dbView.bind(null, 'app', 'fullNames')

const getRepo = (login, repo) =>
  fullNamesView({ key: [login, repo], include_docs: true })

const makeArticle = (login, repo) => Promise.all([
  getRepo(login, repo),
  readFile(`articles/${repo}.md`, 'utf-8')
])
  .then((x2) => {
    const doc = x2[0].rows[0].doc
    doc.created_at = doc.created_at.split('T')[0]
    doc.updated_at = doc.updated_at.split('T')[0]
    if (doc.pushed_at) { doc.pushed_at = doc.pushed_at.split('T')[0] }
    doc.md = marked(x2[1])
    return tpl['repo-infobox'](doc)
  })

makeArticle('nebez', 'floppybird')
  .then((z) => {
    console.log(z)
  })
  .catch(console.error)
