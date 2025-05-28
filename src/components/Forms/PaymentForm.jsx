import React from 'react';
import { TextField, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { PAYMENT_TEXT } from '../../constants/text.js';
import { StyledPaper, TitleWrapper, FormWrapper } from './Form.styled.js';
import SharedButton from '../shared/Button/SharedButton.jsx';

const paymentSchema = yup.object({
  cardNumber: yup
    .string()
    .required(PAYMENT_TEXT.cardNumberRequired)
    .matches(/^\d{16}$/, PAYMENT_TEXT.cardNumberInvalid),
  expiry: yup
    .string()
    .required(PAYMENT_TEXT.expiryRequired)
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, PAYMENT_TEXT.expiryInvalid),
  cvv: yup
    .string()
    .required(PAYMENT_TEXT.cvvRequired)
    .matches(/^\d{3,4}$/, PAYMENT_TEXT.cvvInvalid),
  cardHolder: yup.string().required(PAYMENT_TEXT.cardHolderRequired),
});

export default function PaymentForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(paymentSchema) });

  return (
    <StyledPaper elevation={3}>
      <TitleWrapper>
        <h2>{PAYMENT_TEXT.title}</h2>
      </TitleWrapper>
      <FormWrapper
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Stack spacing={2}>
          <TextField
            label={PAYMENT_TEXT.cardNumberLabel}
            fullWidth
            variant="outlined"
            {...register('cardNumber')}
            error={!!errors.cardNumber}
            helperText={errors.cardNumber?.message}
          />
          <TextField
            label={PAYMENT_TEXT.expiryLabel}
            fullWidth
            variant="outlined"
            {...register('expiry')}
            error={!!errors.expiry}
            helperText={errors.expiry?.message}
          />
          <TextField
            label={PAYMENT_TEXT.cvvLabel}
            fullWidth
            variant="outlined"
            {...register('cvv')}
            error={!!errors.cvv}
            helperText={errors.cvv?.message}
          />
          <TextField
            label={PAYMENT_TEXT.cardHolderLabel}
            fullWidth
            variant="outlined"
            {...register('cardHolder')}
            error={!!errors.cardHolder}
            helperText={errors.cardHolder?.message}
          />
          <SharedButton
            type="submit"
            variant="contained"
            size="large"
            disabled={isSubmitting}
            fullWidth
          >
            {PAYMENT_TEXT.submit}
          </SharedButton>
        </Stack>
      </FormWrapper>
    </StyledPaper>
  );
}
