import React from 'react';
import Divider from '@mui/material/Divider';
import ProductCard from '../Product/ProductCard';
import SharedGrid from '../shared/Grid/SharedGrid';
import { UI_TEXT } from '../../constants/text';
import {
  CartContainer,
  CartTitle,
  CartRow,
  EmptyCartText,
} from './Cart.styles';
import PurchaseButton from '../shared/Button/purchaseButton/PurchaseButton.jsx';

const Cart = ({
  items,
  total,
  onContinue,
  isLoading = false,
  isError = false,
  isLoggedIn = true,
}) => {
  const validItems = Array.isArray(items) ? items : [];
  const isCartEmpty = validItems.length === 0;
  const canPurchase = isLoggedIn && !isCartEmpty && total > 0;

  if (isLoading) {
    return (
      <CartContainer>
        <CartTitle variant="h6">{UI_TEXT.CART_TITLE}</CartTitle>
        <EmptyCartText>{UI_TEXT.CART_LOADING}</EmptyCartText>
      </CartContainer>
    );
  }

  if (isError) {
    return (
      <CartContainer>
        <CartTitle variant="h6">{UI_TEXT.CART_TITLE}</CartTitle>
        <EmptyCartText>{UI_TEXT.CART_ERROR}</EmptyCartText>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <CartTitle variant="h6">{UI_TEXT.CART_TITLE}</CartTitle>
      {isCartEmpty ? (
        <EmptyCartText>{UI_TEXT.CART_EMPTY}</EmptyCartText>
      ) : (
        <>
          <SharedGrid
            items={validItems.map((item) => ({
              ...item,
              description: (
                <ProductCard
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  rating={item.rating}
                  onSelect={() => {}}
                  disabled
                />
              ),
            }))}
            columns={1}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          />
          <Divider sx={{ my: 2 }} />
          <CartRow>
            <CartTitle as="span" variant="body1">
              {UI_TEXT.CART_TOTAL}
            </CartTitle>
            <CartTitle as="span" variant="body1" sx={{ fontWeight: 700 }}>
              {total} ₪
            </CartTitle>
          </CartRow>
          {!isLoggedIn && (
            <EmptyCartText>{UI_TEXT.CART_LOGIN_REQUIRED}</EmptyCartText>
          )}
          <PurchaseButton onClick={onContinue} disabled={!canPurchase}>
            {UI_TEXT.CART_CONTINUE}
          </PurchaseButton>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
