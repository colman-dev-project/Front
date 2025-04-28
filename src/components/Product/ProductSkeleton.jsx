import React from 'react';
import { Card, CardContent, CardActions, Skeleton, Stack } from '@mui/material';
import { StyledCard, BigStyledCard } from './Product.styles';

const ProductSkeleton = () => (
  <BigStyledCard >
    <Skeleton variant="rectangular" height={300} />

    <CardContent>
      <Stack spacing={1}>
        <Skeleton width="80%" height={32} />
        <Skeleton width="100%" height={20} />
        <Skeleton width="60%" height={20} />
        <Skeleton width="40%" height={20} />
      </Stack>
    </CardContent>

    <CardActions>
      <Skeleton variant="rectangular" width="100%" height={36} />
    </CardActions>

    <CardContent>
      <Skeleton width="40%" height={24} />
      <Skeleton width="100%" height={16} />
      <Skeleton width="100%" height={16} />
    </CardContent>
  </BigStyledCard>
);

export default ProductSkeleton;
