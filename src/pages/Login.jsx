import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/Forms/LoginForm';
import authStorageService from '../../services/authStorageService';
import { useLoginMutation } from '../features/api/apiSlice';
import SharedTypography from '../components/shared/Text/SharedText';
import { ROUTES } from '../constants/routerPaths';
import {
  AUTH_ERRORS,
  AUTH_RESPONSE_KEYS,
} from '../constants/auth.constants'; 

export default function LoginPage() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (data) => {
    try {
      const response = await login(data).unwrap();
      const token = response[AUTH_RESPONSE_KEYS.TOKEN];

      if (!token) {
        throw new Error(AUTH_ERRORS.INVALID_LOGIN_RESPONSE);
      }

      authStorageService.setToken(token);
      setError('');
      navigate(ROUTES.HOME); 
    } catch (err) {
      console.error('Login error:', err);
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
      <LoginForm onSubmit={handleLogin} />
      {error && <SharedTypography>{error}</SharedTypography>}
    </div>
  );
}
