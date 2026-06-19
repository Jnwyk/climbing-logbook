interface RouteStyleIconInterface {
  style: string;
}

const REDPOINT_COLOR = '#d51c54';
const FLASH_COLOR = '#f8b231';
const ONSIGHT_COLOR = '#00a19a';
const TOPROPE_COLOR = '#00bfff';
const PROJECT_COLOR = '#b4b3b4';

function RouteStyleIcon({ style }: RouteStyleIconInterface) {
  const iconColor = (() => {
    switch (style) {
      case 'Flash':
        return FLASH_COLOR;
      case 'Redpoint':
        return REDPOINT_COLOR;
      case 'Onsight':
        return ONSIGHT_COLOR;
      case 'Top Rope':
        return TOPROPE_COLOR;
      case 'Project':
        return PROJECT_COLOR;
      default:
        return '#ffffff';
    }
  })();

  return (
    <div
      className="w-6 h-6 rounded-full border-2 flex justify-center items-center relative left-[50%] translate-x-[-50%]"
      style={{ borderColor: iconColor }}
    >
      <div
        className="w-4 h-4 rounded-full"
        style={{ background: iconColor }}
      ></div>
    </div>
  );
}

export default RouteStyleIcon;
