'use strict'

// npm
const pify = require('pify')
const db = require('nano')('http://localhost:5984/repos')
const dbView = pify(db.view)

const top = 100

const sorter = (a, b) => {
  if (a.value > b.value) return 1
  if (a.value < b.value) return -1
  return 0
}

const map1 = (repo) => `${repo.key} (${repo.value})`
const map2 = (repo) => `${repo.value} (${repo.key})`
const map3 = (repo) => `${repo.value} (${repo.key[0]}, ${repo.key[1]})`

const viewBy = (view) => dbView('app', view, { group: true })
  .then((x) => x.rows.sort(sorter).reverse().map(map1))

const viewBy2 = (view) => dbView('app', view, { descending: true, limit: top })
  .then((x) => x.rows.map(map2))

const viewBy3 = (view, desc) => dbView('app', view, { descending: desc, limit: top })
  .then((x) => x.rows.map(map3))

viewBy3('ratioForksWatchers')
  .then((rows) => {
    console.log('\nBY-ratioForksWatchers+watchers (more watchers):')
    console.log(rows.join('\n'))
  })
  .catch(console.error)

viewBy3('ratioForksWatchers', true)
  .then((rows) => {
    console.log('\nBY-ratioForksWatchers+watchers (more forks):')
    console.log(rows.join('\n'))
  })
  .catch(console.error)

viewBy3('ratioForksWatchers2')
  .then((rows) => {
    console.log('\nBY-ratioForksWatchers2+forks (more watchers):')
    console.log(rows.join('\n'))
  })
  .catch(console.error)

viewBy3('ratioForksWatchers2', true)
  .then((rows) => {
    console.log('\nBY-ratioForksWatchers2+forks (more forks):')
    console.log(rows.join('\n'))
  })
  .catch(console.error)

viewBy2('byWatchers')
  .then((rows) => {
    console.log('\nBY-WATCHERS:')
    console.log(rows.join('\n'))
  })
  .catch(console.error)

viewBy2('byForks')
  .then((rows) => {
    console.log('\nBY-FORKS:')
    console.log(rows.join('\n'))
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
