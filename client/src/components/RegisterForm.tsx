import { useContext, useState, type ChangeEvent } from 'react';
import type { RegisterInterface } from '../interfaces/LoginRegisterInterface';
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
    if (mutation.isError) {
      mutation.reset();
    }
    const { name, value } = event.target;
    setRegisterForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitForm = async () => {
    setRegisterForm(defaultRegisterForm);
    try {
      const { user, token } = await mutation.mutateAsync(registerForm);
      login({ id: user.id, username: user.username, token });
    } catch {}
  };

  return (
    <form>
      <div className="grid grid-cols-2 gap-2">
        {mutation.isError && (
          <span className="col-span-2 block text-center text-error bg-amber-50 font-bold text-[12px] px-3 py-1.5 rounded border border-error/30">
            Registration was not succesfull
          </span>
        )}
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
