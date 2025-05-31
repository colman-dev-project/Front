import React, { useState, useEffect } from 'react';
import Cart from '../../components/Cart/Cart.jsx';
import { LOCAL_STORAGE_KEYS } from '../../constants/storageKeys.js';
import storageService from '../../services/storageService.js';
import { useGetCartQuery } from '../../services/cartApi.js';


const CartPage = () => {
  const { data: serverCart = [], isLoading, error } = useGetCartQuery();
  const [cart, setCart] = useState([]);
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  useEffect(() => {
    const storedItems = storageService.getParsedItem(LOCAL_STORAGE_KEYS.CART_ITEMS);
    if (Array.isArray(storedItems) && storedItems.length > 0) {
      setCart(storedItems);
    } else if (serverCart.length > 0) {
      setCart(serverCart);
      storageService.setParsedItem(LOCAL_STORAGE_KEYS.CART_ITEMS, serverCart);
    }
  }, [serverCart]);

  useEffect(() => {
    storageService.setParsedItem(LOCAL_STORAGE_KEYS.CART_ITEMS, cart);
  }, [cart]);

  const handleContinue = () => {
    // TODO: Implement continue to checkout functionality
  };


  const handleRemove = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  return (
    <Cart
      items={cart}
      total={total}
      handleItemRemove={handleRemove}
      isLoading={isLoading}
      isError={!!error}
      onContinue={handleContinue}
    />
  );
};

export default CartPage;
