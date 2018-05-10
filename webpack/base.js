const webpack = require('webpack');
const { resolve } = require('path');
const fs = require('fs');

const dir = {
  source: resolve(__dirname, '..', 'src'),
  locales: resolve(__dirname, '..', 'locales'),
  modules: resolve(__dirname, '..', 'node_modules'),
};

const baseConfig = {
  entry: {
    bundle: './src/index',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      dir.modules,
      dir.source,
    ],
  },
};

const rules = [{
  test: /\.jsx?$/,
  exclude: dir.modules,
  use: 'babel-loader',
}, {
  test: /\.jsx?$/,
  exclude: dir.modules,
  enforce: 'pre',
  use: [{ loader: 'eslint-loader' }],
}, {
  test: /\.(svg|png|jpg)$/,
  loader: 'file-loader',
  options: {
    name: 'assets/[name].[ext]',
  },
}, {
  test: /\.(ttf|otf)(\?[a-z0-9=&.]+)?$/,
  loader: 'url-loader',
  options: {
    limit: 1024,
    mimetype: 'application/octet-stream',
    name: 'fonts/[name].[ext]',
  },
}, {
  test: /\.woff(2)?(\?[a-z0-9=&.]+)?$/,
  loader: 'url-loader',
  options: {
    limit: 1024,
    mimetype: 'application/font-woff',
    name: 'fonts/[name].[ext]',
  },
}, {
  test: /\.json$/,
  include: dir.locales,
  loader: 'file-loader',
  options: {
    name: `locales/[name].[ext]`,
  }
}, {
  test: /\.html$/,
  loader: 'file-loader',
  options: {
    name: '[name].[ext]',
  },
}];

const plugins = [
  new webpack.NamedModulesPlugin(),
];

module.exports = {
  dir,
  baseConfig,
  rules,
  plugins,
};
