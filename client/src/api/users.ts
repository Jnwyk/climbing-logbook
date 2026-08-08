import type {
  RegisterInterface,
  LoginInterface,
} from '../interfaces/LoginRegisterInterface';
import { handleResponse } from './handleResponse';
import getApiUrl from '../utils/getApiUrl';

export const registerUser = async (user: RegisterInterface) => {
  const response = await fetch(`${getApiUrl()}/user/register`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await handleResponse(response);
};

export const loginUser = async (user: LoginInterface) => {
  const response = await fetch(`${getApiUrl()}/user/login`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await handleResponse(response);
};
