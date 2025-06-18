import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user: null,
  accessToken: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.accessToken = accessToken;
      state.isLoggedIn = true;

      localStorage.setItem('accessToken', accessToken);
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.isLoggedIn = false;

      localStorage.removeItem('accessToken');
    },
  },
});
export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
