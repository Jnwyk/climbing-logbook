import RouteStyleIcon from '../RouteStyleIcon';

function StyleButton({
  style,
  selected,
  onClick,
}: {
  style: string;
  selected: string;
  onClick: (style: string) => void;
}) {
  return (
    <button
      className={`${style === selected ? 'bg-yellow-50' : 'bg-card-dark'} flex-1 p-1 border-yellow-50 border-2 rounded-xl hover:bg-yellow-50 transition-all duration-500`}
      onClick={() => onClick(style)}
    >
      <RouteStyleIcon style={style} />
    </button>
  );
}

export default StyleButton;
