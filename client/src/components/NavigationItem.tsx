interface NavigationItemInterface {
  text: string;
}

function NavigationItem({ text }: NavigationItemInterface) {
  return (
    <a className="text-sm font-medium text-stone-100 hover:text-primary transition-colors cursor-pointer px-4">
      {text}
    </a>
  );
}

export default NavigationItem;
