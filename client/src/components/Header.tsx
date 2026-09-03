import HeaderButton from './HeaderButton';
import NavigationBar from './NavigationBar';
import Logo from './Logo';
import type { NavigationItemInterface } from '../interfaces/NavigationItemInterface';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthProvider';
import { HeaderUserInfo } from './HeaderUserInfo';

const HEADER_NAVIGATION: NavigationItemInterface[] = [
  { text: 'Logbook', path: 'logbook' },
  { text: 'Explore', path: 'explore' },
];

function Header() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  return (
    <header className="flex justify-between border-b border-stone-800 bg-background-dark/80 px-4 lg:px-20 py-4">
      <div className="flex items-center gap-12">
        <Logo />
        <NavigationBar navigationItems={HEADER_NAVIGATION} />
      </div>
      <div className="flex gap-4">
        {user?.username ? (
          <HeaderUserInfo user={user.username} />
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
