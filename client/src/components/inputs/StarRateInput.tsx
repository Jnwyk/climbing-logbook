import StarIcon from '../StarIcon';

interface StarRateInputProps {
  rate: number;
  handleChange: (value: number) => void;
}

function StarRateInput({ rate, handleChange }: StarRateInputProps) {
  return (
    <div className="flex relative left-[35 %] cursor-pointer">
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon
          key={i}
          color={`${i < rate ? '#f8b231' : '#ffffff'}`}
          size={36}
          onMouseOver={() => handleChange(i + 1)}
          onClick={() => handleChange(i + 1)}
        />
      ))}
    </div>
  );
}

export default StarRateInput;
