import { ModalProvider } from "styled-react-modal";
import { ModalForm } from "./styles/Modal.styled";

const Modal = ({ modalIsOpen, closeModal }) => {
  return (
    <ModalProvider>
      <ModalForm isOpen={modalIsOpen} onEscapeKeydown={closeModal}>
        <h1>Test Modal</h1>
        <p>Modal content</p>
      </ModalForm>
    </ModalProvider>
  );
};

export default Modal;
