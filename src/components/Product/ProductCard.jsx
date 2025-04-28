import React from 'react';
import { CardContent, CardActionArea, Rating } from '@mui/material';
import { StyledCard } from './Product.styles';
import { UI_TEXT } from '../../constants/text';
import SharedTypography from '../shared/Text/SharedText.jsx';
import { SharedImage } from '../shared/Image/SharedImage.jsx';

const ProductCard = ({
  id,
  image,
  name,
  price,
  rating,
  onSelect,
  ...props
}) => {
  return (
    <StyledCard {...props}>
      <CardActionArea onClick={() => onSelect(id)}>
        <SharedImage src={image} alt={name} />

        <CardContent>
          <SharedTypography variant="subtitle1">
            {UI_TEXT.NAME}
          </SharedTypography>

          <SharedTypography variant="body2">₪{UI_TEXT.PRICE}</SharedTypography>

          <Rating value={rating} readOnly size="small" />
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};

export default ProductCard;
