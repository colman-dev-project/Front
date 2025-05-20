import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  padding: 8,
  borderRadius: '50%',
  color: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));
