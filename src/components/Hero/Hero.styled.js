import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';


export const HeroImgBox = styled(Box)(({ theme }) => ({
  width: 768,
  height: 300,
  objectFit: 'cover',
  boxShadow: theme.shadows[3],
}));
