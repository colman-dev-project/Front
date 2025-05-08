import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';

export const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconFilled':{},
  '& .MuiRating-iconEmpty':{},
}));
