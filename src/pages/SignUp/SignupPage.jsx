import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../../services/authApi';
import SignupForm from '../../components/Forms/SignUpForm';
import { ROUTES } from '../../constants/routerPaths';
import SharedTypography from '../../components/shared/Text/SharedText';
import { AUTH_ERRORS } from '../../constants/auth.constants';

export default function SignupPage() {
  const navigate = useNavigate();
  const [registerUser, { isLoading, error }] = useRegisterUserMutation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleSignup = async (formData) => {
    if (localStorage.getItem('accessToken')) {
      return;
    }
    try {
      await registerUser(formData).unwrap();
      navigate(ROUTES.LOGIN);
    } catch (err) {
      console.error(AUTH_ERRORS.REGISTER_FAILED, err);
    }
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate(ROUTES.HOME);
    }
  }, [isLoggedIn, navigate]);



  const errorMessage =
    error?.data?.error ||
    error?.data?.message ||
    error?.message ||
    AUTH_ERRORS.GENERAL_REGISTER_ERROR;

  return (
    <div>
      <SignupForm onSubmit={handleSignup} isLoading={isLoading} />
      {error && <SharedTypography>{errorMessage}</SharedTypography>}
    </div>
  );
}
