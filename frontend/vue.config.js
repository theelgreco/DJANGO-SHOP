const BundleTracker = require("webpack-bundle-tracker")
const path = require('path')

const pages = {
  'all_products': {
    entry: './src/pages/products/all_products.js',
    chunks: ['chunk-vendor']
  }
}

module.exports = {
  transpileDependencies: true,
  pages: pages,
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
      filename: 'webpack-stats.json'
    }])
    config.resolve.alias.set('__STATIC__', 'static')

  }
}
