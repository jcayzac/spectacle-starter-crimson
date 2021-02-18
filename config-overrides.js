/* eslint-disable react-hooks/rules-of-hooks */
const fs = require('fs');
const path = require('path');
const { override, useBabelRc, addWebpackModuleRule } = require('customize-cra');

// Resolve the location of react-scripts using the local binary installed by npm/yarn,
// then resolve the location of babel-loader inside that.
const reactScriptsPath = path.join(fs.realpathSync(path.join(__dirname, 'node_modules', '.bin', 'react-scripts')), '..', '..')
const babelLoader = require.resolve('babel-loader', {
  paths: [reactScriptsPath]
})

//const reactScriptsModulesPath = path.join(reactScriptsPath, 'node_modules');
//console.error("XXX", babelLoader, reactScriptsModulesPath)

module.exports = override(
  useBabelRc(),
  /*
  (config) => {
    config.resolveLoader = {modules: [...(config.resolveLoader?.modules ?? []), 'node_modules', reactScriptsModulesPath]}
    //config.resolve = {modules: [...(config.resolve?.modules ?? []), 'node_modules', reactScriptsModulesPath]}
    return config
  },
  */
  addWebpackModuleRule({
    test: /\.mdx$/,
    use: [babelLoader, require.resolve('spectacle-mdx-loader')]
  })
);
