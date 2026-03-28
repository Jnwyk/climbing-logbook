import { useState, useRef, useEffect, useMemo } from 'react';
import useDebounce from '../hooks/useDebounce';

interface DynamicInputProps {
  label?: string;
  placeholder?: string;
  data?: string[];
  value: string;
  onChange: (value: string) => void;
}

export function DynamicInput({
  label,
  placeholder,
  data,
  value,
  onChange,
}: DynamicInputProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const inputValue = useDebounce(value, 500);
  const filteredData = useMemo(
    () =>
      data?.filter((element) =>
        element?.toLowerCase().includes(inputValue.toLowerCase()),
      ),
    [inputValue],
  );

  return (
    <div className="relative" ref={containerRef}>
      <label className="text-[10px] font-bold uppercase text-primary/80">
        {label}
      </label>
      <input
        className="w-full bg-background border border-card-dark focus:outline-0 focus:border-primary rounded-sm py-2 px-2 font-light text-sm text-text-smokey"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setShowDropdown(true)}
      />
      {value && (
        <span
          className="absolute translate-y-[20%] right-[3%] text-text-smokey cursor-pointer"
          onClick={() => onChange('')}
        >
          ×
        </span>
      )}
      {showDropdown && inputValue && filteredData && (
        <ol className="w-full max-h-36 overflow-y-auto absolute z-20 bg-background text-text-smokey border border-card-light [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-card-dark [&::-webkit-scrollbar-thumb]:bg-text-smokey">
          {filteredData.map((element) => (
            <li
              key={element}
              className="py-2 pl-2 text-[12px] border-b border-card-light cursor-pointer last:border-b-0"
              onClick={() => onChange(element)}
            >
              {element}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
