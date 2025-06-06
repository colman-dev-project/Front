import { loginSuccess } from '../store/authSlice';
import { STORAGE_KEYS } from '../constants/http.constants';
import { USER_TOKEN_FIELDS } from '../constants/auth.constants';
import { AUTH_ERRORS } from '../constants/auth.constants';

export const decodeJWT = (token) => {
  try {
    const payloadBase64 = token.split('.')[1];
    const decoded = JSON.parse(atob(payloadBase64));
    return decoded;
  } catch (e) {
    console.error(AUTH_ERRORS.FAILED_DECODE_JWT, e);
    return null;
  }
};

export const initializeAuth = (store) => {
  const accessToken = localStorage.getItem(STORAGE_KEYS.TOKEN);
  const refreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);

  if (accessToken && refreshToken) {
    const payload = decodeJWT(accessToken);

    if (!payload) {
      console.warn(AUTH_ERRORS.INVALID_TOKEN);
      return;
    }

    const user = {
      id: payload[USER_TOKEN_FIELDS.ID],
      username: payload[USER_TOKEN_FIELDS.USERNAME],
    };

    store.dispatch(loginSuccess({ user, accessToken, refreshToken }));
  }
};
