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
      className={`bg-primary text-background text-center px-4 py-2 font-medium rounded-sm cursor-pointer hover:brightness-110 transition-all ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
