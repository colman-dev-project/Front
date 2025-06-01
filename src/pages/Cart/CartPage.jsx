import React, { useState } from 'react';
import Cart from '../../components/Cart/Cart.jsx';
import { useEffect } from 'react';
import { LOCAL_STORAGE_KEYS } from '../../constants/storageKeys.js';
import storageService from '../../services/storageService.js';
const CartPage = () => {
  const [cart, setCart] = useState([]);
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  useEffect(() => {
    const storedItems = storageService.getParsedItem(LOCAL_STORAGE_KEYS.CART_ITEMS);
    setCart(Array.isArray(storedItems) ? storedItems : []);
  }, []);

  const handleContinue = () => {
    // TODO: Implement continue to checkout functionality
  };
  const handleRemove = (id) => {

    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    storageService.setParsedItem(LOCAL_STORAGE_KEYS.CART_ITEMS, newCart);
  };

  return (
    <Cart
      items={cart}
      total={total}
      onContinue={handleContinue}
      handleItemRemove={handleRemove}
    />
  );
};
export default CartPage;
