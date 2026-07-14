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
      className={`text-background text-center px-4 py-2 text-[10px] uppercase font-medium rounded-sm transition-all focus:outline-none ${disabled ? 'bg-gray-200 cursor-default' : 'bg-primary cursor-pointer hover:brightness-120'} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
