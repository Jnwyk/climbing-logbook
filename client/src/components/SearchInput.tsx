interface SearchinputInterface {
  label: string;
  placeholder?: string;
  disabled?: boolean;
  value: string;
  className?: string;
  onChange: (value: string) => void;
}

function SearchInput({
  label,
  placeholder,
  disabled,
  value,
  className = '',
  onChange,
}: SearchinputInterface) {
  return (
    <label
      className={`text-[10px] font-bold uppercase text-primary/80 ${className}`}
    >
      {label}
      <input
        className="w-full bg-background border border-card-dark focus:outline-0 focus:border-primary rounded-sm mt-2 py-2 px-2 font-light text-sm text-text-smokey"
        placeholder={placeholder ?? ''}
        disabled={disabled}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

export default SearchInput;
