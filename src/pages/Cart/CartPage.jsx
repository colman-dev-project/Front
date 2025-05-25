import React, { useState } from 'react';
import Cart from '../../components/Cart/Cart.jsx';
import { useEffect } from 'react';
import { LOCAL_STORAGE_KEYS } from '../../constants/storageKeys.js';
import storageService from '../../services/storageService.js';

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  useEffect(() => {
    const rawCartItems = storageService.getItem(LOCAL_STORAGE_KEYS.CART_ITEMS);
    const storedItems = storageService.parseJsonItem(rawCartItems);
    if (storedItems) {
      setCart(storedItems);
    } else {
      setCart([]);
    }
  }, []);

  const handleContinue = () => {
    // TODO: Implement continue to checkout functionality
  };

  const handleRemove = (id) => {
    const updatedItems = cart.filter((item) => item.id !== id);
    setCart(updatedItems);
    storageService.setParsedItem(LOCAL_STORAGE_KEYS.CART_ITEMS, updatedItems);
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
