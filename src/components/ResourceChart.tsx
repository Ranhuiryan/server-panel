import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const chartData = {
  labels: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
  datasets: [
    {
      data: [65, 59, 80, 81, 56, 75],
      color: (opacity = 1) => `rgba(76, 154, 255, ${opacity})`,
      strokeWidth: 2
    },
    {
      data: [45, 54, 60, 65, 51, 59],
      color: (opacity = 1) => `rgba(101, 84, 192, ${opacity})`,
      strokeWidth: 2
    }
  ],
  legend: ['CPU', 'Memory']
};

export function ResourceChart() {
  return (
    <Container>
      <ChartHeader>
        <Title>Resource Usage</Title>
        <TimeframeContainer>
          <TimeframeButton active>
            <TimeframeText active>24H</TimeframeText>
          </TimeframeButton>
          <TimeframeButton>
            <TimeframeText>7D</TimeframeText>
          </TimeframeButton>
          <TimeframeButton>
            <TimeframeText>1M</TimeframeText>
          </TimeframeButton>
        </TimeframeContainer>
      </ChartHeader>

      <LineChart
        data={chartData}
        width={screenWidth - 64}
        height={220}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(26, 43, 75, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#fff'
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </Container>
  );
}

const Container = styled.View``;

const ChartHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #1A2B4B;
`;

const TimeframeContainer = styled.View`
  flex-direction: row;
  background-color: #F0F7FF;
  border-radius: 8px;
  padding: 4px;
`;

interface TimeframeProps {
  active?: boolean;
}

const TimeframeButton = styled.TouchableOpacity<TimeframeProps>`
  padding: 6px 12px;
  border-radius: 6px;
  background-color: ${props => props.active ? '#4C9AFF' : 'transparent'};
`;

const TimeframeText = styled.Text<TimeframeProps>`
  color: ${props => props.active ? '#FFFFFF' : '#6B7A99'};
  font-size: 12px;
  font-weight: 500;
`; 