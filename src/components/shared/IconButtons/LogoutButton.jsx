import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import ButtonWithIcon from './ButtonWithIcon';

const LogoutButton = ({ onClick }) => {
  return <ButtonWithIcon icon={<LogoutIcon />} text="Logout" onClick={onClick} />;
};

export default LogoutButton;
