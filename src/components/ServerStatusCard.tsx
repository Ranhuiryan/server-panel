import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function ServerStatusCard() {
  return (
    <Container>
      <StatusHeader>
        <StatusIcon>
          <MaterialCommunityIcons name="server" size={24} color="#4C9AFF" />
        </StatusIcon>
        <StatusInfo>
          <ServerName>Production Server</ServerName>
          <StatusText>Running</StatusText>
        </StatusInfo>
      </StatusHeader>
      
      <StatsContainer>
        <StatItem>
          <StatValue>99.9%</StatValue>
          <StatLabel>Uptime</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue>45ms</StatValue>
          <StatLabel>Latency</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue>2.1GB</StatValue>
          <StatLabel>Memory</StatLabel>
        </StatItem>
      </StatsContainer>
    </Container>
  );
}

const Container = styled.View`
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 3px;
  elevation: 3;
`;

const StatusHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

const StatusIcon = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: #F0F7FF;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

const StatusInfo = styled.View`
  flex: 1;
`;

const ServerName = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #1A2B4B;
`;

const StatusText = styled.Text`
  font-size: 14px;
  color: #4CAF50;
  margin-top: 4px;
`;

const StatsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 16px;
  border-top-width: 1px;
  border-top-color: #E8F0FE;
`;

const StatItem = styled.View`
  align-items: center;
`;

const StatValue = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #1A2B4B;
`;

const StatLabel = styled.Text`
  font-size: 12px;
  color: #6B7A99;
  margin-top: 4px;
`; 