import { handleResponse } from './handleResponse';
import { API_URL } from '../config';

const token: string | null = window.localStorage.getItem('token');

export const getGrades = async () => {
  const response = await fetch(`${API_URL}/dictionary/grade`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await handleResponse(response);
};

export const getFormats = async () => {
  const response = await fetch(`${API_URL}/dictionary/format`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await handleResponse(response);
};

export const getStyles = async () => {
  const response = await fetch(`${API_URL}/dictionary/style`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await handleResponse(response);
};
