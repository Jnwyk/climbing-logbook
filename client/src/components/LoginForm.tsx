import { useContext, useState, type ChangeEvent } from 'react';
import type { LoginInterface } from '../interfaces/LoginRegisterInterface';
import InputWithLabel from './inputs/InputWithLabel';
import SubmitButton from './buttons/SubmitButton';
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
    if (mutation.isError) {
      mutation.reset();
    }
    const { name, value } = event.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitForm = async () => {
    setLoginForm(defaultLoginForm);
    try {
      const { user, token } = await mutation.mutateAsync(loginForm);
      login({ id: user.id, username: user.username, token });
    } catch {}
  };

  return (
    <form>
      <div className="grid grid-cols-2 gap-2">
        {mutation.isError && (
          <span className="col-span-2 block text-center text-error bg-amber-50 font-bold text-[12px] px-3 py-1.5 rounded border border-error/30">
            Login was not succesfull
          </span>
        )}
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
