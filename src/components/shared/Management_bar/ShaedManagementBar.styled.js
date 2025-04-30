import { green } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';

export const containerOuterBox = {
  position: 'relative',
};

export const StyledAppBar = styled(AppBar)({
  position: 'static',
  color: 'default',
  // TODO: Change this According to the style
  '& .MuiTab-root': {
    color: 'red',
    backgroundColor: 'green',
  },
});

export const fabStyle = {
  //   position: 'fixed',
  //   bottom: 16,
  //   right: 16,
  //   display: 'flex',
  //   flexDirection: 'column',
  padding: 1,
  display: 'flex',
  flexDirection: 'column',
};

export const fabGreenStyle = {
  color: 'common.white',
  bgcolor: green[500],
  '&:hover': {
    bgcolor: green[600],
  },
};

export const containerStyle = {
  bgcolor: 'background.paper',
  width: 500,
  position: 'relative',
  minHeight: 200,
};

export const tabPanelStyle = {
  p: 3,
};

export const fabContainerStyle = {
  gap: 20,
  zIndex: 10000,
};
