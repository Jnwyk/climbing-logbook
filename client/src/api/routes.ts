import { handleResponse } from './handleResponse';

export const route = async () => {
  const response = await fetch('http://localhost:8000/route');
  return await handleResponse(response);
};
