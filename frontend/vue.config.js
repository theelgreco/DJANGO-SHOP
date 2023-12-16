const BundleTracker = require("webpack-bundle-tracker")
const path = require('path')

const pages = {
    'all_products': {
        entry: './src/pages/products/all_products.js',
        chunks: ['chunk-vendors']
    }
}

module.exports = {
    devServer: {
        hot: true
    },
    // configureWebpack: {
    //     optimization: {
    //         runtimeChunk: 'single',
    //     },
    // },
    pages: pages,
    filenameHashing: false,
    productionSourceMap: false,
    publicPath: 'http://localhost:8080/',
    outputDir: './dev-resources/',
    chainWebpack: (config) => {
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
        config.devServer
            .public('http://localhost:8080')
            .host('localhost')
            .port(8080)
            .hotOnly(true)
            .watchOptions({poll: 100})
            .https(false)
            .headers({'Access-Control-Allow-Origin': ['*']})
    }
}
