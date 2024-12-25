import React from 'react';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const actions = [
  { icon: 'restart', label: 'Restart', color: '#4C9AFF' },
  { icon: 'stop-circle', label: 'Stop', color: '#FF5630' },
  { icon: 'cog', label: 'Settings', color: '#6554C0' },
  { icon: 'console', label: 'Console', color: '#00B8D9' }
];

export function ActionPanel() {
  return (
    <Container>
      <PanelTitle>Quick Actions</PanelTitle>
      <ActionsGrid>
        {actions.map((action, index) => (
          <ActionButton key={index}>
            <IconContainer style={{ backgroundColor: `${action.color}15` }}>
              <MaterialCommunityIcons 
                name={action.icon} 
                size={24} 
                color={action.color} 
              />
            </IconContainer>
            <ActionLabel>{action.label}</ActionLabel>
          </ActionButton>
        ))}
      </ActionsGrid>
    </Container>
  );
}

const Container = styled.View`
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

const PanelTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #1A2B4B;
  margin-bottom: 16px;
`;

const ActionsGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
`;

const ActionButton = styled.TouchableOpacity`
  width: 48%;
  padding: 12px;
  border-radius: 8px;
  background-color: #F8FAFD;
  flex-direction: row;
  align-items: center;
`;

const IconContainer = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

const ActionLabel = styled.Text`
  font-size: 14px;
  color: #1A2B4B;
  font-weight: 500;
`; 