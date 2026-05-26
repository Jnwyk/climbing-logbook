import { handleResponse } from './handleResponse';

const token: string | null = window.localStorage.getItem('token');

export const crags = async () => {
  const response = await fetch('http://localhost:8000/crag', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await handleResponse(response);
};
