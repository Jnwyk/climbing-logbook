import { useLocation } from 'react-router';
import { LoginRegisterCard } from '../components/LoginRegisterCard';

function HomePage() {
  const location = useLocation();
  const { type } = location.state || 'LOGIN';
  return (
    <main>
      <LoginRegisterCard type={type} />
    </main>
  );
}

export default HomePage;
