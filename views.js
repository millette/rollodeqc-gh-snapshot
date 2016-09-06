'use strict'

// npm
const pify = require('pify')
const db = require('nano')('http://localhost:5984/repos')
const view = pify(db.view)

const top = 100

const sorter = (a, b) => {
  if (a.value > b.value) return 1
  if (a.value < b.value) return -1
  return 0
}

const viewBy = (field) => view('app', field, { group: true })
  .then((x) => x.rows.sort(sorter).reverse().map((repo) => `${repo.key} (${repo.value})`))

const viewBy2 = (field) => view('app', field, { descending: true, limit: top })
  .then((x) => x.rows.map((repo) => `${repo.value} (${repo.key})`))

const viewBy3 = (field, desc) => view('app', field, { descending: desc, limit: top })
  .then((x) => x.rows.map((repo) => `${repo.value} (${repo.key[0]}, ${repo.key[1]})`))

viewBy3('ratioForksWatchers')
  .then((rows) => {
    console.log('\nBY-ratioForksWatchers+watchers (more watchers):')
    console.log(rows.slice(0, top).join('\n'))
  })
  .catch(console.error)

viewBy3('ratioForksWatchers', true)
  .then((rows) => {
    console.log('\nBY-ratioForksWatchers+watchers (more forks):')
    console.log(rows.slice(0, top).join('\n'))
  })
  .catch(console.error)

viewBy3('ratioForksWatchers2')
  .then((rows) => {
    console.log('\nBY-ratioForksWatchers2+forks (more watchers):')
    console.log(rows.slice(0, top).join('\n'))
  })
  .catch(console.error)

viewBy3('ratioForksWatchers2', true)
  .then((rows) => {
    console.log('\nBY-ratioForksWatchers2+forks (more forks):')
    console.log(rows.slice(0, top).join('\n'))
  })
  .catch(console.error)

viewBy2('byWatchers')
  .then((rows) => {
    console.log('\nBY-WATCHERS:')
    console.log(rows.slice(0, top).join('\n'))
  })
  .catch(console.error)

viewBy2('byForks')
  .then((rows) => {
    console.log('\nBY-FORKS:')
    console.log(rows.slice(0, top).join('\n'))
  })
  .catch(console.error)

viewBy('names')
  .then((rows) => {
    console.log('\nBY-NAME:')
    console.log(rows.slice(0, top).join('\n'))
  })
  .catch(console.error)

viewBy('languages')
  .then((rows) => {
    console.log('\nBY-LANGUAGE:')
    console.log(rows.slice(0, top).join('\n'))
  })
  .catch(console.error)

viewBy('licenses')
  .then((rows) => {
    console.log('\nBY-LICENSE:')
    console.log(rows.slice(0, top).join('\n'))
  })
  .catch(console.error)

viewBy('owners')
  .then((rows) => {
    console.log('\nBY-OWNER:')
    console.log(rows.slice(0, top).join('\n'))
  })
  .catch(console.error)
