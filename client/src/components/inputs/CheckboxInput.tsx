interface CheckboxInputProps {
  label: string;
  onChange: () => void;
}

function CheckboxInput({ label, onChange }: CheckboxInputProps) {
  return (
    <label>
      <input type="checkbox" onChange={() => onChange()} />
      {label}
    </label>
  );
}

export default CheckboxInput;
