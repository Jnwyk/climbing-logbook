import { useNavigate } from 'react-router';
import { useMutation } from '@tanstack/react-query';
import type { RegisterInterface } from '../interfaces/RegisterInterface';
import { registerUser } from '../api/users';

export function useRegister() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: RegisterInterface) => registerUser(data),
    onSuccess: () => navigate('/logbook'),
  });
}
