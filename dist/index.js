
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./intergral-sdk-hpot.cjs.production.min.js')
} else {
  module.exports = require('./intergral-sdk-hpot.cjs.development.js')
}
