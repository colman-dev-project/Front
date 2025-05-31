import React from 'react';
import { StyledStack } from './Stack.styles';
import { STACK_DEFAULTS } from '../../../constants/shared.constants'; 

export default function SharedStack({
  children,
  spacing = STACK_DEFAULTS.SPACING,
  direction = STACK_DEFAULTS.DIRECTION,
  ...rest
}) {
  return (
    <StyledStack spacing={spacing} direction={direction} {...rest}>
      {children}
    </StyledStack>
  );
}
