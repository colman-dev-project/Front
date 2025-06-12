import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../../services/authApi.js';
import { ROUTES } from '../../constants/routerPaths.js';
import { AUTH_ERRORS } from '../../constants/auth.constants.js';
import LoginForm from '../../components/Forms/LoginForm.jsx';
import SharedTypography from '../../components/shared/Text/SharedText.jsx';

export default function LoginPage() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [loginUser, { isLoading }] = useLoginUserMutation();

  const handleLogin = async (formData) => {
    try {
      await loginUser(formData).unwrap();

      setError('');
      navigate(ROUTES.HOME);
    } catch (err) {
      console.error(AUTH_ERRORS.LOGIN_ERROR, err);
      const message =
        err?.data?.error ||
        err?.data?.message ||
        err?.message ||
        AUTH_ERRORS.GENERAL_LOGIN_ERROR;
      setError(message);
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
      {error && <SharedTypography>{error}</SharedTypography>}
    </div>
  );
}
