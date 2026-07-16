import type { CreateRouteInreface } from '../interfaces/CreateRouteInterface';
import type {
  RouteDetails,
  RouteGeneralInformationInterface,
} from '../interfaces/RoutesInterface';
import { handleResponse } from './handleResponse';

export const route = async (): Promise<{
  routes: RouteGeneralInformationInterface[];
}> => {
  const token = window.localStorage.getItem('token');
  const response = await fetch('http://localhost:8000/route', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return (await handleResponse(response)) as {
    routes: RouteGeneralInformationInterface[];
  };
};

export const getRoute = async (id: string): Promise<{ route: RouteDetails }> => {
  const token = window.localStorage.getItem('token');
  const response = await fetch(`http://localhost:8000/route/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return (await handleResponse(response)) as { route: RouteDetails };
};

export const createRoute = async (route: CreateRouteInreface) => {
  const token = window.localStorage.getItem('token');
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
