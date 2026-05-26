import type { ChangeEvent } from 'react';

interface InputWithLabelInterface {
  type?: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  value: string;
  className?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function InputWithLabel({
  type = 'text',
  label,
  placeholder,
  disabled,
  value,
  className = '',
  onChange,
}: InputWithLabelInterface) {
  return (
    <label
      className={`text-[10px] font-bold uppercase text-primary/80 ${className}`}
    >
      {label}
      <input
        name={label.toLowerCase()}
        type={type}
        className="w-full bg-background border border-card-dark focus:outline-0 focus:border-primary rounded-sm mt-2 py-2 px-2 font-light text-sm text-text-smokey"
        placeholder={placeholder ?? ''}
        disabled={disabled}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </label>
  );
}

export default InputWithLabel;
