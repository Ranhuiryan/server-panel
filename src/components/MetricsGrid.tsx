import React from 'react';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface MetricItemProps {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  label: string;
  value: string;
  trend?: number;
  color: string;
}

const metrics: MetricItemProps[] = [
  {
    icon: 'cpu-64-bit',
    label: 'CPU Usage',
    value: '45%',
    trend: 2.5,
    color: '#4C9AFF'
  },
  {
    icon: 'memory',
    label: 'Memory',
    value: '6.2GB',
    trend: -1.2,
    color: '#6554C0'
  },
  {
    icon: 'database',
    label: 'Storage',
    value: '234GB',
    trend: 0.8,
    color: '#00B8D9'
  },
  {
    icon: 'network',
    label: 'Network',
    value: '1.2GB/s',
    trend: 5.7,
    color: '#36B37E'
  }
];

function MetricItem({ icon, label, value, trend, color }: MetricItemProps) {
  return (
    <MetricCard>
      <IconContainer style={{ backgroundColor: `${color}15` }}>
        <MaterialCommunityIcons name={icon} size={24} color={color} />
      </IconContainer>
      <MetricLabel>{label}</MetricLabel>
      <MetricValue>{value}</MetricValue>
      {trend && (
        <TrendContainer>
          <MaterialCommunityIcons 
            name={trend > 0 ? 'trending-up' : 'trending-down'} 
            size={16} 
            color={trend > 0 ? '#36B37E' : '#FF5630'} 
          />
          <TrendText style={{ color: trend > 0 ? '#36B37E' : '#FF5630' }}>
            {Math.abs(trend)}%
          </TrendText>
        </TrendContainer>
      )}
    </MetricCard>
  );
}

export function MetricsGrid() {
  return (
    <Container>
      {metrics.map((metric, index) => (
        <MetricItem key={index} {...metric} />
      ))}
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
`;

const MetricCard = styled.View`
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  width: 48%;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 3px;
  elevation: 3;
`;

const IconContainer = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

const MetricLabel = styled.Text`
  font-size: 14px;
  color: #6B7A99;
  margin-bottom: 4px;
`;

const MetricValue = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #1A2B4B;
`;

const TrendContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

const TrendText = styled.Text`
  font-size: 12px;
  margin-left: 4px;
`; 