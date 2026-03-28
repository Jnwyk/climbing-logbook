import type { ReactNode } from 'react';

interface ModalProps {
  className?: string;
  children: ReactNode;
  modalRef: React.Ref<HTMLDialogElement>;
  onClose?: () => void;
}

function Modal({ className = '', children, modalRef, onClose }: ModalProps) {
  return (
    <dialog
      ref={modalRef}
      className={`${className} absolute top-[50%] left-[50%] translate-[-50%] bg-card-dark p-7 pt-8 border border-l-primary backdrop:bg-black/30 backdrop:backdrop-blur-sm`}
    >
      {onClose && (
        <span
          className="absolute top-[-2%] right-[.5%] text-3xl font-medium text-text-smokey cursor-pointer hover:text-primary transition-colors"
          onClick={onClose}
        >
          ×
        </span>
      )}
      {children}
    </dialog>
  );
}

export default Modal;
