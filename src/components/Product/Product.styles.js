import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';
import theme from '../../theme/theme.js';
import { display } from '@mui/system';

export const StyledCard = styled(Card)(({ theme }) => ({
  width: '15rem',
  height: '17rem',
}));

export const SharedImage = {
  width: '18rem',
  height: '12rem',
};

export const SharedTypography = {
  color: theme.palette.text.primary,
  ...(props) =>
    props.variant === 'subtitle1' && {
      fontWeight: 'bold',
      whiteSpace: 'nowrap',
    },
};

export const BigStyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 600,
  margin: '0 auto',
  borderRadius: 12,
}));

export const ratingWrapperStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
};
