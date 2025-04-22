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
    <Card style={{ maxWidth: 600, margin: '0 auto' }}>
      <CardMedia component="img" height="300" image={image} alt={name} />

      <CardContent>
        <Typography variant="h5">{name}</Typography>

        <Typography variant="body2">{description}</Typography>

        <Typography variant="h6">₪{price}</Typography>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Rating value={rating} readOnly />
          <Typography variant="body2">({reviewCount} reviews)</Typography>
        </div>

        <Typography variant="body2">{lockerLocation}</Typography>
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
        <Typography variant="subtitle1">Customer Reviews:</Typography>
        <List>
          {reviews.map((rev, idx) => (
            <ListItem key={idx}>
              <ListItemText primary={`${rev.name}: "${rev.text}"`} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ProductView;
