import HeaderButton from './HeaderButton';
import NavigationBar from './NavigationBar';
import Logo from './Logo';

const HEADER_NAVIGATION = ['Logbook', 'Explore'];

function Header() {
  return (
    <header className="flex justify-between border-b border-stone-800 bg-background-dark/80 px-4 lg:px-20 py-4">
      <div className="flex items-center gap-12">
        <Logo />
        <NavigationBar navigationItems={HEADER_NAVIGATION} />
      </div>
      <div className="flex gap-4">
        <HeaderButton>Login</HeaderButton>
        <HeaderButton>Register</HeaderButton>
      </div>
    </header>
  );
}

export default Header;
