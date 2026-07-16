import type { RouteCardsFilterInterface } from '../interfaces/RouteCardsFilterInterface';
import type { RouteGeneralInformationInterface } from '../interfaces/RoutesInterface';

export default function filterRoutes(
  routes: RouteGeneralInformationInterface[],
  filters: RouteCardsFilterInterface,
): RouteGeneralInformationInterface[] {
  return routes.filter(
    (route: RouteGeneralInformationInterface) =>
      (filters.routeName
        ? route.name.toLowerCase().includes(filters.routeName.toLowerCase())
        : true) &&
      ((filters.cragAreaName
        ? route.cragName
            .toLowerCase()
            .includes(filters.cragAreaName.toLowerCase())
        : true) ||
        (filters.cragAreaName
          ? route.areaName
              .toLowerCase()
              .includes(filters.cragAreaName.toLowerCase())
          : true)) &&
      (filters.country
        ? route.country.toLowerCase().includes(filters.country.toLowerCase())
        : true),
  );
}
