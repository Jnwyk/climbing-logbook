import { Label } from "./styles/Label.styled";
import { StyledSelect } from "./styles/Select.styled";

const DropdownInput = ({ label, id, options }) => {
  return (
    <Label>
      {label}
      <StyledSelect
        classNamePrefix="Select"
        id="id"
        name="id"
        options={options}
      />
    </Label>
  );
};

export default DropdownInput;
