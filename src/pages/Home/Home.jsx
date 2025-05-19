import React from 'react';
import { Container, Box } from '@mui/material';
import useScrollToTop from '../../hooks/useScrollToTop.js';
import Hero from '../../components/Hero/Hero.jsx';
import { useGetNewestProductsQuery } from '../../services/productApi.js';
import SharedTypography from '../../components/shared/Text/SharedText.jsx';
import { CircularProgress } from '@mui/material';
import { UI_TEXT } from '../../constants/text.js';
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel.jsx';
import { StyledContainer, HeroBox, NewestProductsBox } from './home.styled';

function Home() {
  useScrollToTop();
  const {
    data: newestProducts,
    isLoading,
    error,
  } = useGetNewestProductsQuery();

  return (
    <StyledContainer>
      <HeroBox>
        <Hero />
      </HeroBox>

      <NewestProductsBox>
        <SharedTypography variant="h5" gutterBottom>
          {UI_TEXT.NEWEST_PRODUCTS}
        </SharedTypography>
        {isLoading && <CircularProgress />}
        {error && (
          <SharedTypography>{UI_TEXT.FAILED_TO_LOAD_PRODUCTS}</SharedTypography>
        )}
        {newestProducts && (
          <ProductCarousel products={newestProducts.slice(0, 8)} />
        )}
      </NewestProductsBox>
    </StyledContainer>
  );
}
export default Home;
