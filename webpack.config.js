var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractSCSS = new ExtractTextPlugin('../../stylesheets/dist/style.css');

module.exports = {
  context: __dirname,
  node: {
    fs: "empty"
  },
  entry: './assets/javascripts/src/main.js',
  output: {
    path: path.join(__dirname, "assets", "javascripts", "dist"),
    filename: "application.js",//,
    publicPath: '/assets'
  },
  resolve: {
    root: [
      path.resolve('./assets/javascripts'),
      path.resolve('./assets/stylesheets')
    ],
    extensions: ['', '.js'],
    modulesDirectories: [ 'node_modules' ]
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.ejs$/, loader: "ejs-loader" },
      { test: /\.scss$/, loader: extractSCSS.extract(["css-loader", "sass-loader"]) }
    ] 
  },
  plugins: [
    extractSCSS
  ],
  devtool: 'source-map'
}