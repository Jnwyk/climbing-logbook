interface CheckboxInputProps {
  label: string;
  onChange: () => void;
}

function CheckboxInput({ label, onChange }: CheckboxInputProps) {
  return (
    <label className="flex h-full w-full relative top-[20%] items-center justify-center gap-2 font-normal text-sm cursor-pointer text-white">
      <input
        type="checkbox"
        className="size-4 accent-primary cursor-pointer"
        onChange={() => onChange()}
      />
      {label}
    </label>
  );
}

export default CheckboxInput;
