import Logo from './Logo';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

interface LoginRegisterCardInterface {
  type: 'LOGIN' | 'REGISTER';
}

export function LoginRegisterCard({ type }: LoginRegisterCardInterface) {
  return (
    <div className="absolute top-[40%] left-[50%] translate-[-50%] flex flex-col gap-4 bg-card-dark p-7 pt-8 border border-l-primary backdrop:bg-black/30 backdrop:backdrop-blur-sm min-w-50 lg:min-w-82 transition-all duration-400">
      <Logo />
      {type === 'LOGIN' ? <LoginForm /> : <RegisterForm />}
    </div>
  );
}
