import { handleResponse } from './handleResponse';
import getApiUrl from '../utils/getApiUrl';

export const getGrades = async () => {
  const token = window.localStorage.getItem('token');

  const response = await fetch(`${getApiUrl()}/dictionary/grade`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await handleResponse(response);
};

export const getFormats = async () => {
  const token = window.localStorage.getItem('token');

  const response = await fetch(`${getApiUrl()}/dictionary/format`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await handleResponse(response);
};

export const getStyles = async () => {
  const token = window.localStorage.getItem('token');

  const response = await fetch(`${getApiUrl()}/dictionary/style`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await handleResponse(response);
};
