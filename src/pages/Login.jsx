import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/axiosInstance'; 
import LoginForm from '../components/Forms/LoginForm'
import authStorageService from '../../services/authStorageService';
import { API_PATHS } from '../constants/auth.constants'
import SharedTypography from '../components/shared/Text/SharedText';

export default function LoginPage() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const response = await axiosInstance.post(API_PATHS.LOGIN, data);
      const { token } = response.data;

      authStorageService.setToken(token);

      setError('');
      navigate('/'); 
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleLogin} />
      {error && <SharedTypography>{error}</SharedTypography>}
    </div>
  );
}
