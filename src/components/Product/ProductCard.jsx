import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  Rating,
} from '@mui/material';

const ProductCard = ({ id, image, name, price, rating, onSelect }) => {
  return (
    <Card sx={{ width: 250 }}>
      <CardActionArea onClick={() => onSelect(id)}>
        <CardMedia component="img" height="160" image={image} alt={name} />

        <CardContent>
          <Typography variant="subtitle1" fontWeight="bold" noWrap>
            {name}
          </Typography>

          <Typography variant="body2" color="primary">
            ₪{price}
          </Typography>

          <Rating value={rating} readOnly size="small" />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
