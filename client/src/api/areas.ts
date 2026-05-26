import { handleResponse } from './handleResponse';

const token: string | null = window.localStorage.getItem('token');

export const areas = async () => {
  const response = await fetch('http://localhost:8000/area', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await handleResponse(response);
};
