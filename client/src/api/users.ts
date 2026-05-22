import type { RegisterInterface } from '../interfaces/RegisterInterface';
import { handleResponse } from './handleResponse';

export const registerUser = async (user: RegisterInterface) => {
  const response = await fetch('http://localhost:8000/user/register', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await handleResponse(response);
};
