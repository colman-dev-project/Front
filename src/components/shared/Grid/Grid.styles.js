import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export const StyledBox = styled(Box)({
  width: '100%',
});

export const StyledGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
}));

export const StyledItem = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
