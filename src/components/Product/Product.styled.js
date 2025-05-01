import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';
import theme from '../../theme/theme.js';
import { display } from '@mui/system';

export const StyledCard = styled(Card)(({ theme }) => ({
  width: '15rem',
  height: '17rem',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',

    // TODO: replace this shadow with the shadow in the theme. (right now the shadow doesnt appaer in the theme).
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
  },
}));

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
