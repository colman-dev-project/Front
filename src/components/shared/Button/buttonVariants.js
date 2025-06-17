import { BUTTON_VARIANTS } from '../../../constants/buttonTypes.js';

export const getButtonStyles = (theme) => ({
  [BUTTON_VARIANTS.LINK]: {
    background: 'none',
    color: theme.palette.primary.main,
    textTransform: 'none',
    boxShadow: 'none',
    '&:hover': {
      background: 'transparent',
      textDecoration: 'underline',
    },
  },
  [BUTTON_VARIANTS.PURCHASE]: {
    backgroundColor: theme.palette.success.main,
    color: '#fff',
    fontWeight: 700,
    borderRadius: 12,
    '&:hover': {
      backgroundColor: theme.palette.success.dark,
    },
  },
  [BUTTON_VARIANTS.NAVBAR]: {
    background: 'none',
    color: theme.palette.common.white,
    textTransform: 'none',
    fontWeight: 500,
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.1)',
    },
  },
  [BUTTON_VARIANTS.DEFAULT]: {
    borderRadius: 12,
    textTransform: 'none',
    fontWeight: 600,
  },
});
