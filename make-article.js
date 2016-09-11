'use strict'

// core
const fs = require('fs')
const path = require('path')

// npm
const marked = require('marked')
const db = require('nano')('http://localhost:5984/repos')
const pify = require('pify')
const tpl = require('./lodash-templates')

marked.setOptions({ smartypants: true })

const dbView = pify(db.view)
const readFile = pify(fs.readFile)
const writeFile = pify(fs.writeFile)
const fullNamesView = dbView.bind(null, 'app', 'fullNames')
const getRepo = (login, repo) => fullNamesView({ key: [login, repo], include_docs: true })
const justDate = (x) => x.split('T')[0]

const massage = (x2) => {
  const doc = x2[1].rows[0].doc
  doc.created_at = justDate(doc.created_at)
  doc.updated_at = justDate(doc.updated_at)
  if (doc.pushed_at) { doc.pushed_at = justDate(doc.pushed_at) }
  doc.md = marked(x2[0])
  return tpl['repo-infobox'](doc)
}

const findLink = (repo, z) => {
  const b = z.match(new RegExp(`github\.com\/(.+)\/${repo}>`, 'g'))
  if (!b) { throw new Error('no github repo link found') }
  return [b[0].split('/')[1], z]
}

const makeArticle = (repo) => readFile(`articles/${repo}.md`, 'utf-8')
  .then(findLink.bind(null, repo))
  .then((login) => Promise.all([login[1], getRepo(login[0], repo)]))
  .then(massage)
  .then(writeFile.bind(null, `html/${repo}.html`))

makeArticle(path.basename(process.argv[2], '.md')) // floppybird libstreaming apell
  .then(console.log)
  .catch(console.error)
