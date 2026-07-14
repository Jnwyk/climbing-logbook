import CommonLabel from './CommonLabel';

interface TextAreaProps {
  label?: string;
  note: string;
  onChange: (value: string) => void;
}
function TextArea({ label, note, onChange }: TextAreaProps) {
  return (
    <div>
      {label && <CommonLabel label={label} />}
      <textarea
        value={note}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-card-light border border-card-dark focus:outline-0 focus:border-primary rounded-sm py-2 px-2 font-light text-sm text-white"
      />
    </div>
  );
}

export default TextArea;
