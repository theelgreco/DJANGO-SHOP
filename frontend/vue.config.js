const BundleTracker = require("webpack-bundle-tracker")
const path = require('path')

const pages = {
  'all_products': {
    entry: './src/pages/products/all_products.js',
    chunks: ['chunk-vendor']
  }
}

module.exports = {
  pages: pages,
  productionSourceMap: false,
  publicPath: 'http://localhost:8080/',
  outputDir: './dev-resources/',
  chainWebpack: config => {
    config.module.rules.delete('eslint')
    config.optimization.splitChunks({
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'chunk-vendors',
          chunks: 'all',
          priority: 1
        }
      }
    })
    Object.keys(pages).forEach(page => {
      config.plugins.delete(`html-${page}`)
      config.plugins.delete(`preload-${page}`)
      config.plugins.delete(`prefetch-${page}`)
    })
    config.plugin('BundleTracker').use(BundleTracker, [{
      path: __dirname,
      filename: 'webpack-stats.json'
    }])
    config.resolve.alias.set('__STATIC__', 'static')
  }
}
