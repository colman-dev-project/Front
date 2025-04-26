import React from 'react';
import { StyledButton } from './Button.styles';

function SharedButton({ label, style = {}, ...rest }) {
  return (
    <StyledButton sx={style} {...rest}>
      {label}
    </StyledButton>
  );
}

export default SharedButton;
