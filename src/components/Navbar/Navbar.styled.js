import { AppBar, Toolbar, Box } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../theme/theme.js';

export const CustomAppBar = styled(AppBar)({
  backgroundColor: theme.palette.grey[900],
});

export const CustomToolbar = styled(Toolbar)({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

export const NavLinks = styled(Box)({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: '1.5rem',
});
