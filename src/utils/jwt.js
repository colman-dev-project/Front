import { AUTH_ERRORS } from '../constants/auth.constants';

export const decodeJWT = (token) => {
  try {
    const payloadBase64 = token.split('.')[1];
    return JSON.parse(atob(payloadBase64));
  } catch (e) {
    console.error(AUTH_ERRORS.FAILED_DECODE_JWT, e);
    return null;
  }
};
