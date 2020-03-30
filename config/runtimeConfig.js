const { parsed: dotenv } = require('dotenv').config()

const publicRuntimeConfig = {}

const serverRuntimeConfig = {
  ...dotenv,
}

module.exports = {
  publicRuntimeConfig,
  serverRuntimeConfig,
}
