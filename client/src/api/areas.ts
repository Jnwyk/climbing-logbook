import { handleResponse } from './handleResponse';
import getApiUrl from '../utils/getApiUrl';

export const areas = async () => {
  const token = window.localStorage.getItem('token');

  const response = await fetch(`${getApiUrl()}/area`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await handleResponse(response);
};
