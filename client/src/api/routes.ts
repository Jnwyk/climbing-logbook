import type { CreateRouteInreface } from '../interfaces/CreateRouteInterface';
import { handleResponse } from './handleResponse';

const token: string | null = window.localStorage.getItem('token');

export const route = async () => {
  const response = await fetch('http://localhost:8000/route', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await handleResponse(response);
};

export const createRoute = async (route: CreateRouteInreface) => {
  const response = await fetch('http://localhost:8000/route', {
    method: 'POST',
    body: JSON.stringify(route),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return await handleResponse(response);
};
