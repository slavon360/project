const path = require('path');
const webpack = require('webpack');
const { resolve } = require('path');
const { baseConfig, rules, plugins } = require('./base');

const webpackConfig = Object.assign({}, baseConfig, {
  devtool: 'source-map',
  output: {
    filename: 'scripts/[name].js',
    path: resolve(__dirname, 'devel'),
  },
  module: {
    rules: [
      ...rules,
      {
        test: /\.css$/,
        use: ['style-loader', {
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
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    ...plugins,
  ],
  devServer: {
    contentBase: resolve(__dirname, 'devel'),
    publicPath: '/',
    historyApiFallback: true,
    port: 8888,
    inline: true,
    hot: true,
  },
});

module.exports = webpackConfig;
