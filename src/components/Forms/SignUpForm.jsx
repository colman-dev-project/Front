import React from 'react';
import { TextField, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SIGNUP_TEXT } from '../../constants/text';
import { StyledPaper, TitleWrapper, FormWrapper } from './Form.styled';
import SharedButton from '../shared/Button/SharedButton';
import SharedLinkButton from '../shared/Button/SharedLinkButton';
import { ROUTES } from '../../constants/routerPaths';

const signupSchema = yup.object({
  name: yup.string().required(SIGNUP_TEXT.nameRequired),
  username: yup.string().required(SIGNUP_TEXT.usernameRequired),
  email: yup.string().email(SIGNUP_TEXT.invalidEmail).required(SIGNUP_TEXT.emailRequired),
  password: yup.string().min(6, SIGNUP_TEXT.passwordMin).required(SIGNUP_TEXT.passwordRequired),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], SIGNUP_TEXT.passwordMismatch)
    .required(SIGNUP_TEXT.confirmPasswordRequired),
});

export default function SignUpForm({ onSubmit, isLoading }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(signupSchema) });

  return (
    <StyledPaper elevation={3}>
      <TitleWrapper>
        <h2>{SIGNUP_TEXT.title}</h2>
      </TitleWrapper>
      <FormWrapper component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={2}>
          <TextField
            label={SIGNUP_TEXT.nameLabel}
            fullWidth
            variant="outlined"
            {...register('name')}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            label={SIGNUP_TEXT.usernameLabel}
            fullWidth
            variant="outlined"
            {...register('username')}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <TextField
            label={SIGNUP_TEXT.emailLabel}
            fullWidth
            variant="outlined"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label={SIGNUP_TEXT.passwordLabel}
            type="password"
            fullWidth
            variant="outlined"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <TextField
            label={SIGNUP_TEXT.confirmPasswordLabel}
            type="password"
            fullWidth
            variant="outlined"
            {...register('confirmPassword')}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
          />
          <SharedButton
            type="submit"
            variant="contained"
            size="large"
            disabled={isSubmitting || isLoading}
            fullWidth
          >
            {SIGNUP_TEXT.submit}
          </SharedButton>
          <SharedLinkButton
            to={ROUTES.LOGIN}
            variant="text"
            size="small"
            fullWidth
          >
            {SIGNUP_TEXT.loginLinkText}
          </SharedLinkButton>
        </Stack>
      </FormWrapper>
    </StyledPaper>
  );
}
