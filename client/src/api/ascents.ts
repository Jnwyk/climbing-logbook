import { handleResponse } from './handleResponse';

const token: string | null = window.localStorage.getItem('token');

export const ascents = async () => {
  const response = await fetch('http://localhost:8000/ascent', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await handleResponse(response);
};
