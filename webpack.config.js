const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  }
}
