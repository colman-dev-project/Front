import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { defaultButtonStyle } from './Button.styles';

function SharedLinkButton({ label, to, style = {}, ...rest }) {
  return (
    <Button
      component={Link}
      to={to}
      sx={{ ...defaultButtonStyle, ...style }}
      {...rest}
    >
      {label}
    </Button>
  );
}

export default SharedLinkButton;
