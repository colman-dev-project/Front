import React from 'react';
import { managementContainerStyle } from './Manage.styled.js';
import FloatingActionButtonZoom from '../../components/shared/Management_bar/SharedManagementBar';

function Manager_bar() {
  
  return (
    <div style={managementContainerStyle}>
      <FloatingActionButtonZoom role="manager" />
    </div>
  );
}

export default Manager_bar;
