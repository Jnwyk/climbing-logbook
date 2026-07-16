import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

interface FlipButtonInterface {
  text: string;
  onClick: () => void;
}

export function FlipButton({ text, onClick }: FlipButtonInterface) {
  const commonClassName = 'absolute inset-0 w-full h-full backface-hidden';

  return (
    <div className="group relative w-full h-16 perspective-distant">
      <div className="relative w-full h-full transform-3d transition-transform duration-500 group-hover:rotate-x-180">
        <PrimaryButton className={commonClassName} onClick={onClick}>
          {text}
        </PrimaryButton>
        <SecondaryButton
          className={`${commonClassName} rotate-x-180 bg-amber-50`}
          onClick={onClick}
        >
          {text}
        </SecondaryButton>
      </div>
    </div>
  );
}

export default FlipButton;
