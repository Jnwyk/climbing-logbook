import { handleResponse } from './handleResponse';
import { API_URL } from '../config';

const token: string | null = window.localStorage.getItem('token');

export const areas = async () => {
  const response = await fetch(`${API_URL}/area`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await handleResponse(response);
};
