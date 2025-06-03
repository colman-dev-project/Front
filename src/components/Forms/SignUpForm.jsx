import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { SIGNUP_TEXT } from "../../constants/text";
import { StyledPaper, TitleWrapper, FormWrapper } from "./Form.styled";
import SharedTextField from "../shared/TextField/SharedTextField";
import SharedStack from "../shared/Stack/SharedStack";
import SharedButton from "../shared/Button/SharedButton";
import SharedAlert from "../shared/Alert/SharedAlert";
import SharedTypography from "../shared/Text";
import { API_PATHS,AUTH_ERRORS } from '../../constants/auth.constants'
import {ROUTER_PATHS} from '../../constants/routerPaths'
import { HTTP_METHODS } from "../../constants/httpMethods";

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

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(signupSchema) });

  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      setServerError("");
      const res = await fetch(API_PATHS.REGISTER, {
        method: HTTP_METHODS.POST,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || AUTH_ERRORS.REGISTER_FAILED);
      }

      navigate(ROUTER_PATHS.HOME); 
    } catch (err) {
      setServerError(err.message);
    }
  };

  return (
    <StyledPaper elevation={3}>
      <TitleWrapper>
        <SharedTypography variant="h5">{SIGNUP_TEXT.title}</SharedTypography>
      </TitleWrapper>
      <FormWrapper component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <SharedStack>
          <SharedTextField
            label={SIGNUP_TEXT.nameLabel}
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <SharedTextField
            label={SIGNUP_TEXT.usernameLabel}
            {...register("username")}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <SharedTextField
            label={SIGNUP_TEXT.emailLabel}
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <SharedTextField
            label={SIGNUP_TEXT.passwordLabel}
            type="password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <SharedTextField
            label={SIGNUP_TEXT.confirmPasswordLabel}
            type="password"
            {...register("confirmPassword")}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
          />
          {serverError && <SharedAlert>{serverError}</SharedAlert>}
          <SharedButton
            type="submit"
            variant="contained"
            size="large"
            disabled={isSubmitting}
            fullWidth
          >
            {SIGNUP_TEXT.submit}
          </SharedButton>
        </SharedStack>
      </FormWrapper>
    </StyledPaper>
  );
}
