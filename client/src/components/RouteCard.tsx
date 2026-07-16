import type { RouteGeneralInformationInterface } from '../interfaces/RoutesInterface';
import { RouteCardInfo } from './RouteCardInfo';

interface RouteCardProps {
  route: RouteGeneralInformationInterface;
}

function RouteCard({ route }: RouteCardProps) {
  return (
    <div className="group bg-card-dark hover:bg-card-dark transition-all duration-300 p-5 flex flex-between md:flex-row md:items-center justify-between border border-card-light hover:shadow-[0_12px_24px_-10px_rgba(0,0,0,0.3)] cursor-default">
      <RouteCardInfo route={route} />
    </div>
  );
}

export default RouteCard;
