import { ERROR_MESSAGES } from '../constants/errors.js';

const storageService = {
  getParsedItem: (key) => {
    const rawValue = localStorage.getItem(key);
    try {
      return rawValue ? JSON.parse(rawValue) : null;
    } catch (e) {
      console.warn(ERROR_MESSAGES.FAILED_TO_PARSE, e);
      return null;
    }
  },
  setParsedItem: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(ERROR_MESSAGES.FAILED_TO_STRINGIFY, e);
    }
  },
  removeItem: (key) => localStorage.removeItem(key),
};

export default storageService;
