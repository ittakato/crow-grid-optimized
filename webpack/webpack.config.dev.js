const path = require('path');

const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.config.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    port: 9000,
    static: {
      directory: path.resolve(__dirname, '../dist'),
    },
    devMiddleware: {
      index: 'index.html',
      writeToDisk: true,
    },
    client: {
      overlay: true,
    },
    liveReload: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          filename: './images/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Crows',
      filename: 'index.html',
      chunks: ['index'],
      template: './src/index.html',
      minify: true,
    }),
    new HtmlWebpackPlugin({
      title: 'Crows',
      filename: 'about.html',
      chunks: ['about'],
      template: './src/about.html',
      minify: true,
    }),
    new HtmlWebpackPlugin({
      title: 'Crows',
      filename: 'facts.html',
      chunks: ['facts'],
      template: './src/facts.html',
      minify: true,
    }),
  ],
});
