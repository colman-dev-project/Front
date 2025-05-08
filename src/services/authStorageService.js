import storageService from './storageService';
import { STORAGE_KEYS } from '../constants/auth.constants';

export const getToken = () => storageService.getItem(STORAGE_KEYS.TOKEN);
export const setToken = (token) => storageService.setItem(STORAGE_KEYS.TOKEN, token);
export const removeToken = () => storageService.removeItem(STORAGE_KEYS.TOKEN);
