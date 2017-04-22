const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
module.exports = {
    entry: {
        main: './src/app-client.jsx'
    },
    output: {
      path: path.join(__dirname, 'src', 'build', 'js'),
      filename: 'bundle.js'
    },
     resolve: {
        extensions: [".jsx", ".json", ".js"]
     },
    module: {
        loaders: [
            {
              test: path.join(__dirname, 'src'),
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                cacheDirectory: true,
                presets: ['react', 'es2015']
              }
           },
            {
                test: /\.scss$/,
                include: path.join(__dirname, 'src', 'scss'),
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({ filename: './src/build/css/[name].css', disable: false, allChunks: true })
    ]
}
