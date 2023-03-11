const path = require('path');
const glob = require('glob');

const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');

const common = require('./webpack.config.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'eval',
  optimization: {
    minimize: true,
    minimizer: [
      '...',
      new CssMimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardCommens: { removeAll: true },
            },
          ],
        },
      }),
    ],
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxSize: Infinity,
      minSize: 0,
      cacheGroups: {
        node_modules: {
          test: /[\\/]node_modules[\\/]/,
          name: function (module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            return packageName;
          },
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
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
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                quality: 40,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.join(__dirname, '../src')}/**/*`, {
        nodir: true,
      }),
    }),
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
