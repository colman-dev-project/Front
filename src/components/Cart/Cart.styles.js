import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SharedText from '../shared/Text/SharedText';

export const CartContainer = styled(Box)(({ theme }) => ({
  maxWidth: 480,
  marginInline: 'auto',
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
}));

export const CartTitle = styled(SharedText)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  textAlign: 'center',
}));

export const CartRow = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(2),
}));

export const EmptyCartText = styled('div')(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: 'center',
  padding: theme.spacing(8, 0),
}));
