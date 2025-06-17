import React from 'react';
import { CardActions, CardContent, Divider } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { BigStyledCard } from './Product.styled.js';
import { SharedImage } from '../shared/Image/SharedImage';
import SharedTypography from '../shared/Text/SharedText.jsx';
import ActionButton from '../shared/Button/ActionButton.jsx';
import { UI_TEXT } from '../../constants/text.js';
import { addSignShekel } from '../../utils/converting.js';

const ProductView = ({
  images,
  name,
  description,
  price,
  lockerLocation,
  handleAddToCart,
}) => (
  <BigStyledCard>
    <SharedImage src={images} alt={name} />

    <CardContent>
      <SharedTypography variant="h5">{name}</SharedTypography>

      <SharedTypography variant="body2">{description}</SharedTypography>

      <SharedTypography variant="h6">{addSignShekel(price)}</SharedTypography>

      <SharedTypography variant="body2">{lockerLocation}</SharedTypography>
    </CardContent>

    <CardActions>
      <ActionButton
        variant="contained"
        fullWidth
        startIcon={<ShoppingCartIcon />}
        onClick={handleAddToCart}
      >
        {UI_TEXT.ADD_TO_CART}
      </ActionButton>
    </CardActions>

    <Divider />
  </BigStyledCard>
);

export default ProductView;
