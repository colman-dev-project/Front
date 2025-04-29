import React from 'react';
import { CardContent, CardActions, Stack } from '@mui/material';
import { BigStyledCard } from './Product.styled';
import {
  SkeletonRect300,
  Skeleton80,
  Skeleton100,
  Skeleton60,
  Skeleton40,
  SkeletonButton,
  SkeletonSubtitle,
  SkeletonLine,
} from './Skeleton.styled';

const ProductSkeleton = () => (
  <BigStyledCard>
    <SkeletonRect300 variant="rectangular" />

    <CardContent>
      <Stack spacing={1}>
        <Skeleton80 />
        <Skeleton100 />
        <Skeleton60 />
        <Skeleton40 />
      </Stack>
    </CardContent>

    <CardActions>
      <SkeletonButton variant="rectangular" />
    </CardActions>

    <CardContent>
      <SkeletonSubtitle />
      <SkeletonLine />
      <SkeletonLine />
    </CardContent>
  </BigStyledCard>
);

export default ProductSkeleton;
