const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { baseConfig, rules, plugins } = require('./base');

const webpackConfig = Object.assign({}, baseConfig, {
  stats: false,
  devtool: 'cheap-module-source-map',
  output: {
    filename: 'scripts/[name].js',
    path: path.resolve(__dirname, '../build'),
    publicPath: `/`,
  },
  module: {
    rules: [
      ...rules,
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            query: {
              import: false,
              importLoaders: 1,
              localIdentName: '[folder]__[local]___[hash:base64:5]',
              modules: true,
              sourceMap: true
            },
          }, {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: require('./postcss.config')(),
            }
          }],
        }),
      }
    ],
  },
  plugins: [
    ...plugins,
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin({
      filename: `styles/[name].css`,
      allChunks: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      sourceMap: true,
    }),
  ],
});

module.exports = webpackConfig;
