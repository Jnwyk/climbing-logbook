interface HeaderButtonInterface {
  children: string;
  className?: string;
}

function HeaderButton({ children, className }: HeaderButtonInterface) {
  return (
    <button
      className={`${className} px-6 py-2 rounded-lg bg-stone-100 text-stone-900 text-xs font-semibold tracking-wide hover:bg-white transition-colors cursor-pointer`}
    >
      {children.toUpperCase()}
    </button>
  );
}

export default HeaderButton;
