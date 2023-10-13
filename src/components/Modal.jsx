import { ModalProvider } from "styled-react-modal";
import { ModalForm } from "./styles/Modal.styled";
import TextInput from "./TextInput.jsx";
import { Button } from "./styles/Button.styled";

const Modal = ({ modalIsOpen, closeModal, onChange }) => {
  return (
    <ModalProvider>
      <ModalForm isOpen={modalIsOpen} onEscapeKeydown={closeModal}>
        <TextInput
          label="Route Name"
          id="routeName"
          onChange={(e) => onChange(e)}
        />
        <TextInput
          label="Climbing Area"
          id="area"
          onChange={(e) => onChange(e)}
        />
        <Button onClick={closeModal}>SUMBIT</Button>
      </ModalForm>
    </ModalProvider>
  );
};

export default Modal;
