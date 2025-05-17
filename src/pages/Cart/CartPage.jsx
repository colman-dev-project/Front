import React, { useState } from "react";
import Cart from "../../components/Cart/Cart.jsx";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleContinue = () => {
    // TODO: Implement continue to checkout functionality
  };

  return <Cart items={cart} total={total} onContinue={handleContinue} />;
};

export default CartPage;




