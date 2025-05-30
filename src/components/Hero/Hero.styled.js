import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import theme from '../../theme/theme';


export const HeroImgBox = styled(Box)(({ theme }) => ({
  width: '50rem',
  height: '20rem',
  borderRadius:'10rem',
  objectFit: 'cover',
  boxShadow: theme.customShadows.main,
}));
