import { Label } from "./styles/Label.styled";
import { StyledSelect } from "./styles/Select.styled";

const DropdownInput = ({ label, id, options, onChange }) => {
  return (
    <Label>
      {label}
      <StyledSelect
        classNamePrefix="Select"
        id={id}
        name={id}
        options={options}
        onChange={(e) => onChange(e.value)}
      />
    </Label>
  );
};

export default DropdownInput;
