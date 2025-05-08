import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';

export const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.primary.main,
  '&.Mui-checked': {
    color: theme.palette.secondary.main,
  },
}));
