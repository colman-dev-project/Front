import React, { useState } from 'react';
import Cart from '../../components/Cart/Cart.jsx';
import { useEffect } from 'react';
import { LOCAL_STORAGE_KEYS } from '../../constants/storageKeys.js';

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEYS.CART_ITEMS);
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  const handleContinue = () => {
    // TODO: Implement continue to checkout functionality
  };

   const handleRemove = (id) => {
        const updated = cart.filter((item) => item.id !== id);
        setCart(updated);
        localStorage.setItem(LOCAL_STORAGE_KEYS.CART_ITEMS, JSON.stringify(updated));
      };

  return <Cart items={cart} total={total} onContinue={handleContinue} onRemove={handleRemove}/>;
};

export default CartPage;
