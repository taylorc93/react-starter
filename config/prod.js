var path = require('path');
var webpack = require('webpack');

var rootDir = path.join(__dirname, '..');

module.exports = {
  devtool: 'source-map',

  entry: [
    path.join(rootDir, 'src/index')
  ],

  output: {
    path: path.join(rootDir, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],

  resolve: {
    alias: {
      components: path.join(rootDir, 'src/components'),
      actions: path.join(rootDir, 'src/store/actions'),
      reducers: path.join(rootDir, 'src/store/reducers'),
      views: path.join(rootDir, 'src/views')
    }
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(rootDir, 'src')
    }]
  }
};
