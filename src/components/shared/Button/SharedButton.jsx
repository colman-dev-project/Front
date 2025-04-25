import React from 'react';
import Button from '@mui/material/Button';
import { defaultButtonStyle } from './Button.styles';

function SharedButton({ label, style = {}, ...rest }) {
  return (
    <Button sx={{ ...defaultButtonStyle, ...style }} {...rest}>
      {label}
    </Button>
  );
}

export default SharedButton;
