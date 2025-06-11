import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../../services/authApi';
import SignupForm from '../../components/Forms/SignUpForm';
import { ROUTES } from '../../constants/routerPaths';
import SharedTypography from '../../components/shared/Text/SharedText';
import { AUTH_ERRORS } from '../../constants/auth.constants';

export default function SignupPage() {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const handleSignup = async (formData) => {
    try {
      await registerUser(formData).unwrap();

      setError('');
      navigate(ROUTES.LOGIN);
    } catch (err) {
      console.error(AUTH_ERRORS.REGISTER_FAILED, err);
      const message =
        err?.data?.error ||
        err?.data?.message ||
        err?.message ||
        AUTH_ERRORS.GENERAL_REGISTER_ERROR;
      setError(message);
    }
  };

  return (
    <div>
      <SignupForm onSubmit={handleSignup} isLoading={isLoading} />
      {error && <SharedTypography>{error}</SharedTypography>}
    </div>
  );
}
