import { handleResponse } from './handleResponse';

export const areas = async () => {
  const response = await fetch('http://localhost:8000/area');
  return await handleResponse(response);
};
