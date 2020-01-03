const path = require('path');

module.exports = {
  entry: {
    path: path.resolve('./src/js/')
  },
  output: {
    path: path.resolve('./build/js'),
    filename: 'index.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
};