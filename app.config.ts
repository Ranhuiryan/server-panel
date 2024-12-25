import { ExpoConfig } from 'expo/config';

const config: ExpoConfig = {
  name: 'Server Dashboard',
  slug: 'server-dashboard',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#F5F9FF'
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: [
    '**/*'
  ],
  web: {
    favicon: './assets/favicon.png',
    bundler: 'webpack',
    output: 'static',
    build: {
      babel: {
        dangerouslyAddModulePathsToTranspile: [
          '@react-native-community',
          'react-native-charts-wrapper'
        ]
      }
    }
  }
};

export default config; 