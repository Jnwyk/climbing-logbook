import { handleResponse } from './handleResponse';
import getApiUrl from '../utils/getApiUrl';

export const crags = async () => {
  const token = window.localStorage.getItem('token');

  const response = await fetch(`${getApiUrl()}/crag`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await handleResponse(response);
};
