const path = require('path');

module.exports = () => ([
  // require('postcss-nesting')(),
  // require('postcss-cssnext')(),
  require('postcss-flexbugs-fixes'),
  require('autoprefixer')({
    browsers: [
      'last 2 versions',
      'not ie < 11',
    ],
    flexbox: 'no-2009',
  }),
  // require('postcss-reporter')({ clearMessages: true }),
]);
