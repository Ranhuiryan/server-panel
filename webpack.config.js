const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const webpack = require('webpack');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  
  return {
    ...config,
    plugins: [
      ...config.plugins,
      new webpack.DefinePlugin({
        'process.env.EXPO_ROUTER_APP_ROOT': JSON.stringify('./app')
      })
    ],
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        'react-native$': 'react-native-web',
        'styled-components/native': 'styled-components'
      },
      fallback: {
        ...config.resolve.fallback,
        'stylis': require.resolve('stylis')
      }
    }
  };
}; 