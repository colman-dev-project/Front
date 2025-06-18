import { decodeJWT } from './jwt';
import { loginSuccess } from '../store/authSlice';

export const loadAuthFromStorage = (dispatch) => {
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken) return;

  const payload = decodeJWT(accessToken);
  if (!payload) return;

  const nowInSeconds = Math.floor(Date.now() / 1000);
  if (payload.exp && payload.exp < nowInSeconds) {
    localStorage.removeItem('accessToken');
    return;
  }

  const user = { id: payload.userId, username: payload.username };
  dispatch(loginSuccess({ user, accessToken }));
};
