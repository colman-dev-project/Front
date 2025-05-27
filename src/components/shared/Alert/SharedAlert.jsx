import React from 'react';
import { StyledAlert, AlertWrapper } from './Alert.styles';

export default function SharedAlert({ severity = "error", children, ...rest }) {
  return (
    <AlertWrapper>
      <StyledAlert severity={severity} {...rest}>
        {children}
      </StyledAlert>
    </AlertWrapper>
  );
}
