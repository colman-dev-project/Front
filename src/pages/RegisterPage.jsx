import React from 'react';
import SignupForm from '../components/Forms/SignUpForm';
import { ROUTES } from '../constants/routerPaths'

const RegisterPage = () => {
  const handleRegister = async (formData) => {
    try {
      const response = await fetch(ROUTES.REGISTER, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }

    } catch (error) {
      console.error('Registration error:', error.message);    }
  };

  return <SignupForm onSubmit={handleRegister} />;
};

export default RegisterPage;
