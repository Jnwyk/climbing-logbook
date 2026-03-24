import type { RouteCardInterface } from '../interfaces/RouteCardInterface';
import RouteCard from './RouteCard';

interface RouteCardListProps {
  routes: RouteCardInterface[];
}

export function RouteCardList({ routes }: RouteCardListProps) {
  return (
    <div>
      {routes.map((route: RouteCardInterface) => (
        <RouteCard
          key={`${route.name}-${route.crag}-${route.area}`}
          route={route}
        />
      ))}
    </div>
  );
}
