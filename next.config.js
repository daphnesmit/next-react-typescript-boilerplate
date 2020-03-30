const withPlugins = require('next-compose-plugins')
const { plugins } = require('./config/plugins')
const { exportPathMap } = require('./config/static')
const { publicRuntimeConfig, serverRuntimeConfig } = require('./config/runtimeConfig')
const { setAliasConfig } = require('./config/alias')

module.exports = withPlugins(plugins, {
  exportPathMap,
  publicRuntimeConfig,
  serverRuntimeConfig,
  reactStrictMode: true,
  compression: true, // true to enable gzipping
  webpack(config, options) {
    if (!options.isServer) {
      const CircularDependencyPlugin = require('circular-dependency-plugin')

      config.plugins.push(
        new CircularDependencyPlugin({
          exclude: /a\.js|node_modules/,
          failOnError: true,
          allowAsyncCycles: false,
          cwd: process.cwd(),
        }),
      )
    }

    const originalEntry = config.entry

    config.entry = async () => {
      const entries = await originalEntry()
      const entryWithPolyfills =
        entries['main.js'] && !entries['main.js'].includes('./src/polyfills.ts')

      if (entryWithPolyfills) {
        entries['main.js'].unshift('./src/polyfills.ts')
      }

      return entries
    }

    setAliasConfig(config)

    return config
  },
})
