import React from 'react';
import { StyledButton } from './ButtonWithIcon.styled'; // יבוא את הסטייל מהקובץ

const ButtonWithIcon = ({ icon, text, onClick, ...rest }) => {
  return (
    <StyledButton
      variant="outlined"
      startIcon={icon}
      onClick={onClick}
      {...rest}
    >
      {text}
    </StyledButton>
  );
};

export default ButtonWithIcon;
