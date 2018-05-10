function buildConfig(env) {
    return require('./webpack/' + env + '.js'); // eslint-disable-line
  }
  
  module.exports = buildConfig;
  