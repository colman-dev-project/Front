import { styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';

export const StyledAlert = styled(Alert)(({ theme }) => ({}));

export const AlertWrapper = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(1),
}));
