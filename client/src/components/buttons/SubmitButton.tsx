interface SubmitButtonInterface {
  children: string;
  className?: string;
  disabled?: boolean;
  submitForm: () => void;
}

function SubmitButton({
  children,
  className,
  disabled,
  submitForm,
}: SubmitButtonInterface) {
  const handleSubmitButton = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    submitForm();
  };

  return (
    <button
      className={`bg-primary text-background text-center px-4 py-2 text-[10px] uppercase font-medium rounded-sm transition-all ${disabled ? `bg-primary/45 cursor-default` : `cursor-pointer hover:brightness-110`} ${className}`}
      disabled={disabled}
      onClick={(event) => handleSubmitButton(event)}
    >
      {children}
    </button>
  );
}

export default SubmitButton;
