import HeaderButton from './HeaderButton';
import NavigationBar from './NavigationBar';
import Logo from './Logo';
import type { NavigationItemInterface } from '../interfaces/NavigationItemInterface';
import { useNavigate } from 'react-router';
import { HeaderUserInfo } from './HeaderUserInfo';

const HEADER_NAVIGATION: NavigationItemInterface[] = [
  { text: 'Logbook', path: 'logbook' },
  { text: 'Explore', path: 'explore' },
];

function Header() {
  const navigate = useNavigate();
  const user = localStorage.getItem('username');

  return (
    <header className="flex justify-between border-b border-stone-800 bg-background-dark/80 px-4 lg:px-20 py-4">
      <div className="flex items-center gap-12">
        <Logo />
        <NavigationBar navigationItems={HEADER_NAVIGATION} />
      </div>
      <div className="flex gap-4">
        {user ? (
          <HeaderUserInfo user={user} />
        ) : (
          <>
            <HeaderButton
              onClick={() => navigate('/home', { state: { type: 'LOGIN' } })}
            >
              Login
            </HeaderButton>
            <HeaderButton
              onClick={() => navigate('/home', { state: { type: 'REGISTER' } })}
            >
              Register
            </HeaderButton>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
