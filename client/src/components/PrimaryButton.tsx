interface PrimaryButtonInterface {
  children: string;
  className?: string;
  disabled?: boolean;
  onClick: () => void;
}

function PrimaryButton({
  children,
  className,
  disabled,
  onClick,
}: PrimaryButtonInterface) {
  return (
    <button
      className={`bg-primary text-background text-center px-4 py-2 text-[10px] uppercase font-medium rounded-sm transition-all ${disabled ? `bg-primary/45 cursor-default` : `cursor-pointer hover:brightness-110`} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
