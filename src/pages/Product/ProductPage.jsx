import React from 'react';
import { useParams } from 'react-router-dom';
import ProductView from '../../components/Product/ProductView.jsx';
import ProductSkeleton from '../../components/Product/ProductSkeleton.jsx';
import { useProduct } from '../../hooks/useMockProduct.js';
import { useAddToCartMutation } from '../../services/cartApi.js';

const ProductPage = () => {
  const { id } = useParams();
  const { product, isLoading } = useProduct(id);

  const [AddToCart] = useAddToCartMutation();

  const handleAddToCart = async () => {
    try {
      await AddToCart(product);
      console.log('Add to Cart Success');
    } catch (err) {
      console.error('Failed to add to cart:', err);
    }
  };

  if (isLoading) {
    return <ProductSkeleton />;
  }

  return <ProductView {...product} handleAddToCart={handleAddToCart} />;
};

export default ProductPage;
