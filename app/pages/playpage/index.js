'use strict'

const BigView = require('bigview')

const layoutPagelet = require('./layout')
const mainPagelet = require('./main')
const otherPagelet = require('./other')

async function index (ctx) {
  // const { ctx } = this;
  this.status = 200
  const bigView = new BigView(ctx)

  // set layout
  bigView.layout = layoutPagelet
  // set main
  bigView.main = mainPagelet
  // you can custom bigView dataStore
  bigView.dataStore = {}
  // bigView.add(mainPagelet)
  bigView.add(otherPagelet)

  // bigView.mode = 'pipeline'

  await bigView.start()
}

module.exports = index
