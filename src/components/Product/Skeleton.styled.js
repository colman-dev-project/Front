import { styled } from '@mui/material/styles';
import { Skeleton } from '@mui/material';

const createSkeletonVariant = (widthRem, heightRem) =>
  styled(Skeleton)(() => ({
    width: `${widthRem}rem`,
    height: `${heightRem}rem`,
    borderRadius: '0.25rem',
  }));

export const SkeletonRect300 = createSkeletonVariant(100, 18.75);
export const Skeleton80 = createSkeletonVariant(48, 2);           
export const Skeleton100 = createSkeletonVariant(60, 1.25);
export const Skeleton60 = createSkeletonVariant(36, 1.25);
export const Skeleton40 = createSkeletonVariant(24, 1.25);
export const SkeletonButton = createSkeletonVariant(60, 2.25);
export const SkeletonSubtitle = createSkeletonVariant(24, 1.5);
export const SkeletonLine = createSkeletonVariant(60, 1);
