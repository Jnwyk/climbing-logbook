import Logo from '../components/Logo';
import { RegisterForm } from '../components/RegisterForm';

function HomePage() {
  return (
    <main>
      <div className="absolute top-[50%] left-[50%] translate-[-50%] flex flex-col gap-4 bg-card-dark p-7 pt-8 border border-l-primary backdrop:bg-black/30 backdrop:backdrop-blur-sm min-w-50 lg:min-w-82 transition-all duration-400">
        <Logo />
        <RegisterForm />
      </div>
    </main>
  );
}

export default HomePage;
