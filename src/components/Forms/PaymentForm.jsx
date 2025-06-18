import React from 'react';
import { TextField, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { PAYMENT_TEXT } from '../../constants/text.js';
import { StyledPaper, FormWrapper } from './Form.styled.js';
import ActionButton from '../shared/Button/ActionButton.jsx';
import {
  CARD_NUMBER_REGEX,
  EXPIRY_REGEX,
  CVV_REGEX,
} from '../../constants/regex.js';
import SharedTypography from '../shared/Text/SharedText.jsx';
import { BUTTON_VARIANTS } from '../../constants/buttonTypes.js';

const paymentSchema = yup.object({
  cardNumber: yup
    .string()
    .required(PAYMENT_TEXT.cardNumberRequired)
    .matches(CARD_NUMBER_REGEX, PAYMENT_TEXT.cardNumberInvalid),
  expiry: yup
    .string()
    .required(PAYMENT_TEXT.expiryRequired)
    .matches(EXPIRY_REGEX, PAYMENT_TEXT.expiryInvalid),
  cvv: yup
    .string()
    .required(PAYMENT_TEXT.cvvRequired)
    .matches(CVV_REGEX, PAYMENT_TEXT.cvvInvalid),
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
      <SharedTypography variant="h5">
        {PAYMENT_TEXT.title}
      </SharedTypography>
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
          <ActionButton
            type="submit"
            size="large"
            disabled={isSubmitting}
            fullWidth
            styleType={BUTTON_VARIANTS.FILLED}
          >
            {PAYMENT_TEXT.submit}
          </ActionButton>
        </Stack>
      </FormWrapper>
    </StyledPaper>
  );
}
