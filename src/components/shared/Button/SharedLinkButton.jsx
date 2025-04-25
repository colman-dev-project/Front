import React from 'react';
import { Link } from 'react-router-dom';
import { DefaultButtonStyle } from './Button.styles';

function SharedLinkButton({ label, to, style = {}, ...rest }) {
  return (
    <DefaultButtonStyle component={Link} to={to} sx={style} {...rest}>
      {label}
    </DefaultButtonStyle>
  );
}

export default SharedLinkButton;
