import type { CreateAscentInterface } from '../interfaces/AscentsInterface';
import getApiUrl from '../utils/getApiUrl';
import { handleResponse } from './handleResponse';

export const ascents = async () => {
  const token = window.localStorage.getItem('token');
  const userId = window.localStorage.getItem('userId');

  if (!token || !userId) {
    throw new Error('User is not authenticated');
  }

  const response = await fetch(`${getApiUrl()}/ascent/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await handleResponse(response);
};

export const createAscent = async (ascent: CreateAscentInterface) => {
  const token = window.localStorage.getItem('token');

  const response = await fetch(`${getApiUrl()}/ascent`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(ascent),
  });
  return await handleResponse(response);
};
