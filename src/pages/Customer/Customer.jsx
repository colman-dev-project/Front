import React from 'react';
import { managementContainerStyle } from './Customer.styled.js';
import FloatingActionButtonZoom from '../../components/shared/Management_bar/SharedManagementBar';

function Customer_Bar() {
  
  return (
    <div style={managementContainerStyle}>
      <FloatingActionButtonZoom role="customer" />
    </div>
  );
}

export default Customer_Bar;
