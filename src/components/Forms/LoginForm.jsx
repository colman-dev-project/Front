import React from "react";
import { TextField, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SharedButton from "../shared/Button/SharedButton";
import SharedGrid from "../shared/Grid/SharedGrid";
import { LOGIN_TEXT } from "../../constants/text";
import { StyledPaper, TitleWrapper, FormWrapper } from "./Form.styled";

const loginSchema = yup.object({
  email: yup.string().email(LOGIN_TEXT.invalidEmail).required(LOGIN_TEXT.emailRequired),
  password: yup.string().required(LOGIN_TEXT.passwordRequired),
});

export default function LoginForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(loginSchema) });

  return (
    <SharedGrid>
      <StyledPaper elevation={3}>
        <TitleWrapper>
          <h2>{LOGIN_TEXT.title}</h2>
        </TitleWrapper>
        <FormWrapper component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={2}>
            <TextField
              label={LOGIN_TEXT.emailLabel}
              fullWidth
              variant="outlined"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              label={LOGIN_TEXT.passwordLabel}
              type="password"
              fullWidth
              variant="outlined"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <SharedButton
              type="submit"
              variant="contained"
              size="large"
              disabled={isSubmitting}
              fullWidth
            >
              {LOGIN_TEXT.submit}
            </SharedButton>
          </Stack>
        </FormWrapper>
      </StyledPaper>
    </SharedGrid>
  );
}
