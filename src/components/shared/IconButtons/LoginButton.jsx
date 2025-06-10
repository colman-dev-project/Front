import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import ButtonWithIcon from './ButtonWithIcon';

const LoginButton = ({ onClick }) => {
  return <ButtonWithIcon icon={<LoginIcon />} text="Login" onClick={onClick} />;
};

export default LoginButton;
