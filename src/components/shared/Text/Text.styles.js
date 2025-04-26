import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const StyledText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 'bold',
  marginBottom: '8px',
}));
