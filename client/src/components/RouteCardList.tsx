import type { RouteGeneralInformationInterface } from '../interfaces/RoutesInterface';
import RouteCard from './RouteCard';

interface RouteCardListProps {
  routes: RouteGeneralInformationInterface[];
}

export function RouteCardList({ routes }: RouteCardListProps) {
  return (
    <div>
      {routes.map((route: RouteGeneralInformationInterface) => (
        <RouteCard key={route.id} route={route} />
      ))}
    </div>
  );
}
