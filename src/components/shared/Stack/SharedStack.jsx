import React from 'react';
import { StyledStack } from './Stack.styles';

export default function SharedStack({ children, spacing = 2, direction = "column", ...rest }) {
  return (
    <StyledStack spacing={spacing} direction={direction} {...rest}>
      {children}
    </StyledStack>
  );
}
