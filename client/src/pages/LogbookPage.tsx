import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { route } from './../api/routes';
import { RouteCardList } from '../components/RouteCardList';
import SearchCard from '../components/SearchCard';
import PrimaryButton from '../components/PrimaryButton';
import type { RouteCardsFilterInterface } from '../interfaces/RouteCardsFilterInterface';

function LogbookPage() {
  const [filters, setFilters] = useState<RouteCardsFilterInterface>({
    routeName: '',
    cragAreaName: '',
    country: '',
  });
  const { isPending, isError, data } = useQuery({
    queryKey: ['routes'],
    queryFn: route,
    select: (data) => {
      return {
        ...data,
        routes: data.routes.filter(
          (route) =>
            (filters.routeName
              ? route.name
                  .toLowerCase()
                  .includes(filters.routeName.toLowerCase())
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
              ? route.country
                  .toLowerCase()
                  .includes(filters.country.toLowerCase())
              : true),
        ),
      };
    },
  });

  if (isPending) return <div>Loading</div>;
  if (isError) return <div>Error</div>;
  return (
    <main className="relative mx-auto max-w-7xl w-full">
      <div className="relative flex justify-end px-8 pt-8">
        <PrimaryButton onClick={() => console.log('click')}>
          + Add Route
        </PrimaryButton>
      </div>
      <div className="flex flex-col gap-4 pt-8 px-8 ">
        <SearchCard
          filters={filters}
          onSearchClick={(filters) => setFilters(filters)}
        />
        <RouteCardList routes={data?.routes} />
      </div>
    </main>
  );
}

export default LogbookPage;
