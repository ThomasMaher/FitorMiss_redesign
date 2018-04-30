var path = require('path');

module.exports = {
  mode: "development",
  context: __dirname,
  entry: "./app/entry_file.js",
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env'],
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
}