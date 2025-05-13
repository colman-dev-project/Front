import React from "react";
import { Box, TextField, Paper, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SharedButton from "../shared/SharedButton";
import SharedGrid from "../shared/SharedGrid";
import { SIGNUP_TEXT } from "../../constants/text"; // התאמת נתיב

const signupSchema = yup.object({
  email: yup.string().email(SIGNUP_TEXT.invalidEmail).required(SIGNUP_TEXT.emailRequired),
  password: yup
    .string()
    .min(6, SIGNUP_TEXT.passwordMin)
    .required(SIGNUP_TEXT.passwordRequired),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], SIGNUP_TEXT.passwordMismatch)
    .required(SIGNUP_TEXT.confirmPasswordRequired),
});

export default function SignupForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(signupSchema) });

  return (
    <SharedGrid>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: "auto" }}>
        <Box mb={3} textAlign="center">
          <h2>{SIGNUP_TEXT.title}</h2>
        </Box>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={2}>
            <TextField
              label={SIGNUP_TEXT.emailLabel}
              fullWidth
              variant="outlined"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              label={SIGNUP_TEXT.passwordLabel}
              type="password"
              fullWidth
              variant="outlined"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <TextField
              label={SIGNUP_TEXT.confirmPasswordLabel}
              type="password"
              fullWidth
              variant="outlined"
              {...register("confirmPassword")}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />
            <SharedButton
              type="submit"
              variant="contained"
              size="large"
              disabled={isSubmitting}
              fullWidth
            >
              {SIGNUP_TEXT.submit}
            </SharedButton>
          </Stack>
        </Box>
      </Paper>
    </SharedGrid>
  );
}
