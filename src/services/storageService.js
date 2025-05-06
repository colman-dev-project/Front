import { STORAGE_KEYS } from '../constants/auth.constants';

const storageService = {
  getToken: () => localStorage.getItem(STORAGE_KEYS.TOKEN),

  setToken: (token) => {
    localStorage.setItem(STORAGE_KEYS.TOKEN, token);
  },

  removeToken: () => {
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
  },
};

export default storageService;
