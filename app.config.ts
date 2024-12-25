import { ExpoConfig } from 'expo/config';

const config: ExpoConfig = {
  name: 'Server Dashboard',
  slug: 'server-dashboard',
  version: '1.0.0',
  orientation: 'portrait',
  userInterfaceStyle: 'light',
  web: {
    bundler: 'metro',
    output: 'static'
  },
  plugins: [
    'expo-router'
  ],
  experiments: {
    tsconfigPaths: true
  },
  scheme: 'server-dashboard'
};

export default config; 