import React from 'react';
import { useParams } from 'react-router-dom';
import ProductView from '../components/Product/ProductView';
import ProductSkeleton from '../components/Product/ProductSkeleton';
import { useProduct } from '../hooks/useMockProduct.js';

const ProductPage = () => {
  const { id } = useParams();
  const { product, isLoading } = useProduct(id);

  const handleAddToCart = () => {
    // TODO: Connect to backend or dispatch to Redux in the future
    alert('Added to cart');
  };

  return isLoading ? (
    <ProductSkeleton />
  ) : (
    <ProductView {...product} onAddToCart={handleAddToCart} />
  );
};

export default ProductPage;
