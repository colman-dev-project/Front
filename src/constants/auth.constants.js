export const AUTH_ENDPOINTS = {
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
};

export const AUTH_RESPONSE_KEYS = {
  TOKEN: 'token',
  USER: 'user',
  SUCCESS: 'success',
};

export const AUTH_ERRORS = {
  INVALID_LOGIN_RESPONSE: 'Invalid login response structure',
  LOGOUT_FAILED: 'Logout failed',
  GENERAL_LOGIN_ERROR: 'General login error',
  GENERAL_LOGOUT_ERROR: 'General logout error',
  UNAUTHORIZED_LOGIN: 'Invalid username or password',
  UNAUTHORIZED_LOGOUT: 'User is not logged in',
  USER_REGISTERED_SUCCESS: 'User registered successfully',
  USER_NOT_FOUND: 'User not found',
  INVALID_INPUT: 'Invalid input data',
  REGISTER_FAILED: 'Registration failed',
};

export const STORAGE_KEYS = {
  TOKEN: 'token',
};

export const ROUTES = {
  LOGIN: '/login',
};

export const API_PATHS = {
  LOGIN: '/api/v1/login',
  REGISTER: '/api/v1/register',
  LOGOUT: '/api/v1/logout',
};
