import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, CircularProgress, Typography } from '@mui/material';
import ProductCard from '../components/Product/ProductCard';
import { useProducts } from '../hooks/useMockProducts.js';

const ProductListPage = () => {
  const navigate = useNavigate();
  const { products, isLoading, error } = useProducts();

  const handleSelect = (id) => navigate(`/products/${id}`);

  if (isLoading) return <CircularProgress sx={{ m: 4 }} />;
  if (error)
    return <Typography color="error">Failed to load products</Typography>;

  return (
    <Grid container spacing={3} sx={{ p: 4 }}>
      {products.map((p) => (
        <Grid item key={p.id}>
          <ProductCard {...p} onSelect={handleSelect} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductListPage;
