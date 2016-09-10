'use strict'

// npm
const pify = require('pify')
const db = require('nano')('http://localhost:5984/repos')
const dbView = pify(db.view)

const top = 100
const views1 = ['names', 'languages', 'licenses', 'owners']
const views2 = ['byWatchers', 'byForks']
const views3 = [['ratioForksWatchers', false], ['ratioForksWatchers2', false], ['ratioForksWatchers', true], ['ratioForksWatchers2', true]]

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

const viewBy3 = (args) => dbView('app', args[0], { descending: args[1], limit: top })
  .then((x) => x.rows.map(map3))

Promise.all(views1.map(viewBy))
  .then((data) => { data.forEach((rows, i) => { console.log(`\n${views1[i]}\n${rows.slice(0, top).join('\n')}`) }) })
  .then(() => Promise.all(views2.map(viewBy2)))
  .then((data) => { data.forEach((rows, i) => { console.log(`\n${views2[i]}\n${rows.join('\n')}`) }) })
  .then(() => Promise.all(views3.map(viewBy3)))
  .then((data) => {
    const strs2 = ['more watchers', 'more watchers', 'more forks', 'more forks']
    const strs1 = ['watchers', 'forks', 'watchers', 'forks']
    data.forEach((rows, i) => { console.log(`\n${strs1[i]} (${strs2[i]})\n${rows.join('\n')}`) })
  })
  .catch(console.error)
