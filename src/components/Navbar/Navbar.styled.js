import { AppBar, Toolbar, Box } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../theme/theme.js';

export const CustomAppBar = styled(AppBar)({
  backgroundColor: theme.palette.grey[900],
});

export const CustomToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  paddingLeft: '1rem',
  paddingRight: '1rem',
});

export const NavLinks = styled(Box)({
  display: 'flex',
  gap: '1.5rem',
});
