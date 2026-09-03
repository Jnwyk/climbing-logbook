import type {
  RegisterInterface,
  LoginInterface,
} from '../interfaces/LoginRegisterInterface';
import { API_URL } from '../config';
import { handleResponse } from './handleResponse';

export const registerUser = async (user: RegisterInterface) => {
  const response = await fetch(`${API_URL}/user/register`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await handleResponse(response);
};

export const loginUser = async (user: LoginInterface) => {
  const response = await fetch(`${API_URL}/user/login`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await handleResponse(response);
};
