import React from 'react';
import { StyledAlert, AlertWrapper } from './Alert.styles';
import { ALERT_SEVERITIES } from '../../../constants/shared.constants';

export default function SharedAlert({
  severity = ALERT_SEVERITIES.ERROR,
  children,
  ...rest
}) {
  return (
    <AlertWrapper>
      <StyledAlert severity={severity} {...rest}>
        {children}
      </StyledAlert>
    </AlertWrapper>
  );
}
