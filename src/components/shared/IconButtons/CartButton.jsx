import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ButtonWithIcon from './ButtonWithIcon';

const CartButton = ({ onClick }) => {
  return <ButtonWithIcon icon={<ShoppingCartIcon />} onClick={onClick} text="" />;
};

export default CartButton;
