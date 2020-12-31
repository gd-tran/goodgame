const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    'index' : './client/index.js',
  },
  output: {
    path: __dirname + './build',
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    publicPath:  '/build',
    compress: true,
    port: 8080,
    proxy: {
      '/': {
      target: 'http://localhost:3000/',
    },
  },
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: 'url-loader',
      },
    ],
  },
};
