import { useNavigate } from 'react-router';
import { useMutation } from '@tanstack/react-query';
import type { LoginInterface } from '../interfaces/LoginRegisterInterface';
import { loginUser } from '../api/users';

export function useLogin() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: LoginInterface) => loginUser(data),
    onSuccess: () => navigate('/logbook'),
  });
}
