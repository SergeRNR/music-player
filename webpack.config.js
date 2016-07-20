var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: path.join(APP_DIR, 'app.js'),
  output: {
    path: BUILD_DIR,
    filename: 'all.js'
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js'],
    root: [path.join(__dirname, 'src')]
  }
};

module.exports = config;
