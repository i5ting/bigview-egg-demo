'use strict'

const fs = require('fs')
const path = require('path')
const PAGES = Symbol('Application#PAGES')

module.exports = {
  get pages () {
    if (!this[PAGES]) {
      const pagePath = path.join(__dirname, '../pages')
      const { ctx } = this
      if (fs.existsSync(pagePath)) {
        const directories = fs.readdirSync(pagePath)
        const obj = {}
        if (directories) {
          for (let d of directories) {
            try {
              
              let page = require(path.join(pagePath, d))
              console.log(page)
              obj[d] = page
            } catch (err) {
              console.log(err)
            }
          }
        }
        this[PAGES] = obj
      }
    }
    return this[PAGES]
  }
}
