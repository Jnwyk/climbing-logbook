import NavigationItem from './NavigationItem';

interface NavigationBarInterface {
  navigationItems: string[];
}

function NavigationBar({ navigationItems }: NavigationBarInterface) {
  return (
    <nav>
      {navigationItems.map((navigationItem) => (
        <NavigationItem text={navigationItem} />
      ))}
    </nav>
  );
}

export default NavigationBar;
