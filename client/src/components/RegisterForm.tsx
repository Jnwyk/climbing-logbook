import { useContext, useState, type ChangeEvent } from 'react';
import type { RegisterInterface } from '../interfaces/RegisterInterface';
import InputWithLabel from './inputs/InputWithLabel';
import SubmitButton from './SubmitButton';
import { useRegister } from '../hooks/useRegister';
import { AuthContext } from '../context/AuthProvider';

const defaultRegisterForm: RegisterInterface = {
  username: '',
  email: '',
  password: '',
};

export function RegisterForm() {
  const { login } = useContext(AuthContext);
  const [registerForm, setRegisterForm] =
    useState<RegisterInterface>(defaultRegisterForm);
  const mutation = useRegister();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegisterForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitForm = async () => {
    setRegisterForm(defaultRegisterForm);
    const { user, token } = await mutation.mutateAsync(registerForm);
    login({ username: user.username, token: token });
  };

  return (
    <form>
      <div className="grid grid-cols-2 gap-2">
        <InputWithLabel
          label="Username"
          placeholder="JanKowalski"
          value={registerForm.username}
          className="col-span-2"
          onChange={(event) => handleInputChange(event)}
        />
        <InputWithLabel
          label="Email"
          placeholder="jan.kowalski@gmail.com"
          value={registerForm.email}
          className="col-span-2"
          onChange={(event) => handleInputChange(event)}
        />
        <InputWithLabel
          type="password"
          label="Password"
          placeholder="*********"
          value={registerForm.password}
          className="col-span-2"
          onChange={(event) => handleInputChange(event)}
        />
      </div>
      <div className="flex mt-8">
        <SubmitButton
          className="flex-2 py-3"
          submitForm={() => handleSubmitForm()}
        >
          Register
        </SubmitButton>
      </div>
    </form>
  );
}
