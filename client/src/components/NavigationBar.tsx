import type { NavigationItemInterface } from '../interfaces/NavigationItemInterface';
import NavigationItem from './NavigationItem';

interface NavigationBarInterface {
  navigationItems: NavigationItemInterface[];
}

function NavigationBar({ navigationItems }: NavigationBarInterface) {
  return (
    <nav>
      {navigationItems.map((navigationItem) => (
        <NavigationItem
          key={navigationItem.text}
          text={navigationItem.text}
          path={navigationItem.path}
        />
      ))}
    </nav>
  );
}

export default NavigationBar;
