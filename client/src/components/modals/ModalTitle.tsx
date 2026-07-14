interface ModalTitleProps {
  title: string;
}

function ModalTitle({ title }: ModalTitleProps) {
  return (
    <h2 className="border-b border-card-light pb-2 text-left text-lg font-light uppercase tracking-wide text-text-light">
      {title}
    </h2>
  );
}

export default ModalTitle;
