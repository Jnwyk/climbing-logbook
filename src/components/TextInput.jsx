import { Input } from "./styles/Input.styled.js";
import { Label } from "./styles/Label.styled.js";

const TextInput = ({ label, id, onChange }) => {
  return (
    <Label>
      {label}
      <Input type="text" id={id} name={id} onChange={(e) => onChange(e)} />
    </Label>
  );
};

export default TextInput;
