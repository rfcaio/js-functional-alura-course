const path = require('path')

module.exports = {
  devServer: {
    before: (app, server) => {
      app.get('/notes', (req, res) => {
        res.json([
          {
            date: '2017-10-31',
            items: [
              { code: '2143', value: 200 },
              { code: '2111', value: 500 }
            ]
          },
          {
            date: '2017-07-12',
            items: [
              { code: '2222', value: 120 },
              { code: '2143', value: 280 }
            ]
          },
          {
            date: '2017-02-02',
            items: [
              { code: '2143', value: 110 },
              { code: '7777', value: 390 }
            ]
          }
        ])
      })
    },
    contentBase: './dist',
    port: 8001
  },
  devtool: 'inline-source-map',
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader', 'eslint-loader'] }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  watch: true
}
