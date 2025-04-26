import { styled } from '@mui/material/styles'; 
import Select from '@mui/material/Select';
import { DEFAULT_PLACEHOLDER } from '../constants/selectConstants'; // התאימי את הנתיב לפי הצורך


export const StyledSelect = styled(Select)(({ theme }) => ({
  width: '12.5rem',
  '& .MuiSelect-indicator': {
    transition: '0.2s',
    '&.Mui-expanded': {
      transform: 'rotate(-180deg)',
    },
  },
}));

