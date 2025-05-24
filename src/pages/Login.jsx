import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/axiosInstance'; 
import LoginForm from '../../components/Forms/LoginForm';
import authStorageService from '../../services/authStorageService';

export default function LoginPage() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const response = await axiosInstance.post('/api/v1/login', data);
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
      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
    </div>
  );
}
