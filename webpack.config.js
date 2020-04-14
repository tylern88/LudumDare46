const path = require('path');
const webpack = require('webpack')
module.exports = {
  entry: './src/app.js',
  watch: true,
  resolve: {
    extensions: [ '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  },
  plugins: [],
  devServer: {
    port: 3001 // Specify a port number to listen for requests
  },
};