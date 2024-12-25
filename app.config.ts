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
    bundler: 'metro',
    favicon: './assets/favicon.png',
    output: 'static',
    build: {
      babel: {
        dangerouslyAddModulePathsToTranspile: [
          '@react-native-community',
          'react-native-charts-wrapper'
        ]
      }
    }
  },
  plugins: [
    'expo-router'
  ],
  experiments: {
    tsconfigPaths: true
  }
};

export default config; 