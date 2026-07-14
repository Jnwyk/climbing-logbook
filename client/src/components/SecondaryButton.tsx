interface SecondaryButtonProps {
  children: string;
  className?: string;
  disabled?: boolean;
  onClick: () => void;
}

function SecondaryButton({
  children,
  className = '',
  disabled,
  onClick,
}: SecondaryButtonProps) {
  return (
    <button
      className={`text-center px-4 py-2 text-[10px] font-sm uppercase rounded-sm cursor-pointer focus:outline-none ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
