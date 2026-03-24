interface CardButtonProps {
  text: string;
  onClick: () => void;
}

export function CardButton({ text, onClick }: CardButtonProps) {
  return (
    <button
      className="flex items-center gap-1 bg-card-light text-text-smokey px-4 py-2 rounded border border-background hover:text-text-light hover:bg-text-smokey transition-colors duration-300 cursor-pointer"
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  );
}
