import type { RouteCardInterface } from '../interfaces/RouteCardInterface';
import { CardButton } from './CardButton';
import { RouteCardInfo } from './RouteCardInfo';

interface RouteCardProps {
  route: RouteCardInterface;
}

function RouteCard({ route }: RouteCardProps) {
  return (
    <div className="group bg-card-dark hover:bg-card-dark transition-all duration-300 p-5 flex flex-between md:flex-row md:items-center justify-between border border-card-light hover:shadow-[0_12px_24px_-10px_rgba(0,0,0,0.3)] cursor-default">
      <RouteCardInfo route={route} />
      <div className="flex gap-1">
        <CardButton text="Edit" onClick={() => console.log('Edit')} />
        <CardButton text="Archive" onClick={() => console.log('Archive')} />
      </div>
    </div>
  );
}

export default RouteCard;
