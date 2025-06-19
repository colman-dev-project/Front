import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import LoginForm from '../../components/Forms/LoginForm.jsx';
import SharedTypography from '../../components/shared/Text/SharedText.jsx';
import { AUTH_ERRORS } from '../../constants/auth.constants.js';
import { ROUTES } from '../../constants/routerPaths.js';
import { useLoginUserMutation } from '../../services/authApi.js';
import { extractedAuthError } from '../../utils/authErrors.js';

export default function LoginPage() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [loginUser, { isLoading }] = useLoginUserMutation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate(ROUTES.HOME);
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = async (credentials) => {
    try {
      await loginUser(credentials).unwrap();

      setError('');
      navigate(ROUTES.HOME);
    } catch (err) {
      console.error(AUTH_ERRORS.LOGIN_ERROR, err);
      setError(extractedAuthError(err, AUTH_ERRORS.GENERAL_LOGIN_ERROR));
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
      {error && <SharedTypography>{error}</SharedTypography>}
    </div>
  );
}
