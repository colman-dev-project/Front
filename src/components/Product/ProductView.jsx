import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Rating,
  List,
  ListItem,
  ListItemText,
  Button,
  Divider,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { StyledCard, BigStyledCard , ratingWrapperStyle} from './Product.styles';
import { SharedImage } from '../shared/Image/SharedImage';
import SharedTypography from '../shared/Text/SharedText.jsx';
import { Box } from '@mui/material';


const ProductView = ({
  image,
  name,
  description,
  price,
  rating,
  reviewCount,
  lockerLocation,
  reviews,
  onAddToCart,
}) => {
  return (
    <BigStyledCard >
      <SharedImage  src={image} alt={name} />

      <CardContent>
        <SharedTypography variant="h5">{name}</SharedTypography>

        <SharedTypography variant="body2">{description}</SharedTypography>

        <SharedTypography variant="h6">₪{price}</SharedTypography>

        <Box style={ratingWrapperStyle}>
          <Rating value={rating} readOnly />
          <SharedTypography variant="body2">
            ({reviewCount} reviews)
          </SharedTypography>
        </Box>

        <SharedTypography variant="body2">{lockerLocation}</SharedTypography>
      </CardContent>

      <CardActions>
        <Button
          variant="contained"
          fullWidth
          startIcon={<ShoppingCartIcon />}
          onClick={onAddToCart}
        >
          Add to Cart
        </Button>
      </CardActions>

      <Divider />

      <CardContent>
        <SharedTypography variant="subtitle1">Customer Reviews:</SharedTypography>
        <List>
          {reviews.map((rev, idx) => (
            <ListItem key={idx}>
              <ListItemText primary={`${rev.name}: "${rev.text}"`} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </BigStyledCard>
  );
};

export default ProductView;
