import React from 'react';
import { DefaultButtonStyle } from './Button.styles';

function SharedButton({ label, style = {}, ...rest }) {
  return (
    <DefaultButtonStyle sx={style} {...rest}>
      {label}
    </DefaultButtonStyle>
  );
}

export default SharedButton;
