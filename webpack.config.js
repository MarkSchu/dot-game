const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      utils: path.resolve(__dirname, 'src/utils'),
      experiments: path.resolve(__dirname, 'src/experiments'),
      pages: path.resolve(__dirname, 'src/pages'),
    }
  },
  optimization: {
      minimize: false
  }
}
