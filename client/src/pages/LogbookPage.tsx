import { useState, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { route } from './../api/routes';
import { RouteCardList } from '../components/RouteCardList';
import SearchCard from '../components/SearchCard';
import PrimaryButton from '../components/PrimaryButton';
import { AddNewRouteModal } from '../components/modals/AddNewRouteModal';
import type { RouteCardsFilterInterface } from '../interfaces/RouteCardsFilterInterface';
import filterRoutes from '../utils/filterRoutes';

function LogbookPage() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [filters, setFilters] = useState<RouteCardsFilterInterface>({
    routeName: '',
    cragAreaName: '',
    country: '',
  });
  const { isPending, isError, data } = useQuery({
    queryKey: ['routes'],
    queryFn: route,
    select: (data) => filterRoutes(data, filters),
  });

  if (isPending) return <div>Loading</div>;
  if (isError) return <div>Error</div>;
  return (
    <main className="relative mx-auto max-w-7xl w-full">
      <div className="relative flex justify-end px-8 pt-8">
        <PrimaryButton onClick={() => modalRef.current?.showModal()}>
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
      <AddNewRouteModal
        modalRef={modalRef}
        closeModal={() => modalRef.current?.close()}
      />
    </main>
  );
}

export default LogbookPage;
