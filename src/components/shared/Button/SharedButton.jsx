import React from 'react';
import { StyledButton } from './Button.styles';

function SharedButton({ label, children, style = {}, ...rest }) {
  return (
    <StyledButton sx={style} {...rest}>
      {children || label}
    </StyledButton>
  );
}

export default SharedButton;
