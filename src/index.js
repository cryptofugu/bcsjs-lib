var bcsjs = require('bitcoinjs-lib')

Object.assign(bcsjs.networks, require('./networks'))

bcsjs.utils = require('./utils')

module.exports = bcsjs