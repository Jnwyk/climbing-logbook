import type { CreateAscentInterface } from '../interfaces/AscentsInterface';
import { API_URL } from '../config';
import { handleResponse } from './handleResponse';

export const ascents = async () => {
  const token = window.localStorage.getItem('token');
  const userId = window.localStorage.getItem('userId');
  const response = await fetch(`${API_URL}/ascent/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await handleResponse(response);
};

export const createAscent = async (ascent: CreateAscentInterface) => {
  const token = window.localStorage.getItem('token');
  const response = await fetch(`${API_URL}/ascent`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(ascent),
  });
  return await handleResponse(response);
};
