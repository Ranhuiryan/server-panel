import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import styled from 'styled-components/native';

import { ServerStatusCard } from '../components/ServerStatusCard';
import { MetricsGrid } from '../components/MetricsGrid';
import { ResourceChart } from '../components/ResourceChart';
import { ActionPanel } from '../components/ActionPanel';

export function DashboardScreen() {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header>Server Management Dashboard</Header>
          
          <ServerStatusCard />
          
          <MetricsContainer>
            <MetricsGrid />
          </MetricsContainer>
          
          <ChartContainer>
            <ResourceChart />
          </ChartContainer>
          
          <ActionPanel />
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #F5F9FF;
`;

const Header = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #1A2B4B;
  margin-bottom: 24px;
`;

const MetricsContainer = styled.View`
  margin-vertical: 16px;
`;

const ChartContainer = styled.View`
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  margin-vertical: 16px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 3px;
  elevation: 3;
`; 