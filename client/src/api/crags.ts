import { handleResponse } from './handleResponse';
import { API_URL } from '../config';

const token: string | null = window.localStorage.getItem('token');

export const crags = async () => {
  const response = await fetch(`${API_URL}/crag`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await handleResponse(response);
};
