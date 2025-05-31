import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButton } from './Button.styles';

function SharedLinkButton({ label, children, to, style = {}, ...rest }) {
  return (
    <StyledButton component={Link} to={to} sx={style} {...rest}>
      {children || label}
    </StyledButton>
  );
}

export default SharedLinkButton;
