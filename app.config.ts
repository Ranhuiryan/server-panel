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
  web: {
    bundler: 'metro',
    output: 'static',
    favicon: './assets/favicon.png'
  },
  plugins: [
    'expo-router'
  ],
  experiments: {
    tsconfigPaths: true
  }
};

export default config; 