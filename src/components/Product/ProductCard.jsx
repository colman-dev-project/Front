import React from 'react';
import { CardContent, CardActionArea, Rating } from '@mui/material';
import { StyledCard } from './Product.styled.js';
import { UI_TEXT } from '../../constants/text';
import SharedTypography from '../shared/Text/SharedText.jsx';
import { SharedImage } from '../shared/Image/SharedImage.jsx';
import { addSignShekel  } from '../../utils/converting.js';

const ProductCard = ({
  id,
  images,
  name,
  price,
  rating,
  onSelect,
  ...props
}) => {
  return (
    <StyledCard {...props}>
      <CardActionArea onClick={() => onSelect(id)}>
        <SharedImage src={images} alt={name} />

        <CardContent>
          <SharedTypography variant={UI_TEXT.SUBTITLE1_VARIANT}>
            {UI_TEXT.NAME}
          </SharedTypography>

          <SharedTypography variant="body2">
            {addSignShekel (price)}
          </SharedTypography>

          <Rating value={rating} readOnly size="small" />
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};

export default ProductCard;
