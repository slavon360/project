const path = require('path');

module.exports = {
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.jsx?$/,
      include: [
        path.resolve(__dirname, '../src'),
      ],
      loaders: ['eslint-loader'],
    }, {
      test: /\.css$/,
      include: [
        path.join(__dirname, '../src'),
      ],
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
          plugins: require('../webpack/postcss.config')(),
        }
      }],
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff',
    }, {
      test: /\.(ttf|eot|woff|otf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
    }],
  },
};
