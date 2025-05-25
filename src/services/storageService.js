import { ERROR_MESSAGES } from '../constants/errors.js';

const storageService = {
  getItem: (key) => localStorage.getItem(key),
  setItem: (key, value) => localStorage.setItem(key, value),
  removeItem: (key) => localStorage.removeItem(key),
  parseJsonItem: (rawValue) => {
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
  }
};

export default storageService;
