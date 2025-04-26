import { styled } from '@mui/material/styles'; // Use MUI styled API from @mui/material
import Select from '@mui/material/Select'; // Use MUI's Select component

export const StyledSelect = styled(Select)(({ theme }) => ({
  width: 200,
  '& .MuiSelect-indicator': {
    transition: '0.2s',
    '&.Mui-expanded': {
      transform: 'rotate(-180deg)',
    },
  },
}));
