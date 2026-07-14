import { useState } from 'react';
import StarIcon from '../StarIcon';

interface StarRateInputProps {
  rate: number;
  handleChange: (value: number) => void;
}

function StarRateInput({ rate, handleChange }: StarRateInputProps) {
  const [hoveredStars, setHoveredStars] = useState(rate);
  return (
    <div className="flex w-full justify-center cursor-pointer">
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon
          key={i}
          color={`${i < hoveredStars ? '#f8b231' : '#ffffff'}`}
          size={36}
          onMouseOver={() => setHoveredStars(i + 1)}
          onClick={() => handleChange(i + 1)}
          onMouseLeave={() => setHoveredStars(rate)}
        />
      ))}
    </div>
  );
}

export default StarRateInput;
