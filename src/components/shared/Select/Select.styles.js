import { styled } from '@mui/joy/styles'; // הוספת ייבוא חסר
import { selectClasses } from '@mui/joy/Select';
import Select from '@mui/joy/Select';

export const StyledSelect = styled(Select)(({}) => ({
  width: 240,
  [`& .${selectClasses.indicator}`]: {
    transition: '0.2s',
    [`&.${selectClasses.expanded}`]: {
      transform: 'rotate(-180deg)',
    },
  },
}));
