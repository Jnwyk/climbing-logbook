import { handleResponse } from './handleResponse';

export const crags = async () => {
  const response = await fetch('http://localhost:8000/crag');
  return await handleResponse(response);
};
