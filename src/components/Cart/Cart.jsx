import React from 'react';
import ProductCard from '../Product/ProductCard';
import SharedGrid from '../shared/Grid/SharedGrid';
import { CART_TEXT, UI_TEXT } from '../../constants/text';
import {
  CartContainer,
  CartTitle,
  CartRow,
  EmptyCartText,
  RemoveButtonWrapper,
  CartItemWrapper,
} from './Cart.styles';
import PurchaseButton from '../shared/Button/purchaseButton/PurchaseButton.jsx';
import CustomDivider from '../shared/Divider/CustomDivider.jsx';

const Cart = ({
  items,
  total,
  onContinue,
  handleItemRemove,
  isLoading = false,
  isError = false,
  isLoggedIn = true,
}) => {
  const validItems = Array.isArray(items) ? items : [];
  const isCartEmpty = validItems.length === 0;
  const canPurchase = !isCartEmpty && total > 0;

  const statusText = isLoading
    ? UI_TEXT.CART_LOADING
    : isError
      ? UI_TEXT.CART_ERROR
      : null;

  if (statusText) {
    return (
      <CartContainer>
        <CartTitle variant="h6">{UI_TEXT.CART_TITLE}</CartTitle>
        <EmptyCartText>{statusText}</EmptyCartText>
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
            items={validItems.map(
              ({ id, image, name, price, rating, ...rest }) => ({
                ...rest,
                id,
                image,
                name,
                price,
                rating,
                description: (
                  <CartItemWrapper>
                    <ProductCard
                      id={id}
                      image={image}
                      name={name}
                      price={price}
                      rating={rating}
                      onSelect={() => {}}
                      disabled
                    />
                    <RemoveButtonWrapper>
                      <PurchaseButton onClick={() => handleItemRemove(id)}>
                        {CART_TEXT.REMOVE_BUTTON}
                      </PurchaseButton>
                    </RemoveButtonWrapper>
                  </CartItemWrapper>
                ),
              }),
            )}
            columns={1}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          />
          <CustomDivider />
          <CartRow>
            <CartTitle as="span" variant="body1">
              {UI_TEXT.CART_TOTAL}
            </CartTitle>
            <CartTitle as="span" variant="body1">
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
