'use strict'

// core
const fs = require('fs')

// npm
require('dotenv-safe').load()
const got = require('got')
const cookie = require('cookie')

const headers = { headers: { cookie: cookie.serialize('sid', process.env.SID) } }

let doit = false

const getDay = (day) => {
  // check if file exists (skip if so)
  const fn = `${day.replace(/\//g, '-')}.html`
  const u = `https://streaker.rollodeqc.com/day/${day}/0`
  fs.access(fn, fs.W_OK, (err) => err && got.stream(u, headers).pipe(fs.createWriteStream(fn)))
}

const getMonth = (month) => {
  let r
  for (r = 1; r < 10; ++r) {
    getDay(`${month}/0${r}`)
  }
  for (r = 0; r < 10; ++r) {
    getDay(`${month}/1${r}`)
    getDay(`${month}/2${r}`)
  }
  getDay(`${month}/30`)
}

const getFeb = (year) => {
  let r
  for (r = 1; r < 10; ++r) {
    getDay(`${year}/02/0${r}`)
  }
  for (r = 0; r < 10; ++r) {
    getDay(`${year}/02/1${r}`)
  }

  for (r = 0; r < 9; ++r) {
    getDay(`${year}/02/2${r}`)
  }
}

const get31st = (year, part) => {
  getDay(`${year}/07/31`)
  getDay(`${year}/08/31`)
  if (part) {
    getDay(`${year}/10/31`)
    getDay(`${year}/12/31`)
  } else {
    getDay(`${year}/01/31`)
    getDay(`${year}/03/31`)
    getDay(`${year}/05/31`)
  }
}

if (doit) {
  getDay('2016/09/01')
  getDay('2016/09/02')
  getDay('2016/09/03')
  getDay('2016/09/04')
  getDay('2016/09/05')
  get31st('2015', true)
  get31st('2016')
  getFeb('2016')
  getMonth('2016/03')
  getMonth('2016/04')
  getMonth('2016/05')
  getMonth('2016/06')
  getMonth('2016/07')
  getMonth('2016/08')
}
