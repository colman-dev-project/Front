import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';

export const StyledRating = styled(Rating)(({ theme }) => ({}));

export const RatingWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));
