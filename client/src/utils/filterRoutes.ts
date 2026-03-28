import type { RouteCardsFilterInterface } from '../interfaces/RouteCardsFilterInterface';

export default function filterRoutes(data, filters: RouteCardsFilterInterface) {
  return {
    ...data,
    routes: data.routes.filter(
      (route) =>
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
    ),
  };
}
