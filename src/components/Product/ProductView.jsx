import React from 'react';
import {
  Box,
  CardActions,
  CardContent,
  Divider,
  Rating,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { BigStyledCard, ratingWrapperStyle } from './Product.styled.js';
import { SharedImage } from '../shared/Image/SharedImage';
import SharedTypography from '../shared/Text/SharedText.jsx';
import SharedButton from '../shared/Button/SharedButton.jsx';
import { UI_TEXT } from '../../constants/text.js';
import { addSignShekel } from '../../utils/converting.js';

const ProductView = ({
  images,
  name,
  description,
  price,
  rating,
  reviewCount,
  lockerLocation,
  handleAddToCart,
}) => {
  return (
    <BigStyledCard>
      <SharedImage src={images} alt={name} />

      <CardContent>
        <SharedTypography variant="h5">{name}</SharedTypography>

        <SharedTypography variant="body2">{description}</SharedTypography>

        <SharedTypography variant="h6">
          {addSignShekel(price)}
        </SharedTypography>

        <Box style={ratingWrapperStyle}>
          <Rating value={rating} readOnly />
          <SharedTypography variant="body2">
            ({reviewCount} {UI_TEXT.REVIEWS})
          </SharedTypography>
        </Box>

        <SharedTypography variant="body2">{lockerLocation}</SharedTypography>
      </CardContent>

      <CardActions>
        <SharedButton
          variant="contained"
          fullWidth
          startIcon={<ShoppingCartIcon />}
          onClick={handleAddToCart}
          label={UI_TEXT.ADD_TO_CART}
        ></SharedButton>
      </CardActions>

      <Divider />


    </BigStyledCard>
  );
};

export default ProductView;
