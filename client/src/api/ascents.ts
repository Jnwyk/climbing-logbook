import type { CreateAscentInterface } from '../interfaces/AscentsInterface';
import { handleResponse } from './handleResponse';

const token: string | null = window.localStorage.getItem('token');
const userId: string | null = window.localStorage.getItem('userId');

export const ascents = async () => {
  const response = await fetch(`http://localhost:8000/ascent/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await handleResponse(response);
};

export const createAscent = async (ascent: CreateAscentInterface) => {
  const response = await fetch('http://localhost:8000/ascent', {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(ascent),
  });
  return await handleResponse(response);
};
