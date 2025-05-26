import React from 'react';
import OrderCard from '../../OrderSummary/OrderCard';
import { useGetCartQuery } from '../../../services/cartApi';
import { UI_TEXT } from '../../../constants/text';

const OrderSummary = () => {
  const { data, error, isLoading } = useGetCartQuery();

  if (isLoading) return UI_TEXT.CART_LOADING;
  if (error) return UI_TEXT.CART_ERROR;

  const items = data?.items || [];
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return <OrderCard items={items} total={total} />;
};

export default OrderSummary;
