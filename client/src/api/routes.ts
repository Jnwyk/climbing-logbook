import type { CreateRouteInreface } from '../interfaces/CreateRouteInterface';
import { handleResponse } from './handleResponse';

export const route = async () => {
  const response = await fetch('http://localhost:8000/route');
  return await handleResponse(response);
};

export const createRoute = async (route: CreateRouteInreface) => {
  const response = await fetch('http://localhost:8000/route', {
    method: 'POST',
    body: JSON.stringify(route),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await handleResponse(response);
};
