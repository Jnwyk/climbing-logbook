import { useMutation } from '@tanstack/react-query';
import type { LoginInterface } from '../interfaces/LoginRegisterInterface';
import { loginUser } from '../api/users';

export function useLogin() {
  return useMutation({
    mutationFn: (data: LoginInterface) => loginUser(data),
  });
}
