import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgress, Grid } from '@mui/material';
import ProductCard from '../../components/Product/ProductCard.jsx';
import { ROUTES } from '../../constants/routerPaths.js';
import SharedTypography from '../../components/shared/Text/SharedText.jsx';
import { containerStyle, spinnerStyle } from './ProductListPage.styled.js';
import { UI_TEXT } from '../../constants/text.js';
import { useGetProductsQuery } from '../../services/productApi.js';

const ProductListPage = () => {
  const navigate = useNavigate();
  const { data: products, isLoading, error } = useGetProductsQuery();

  const handleSelect = (id) => navigate(`${ROUTES.PRODUCTS}/${id}`);

  if (isLoading) return <CircularProgress style={spinnerStyle} />;
  if (error)
    return (
      <SharedTypography color="error">
        {UI_TEXT.FAILED_TO_LOAD_PRODUCTS}
      </SharedTypography>
    );

  return (
    <Grid container spacing={3} style={containerStyle}>
      {products.map((p) => (
        <Grid key={p.id}>
          <ProductCard {...p} onSelect={handleSelect} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductListPage;
