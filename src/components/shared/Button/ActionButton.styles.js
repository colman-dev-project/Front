import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { getButtonStyles } from './buttonVariants.js';
import { BUTTON_VARIANTS } from '../../../constants/buttonTypes.js';
import { BUTTON_PROPS } from '../../../constants/buttonProps.js';

export const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== BUTTON_PROPS.VARIANT_TYPE,
})(({ theme, variantType }) => {
  const styles = getButtonStyles(theme);
  return styles[variantType] || styles[BUTTON_VARIANTS.DEFAULT];
});
