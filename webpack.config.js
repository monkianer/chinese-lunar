const path = require('path');
const webpack = require('webpack');

module.exports = [
  {
    target: 'node',
    entry: {
      index: './index-var.js',
    },
    output: {
      path: path.join(__dirname),
      filename: 'chinese-lunar.js',
      libraryTarget: 'var',
    },
    module: { //設定你的檔案選項
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({ "process.env.DEV": JSON.stringify("production") })
    ],
    mode: 'production'
  }, {
    target: 'node',
    entry: {
      index: './index-commonjs.js',
    },
    output: {
      path: path.join(__dirname),
      filename: 'main.js',
      libraryTarget: 'commonjs2',
    },
    module: { //設定你的檔案選項
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
      ],
    },
    mode: 'production'
  }
];
