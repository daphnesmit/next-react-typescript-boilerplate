const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.BUNDLE_ANALYZE === 'true',
})

const withOffline = require('next-offline')
// const withFonts = require('next-fonts')

const plugins = [
  [
    withOffline,
    {
      generateSw: false,
      workboxOpts: {
        swSrc: './public/service-worker.js',
      },
    },
  ],
  withBundleAnalyzer,
  // withFonts,
]

module.exports = {
  plugins,
}
