import CommonLabel from './CommonLabel';

interface DateInputProps {
  label?: string;
  date: string;
  onChange: (date: string) => void;
}

function DateInput({ label, date, onChange }: DateInputProps) {
  return (
    <div>
      {label && <CommonLabel label={label} />}
      <input
        type="date"
        className="w-full bg-card-light border border-card-dark focus:outline-0 focus:border-primary rounded-sm py-2 px-2 font-light text-sm text-white [&::-webkit-calendar-picker-indicator]:invert"
        value={date}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default DateInput;
