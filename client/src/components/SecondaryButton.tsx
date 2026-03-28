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
      className={`bg-card-dark text-center text-[#a8a29e] px-4 py-2 text-[10px] font-sm uppercase rounded-sm cursor-pointer ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
