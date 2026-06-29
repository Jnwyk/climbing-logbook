import { handleResponse } from './handleResponse';

const token: string | null = window.localStorage.getItem('token');

export const getGrades = async () => {
  const response = await fetch('http://localhost:8000/dictionary/grade', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await handleResponse(response);
};

export const getFormats = async () => {
  const response = await fetch('http://localhost:8000/dictionary/format', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await handleResponse(response);
};

export const getStyles = async () => {
  const response = await fetch('http://localhost:8000/dictionary/style', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await handleResponse(response);
};
