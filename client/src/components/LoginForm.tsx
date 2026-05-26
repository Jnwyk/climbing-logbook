import { useContext, useState, type ChangeEvent } from 'react';
import type { LoginInterface } from '../interfaces/LoginRegisterInterface';
import InputWithLabel from './inputs/InputWithLabel';
import SubmitButton from './SubmitButton';
import { useLogin } from '../hooks/useLogin';
import { AuthContext } from '../context/AuthProvider';

const defaultLoginForm: LoginInterface = {
  email: '',
  password: '',
};

export function LoginForm() {
  const { login } = useContext(AuthContext);
  const [loginForm, setLoginForm] = useState<LoginInterface>(defaultLoginForm);
  const mutation = useLogin();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitForm = async () => {
    setLoginForm(defaultLoginForm);
    const { user, token } = await mutation.mutateAsync(loginForm);
    login({ username: user.username, token: token });
  };

  return (
    <form>
      <div className="grid grid-cols-2 gap-2">
        <InputWithLabel
          label="Email"
          placeholder="jan.kowalski@gmail.com"
          value={loginForm.email}
          className="col-span-2"
          onChange={(event) => handleInputChange(event)}
        />
        <InputWithLabel
          type="password"
          label="Password"
          placeholder="*********"
          value={loginForm.password}
          className="col-span-2"
          onChange={(event) => handleInputChange(event)}
        />
      </div>
      <div className="flex mt-8">
        <SubmitButton
          className="flex-2 py-3"
          submitForm={() => handleSubmitForm()}
        >
          Login
        </SubmitButton>
      </div>
    </form>
  );
}
