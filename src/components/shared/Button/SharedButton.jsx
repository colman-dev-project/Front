import React from 'react';
import Button from '@mui/material/Button';
import { defaultButtonStyle } from './Button.styles';

function SharedButton({ label, sx = {}, ...rest }) {
  return (
    <Button sx={{ ...defaultButtonStyle, ...sx }} {...rest}>
      {label}
    </Button>
  );
}

export default SharedButton;
