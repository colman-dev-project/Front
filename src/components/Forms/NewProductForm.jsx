import React from 'react';
import {
  TextField,
  Stack,
  FormControlLabel,
  Checkbox,
  Typography,
  MenuItem,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  StyledPaper,
  TitleWrapper,
  FormWrapper,
  FileUploadWrapper,
} from './Form.styled';
import SharedButton from '../shared/Button/SharedButton';
import SharedTypography from '../shared/Text/SharedText';
import { PRODUCT_TEXT } from '../../constants/text';

const pickupLocations = ['Tel Aviv', 'Jerusalem', 'Haifa', 'Eilat'];

const productSchema = yup.object({
  name: yup.string().required(PRODUCT_TEXT.nameRequired),
  category: yup.string().required(PRODUCT_TEXT.categoryRequired),
  color: yup.string(),
  price: yup
    .number()
    .typeError(PRODUCT_TEXT.priceRequired)
    .positive(PRODUCT_TEXT.pricePositive)
    .required(PRODUCT_TEXT.priceRequired),
  stock: yup
    .number()
    .typeError(PRODUCT_TEXT.stockRequired)
    .min(0, PRODUCT_TEXT.stockPositive)
    .required(PRODUCT_TEXT.stockRequired),
  image: yup.mixed(),
  description: yup.string(),
  pickupLocation: yup.string().required('Pickup location is required'),
  locker: yup.string().required('Locker is required'), 
  agree: yup.bool().oneOf([true], PRODUCT_TEXT.agreementRequired),
});

export default function NewProductForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(productSchema) });

  return (
    <StyledPaper elevation={3}>
      <TitleWrapper>
        <SharedTypography variant="h5">
          {PRODUCT_TEXT.title}
        </SharedTypography>
      </TitleWrapper>
      <FormWrapper component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={2}>
          <TextField
            label={PRODUCT_TEXT.nameLabel}
            fullWidth
            {...register('name')}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            label={PRODUCT_TEXT.categoryLabel}
            fullWidth
            placeholder="Enter category name"
            {...register('category')}
            error={!!errors.category}
            helperText={errors.category?.message}
          />
          <TextField
            label={PRODUCT_TEXT.priceLabel}
            type="number"
            fullWidth
            {...register('price')}
            error={!!errors.price}
            helperText={errors.price?.message}
          />

          <FileUploadWrapper>
            <Typography variant="body2" gutterBottom>
              {PRODUCT_TEXT.imageLabel}
            </Typography>
            <input type="file" accept="image/*" {...register('image')} />
          </FileUploadWrapper>

          <TextField
            label={PRODUCT_TEXT.descriptionLabel}
            multiline
            rows={3}
            fullWidth
            {...register('description')}
            error={!!errors.description}
            helperText={errors.description?.message}
          />

          <TextField
            label="Pickup Location"
            select
            fullWidth
            defaultValue=""
            {...register('pickupLocation')}
            error={!!errors.pickupLocation}
            helperText={errors.pickupLocation?.message}
          >
            {pickupLocations.map((loc) => (
              <MenuItem key={loc} value={loc}>
                {loc}
              </MenuItem>
            ))}
          </TextField>


          <FormControlLabel
            control={<Checkbox {...register('agree')} color="primary" />}
            label={PRODUCT_TEXT.agreement}
          />
          {errors.agree && (
            <SharedTypography variant="body2" style={{ color: 'red' }}>
              {errors.agree.message}
            </SharedTypography>
          )}
          <SharedButton
            type="submit"
            variant="contained"
            size="large"
            disabled={isSubmitting}
            fullWidth
          >
            {PRODUCT_TEXT.submit}
          </SharedButton>
        </Stack>
      </FormWrapper>
    </StyledPaper>
  );
}
