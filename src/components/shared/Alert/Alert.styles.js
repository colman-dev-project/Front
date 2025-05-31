import { styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import { Box } from '@mui/material';

export const StyledAlert = styled(Alert)(({ theme }) => ({}));

export const AlertWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));
