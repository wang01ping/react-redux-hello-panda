var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'eventsource-polyfill',
    './app/index'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  debug: true,
  devtool: 'source-map',
  plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
      })
  ],
  
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    }],
    postLoaders: [
      {
        test: /\.js$/,
        loaders: ['es3ify-loader']
      }
    ]
  }
}
