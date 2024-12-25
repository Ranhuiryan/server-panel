import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DashboardScreen } from './src/screens/DashboardScreen';

const theme = {
  dark: false,
  colors: {
    primary: '#4C9AFF',
    background: '#F5F9FF',
    card: '#FFFFFF',
    text: '#1A2B4B',
    border: '#E8F0FE',
    notification: '#FF5630',
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <DashboardScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
} 