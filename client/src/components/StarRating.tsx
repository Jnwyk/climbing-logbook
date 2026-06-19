import StarIcon from './StarIcon';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex relative left-[35%]">
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} color={`${i < rating ? '#f8b231' : '#ffffff'} `} />
      ))}
    </div>
  );
}

export default StarRating;
