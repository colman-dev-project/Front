import React, { useState } from 'react';
import Cart from '../../components/Cart/Cart.jsx';
import { useGetCartQuery } from '../../services/cartApi.js';

const CartPage = () => {
  const { data: cart = [], isLoading, error } = useGetCartQuery();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleContinue = () => {
    // TODO: Implement continue to checkout functionality
  };

  return (
    <Cart
      items={cart}
      total={total}
      isLoading={isLoading}
      isError={!!error}
      onContinue={handleContinue}
    />
  );
};

export default CartPage;
