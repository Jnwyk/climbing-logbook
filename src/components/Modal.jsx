import { ModalProvider } from "styled-react-modal";
import { ModalForm } from "./styles/Modal.styled";
import TextInput from "./TextInput.jsx";
import { Button } from "./styles/Button.styled";
import DropdownInput from "./DropdownInput";
import Picker from "./Picker";

const styles = [
  { value: "onsight", label: "Onsight" },
  { value: "flash", label: "Flash" },
  { value: "redpoint", label: "Redpoint" },
];

const grades = [
  "III",
  "III+",
  "IV",
  "IV+",
  "V",
  "V+",
  "VI",
  "VI+",
  "VI.1",
  "VI.1+",
  "VI.2",
  "VI.2+",
  "VI.3",
  "VI.3+",
  "VI.4",
  "VI.4+",
  "VI.5",
  "VI.5+",
  "VI.6",
  "VI.6+",
  "VI.7",
  "VI.7+",
  "VI.8",
];

const Modal = ({
  modalIsOpen,
  closeModal,
  onChange,
  submitForm,
  isButtonDisabled,
}) => {
  return (
    <ModalProvider>
      <ModalForm isOpen={modalIsOpen} onEscapeKeydown={closeModal}>
        <TextInput
          label="Route Name"
          id="routeName"
          onChange={(e) => onChange(e.target.id, e.target.value)}
        />
        <TextInput
          label="Climbing Area"
          id="area"
          onChange={(e) => onChange(e.target.id, e.target.value)}
        />
        <DropdownInput
          label="Style"
          id="style"
          options={styles}
          onChange={(value) => onChange("style", value)}
        />
        <Picker array={grades} onChange={(value) => onChange("grade", value)} />
        <Button onClick={submitForm} disabled={isButtonDisabled()}>
          SUMBIT
        </Button>
      </ModalForm>
    </ModalProvider>
  );
};

export default Modal;
