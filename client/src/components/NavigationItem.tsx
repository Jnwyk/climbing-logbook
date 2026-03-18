import { Link } from 'react-router';

interface NavigationItemInterface {
  text: string;
  path: string;
}

function NavigationItem({ text, path }: NavigationItemInterface) {
  return (
    <Link
      to={path}
      className="text-sm font-medium text-stone-100 hover:text-primary transition-colors cursor-pointer px-4"
    >
      {text}
    </Link>
  );
}

export default NavigationItem;
