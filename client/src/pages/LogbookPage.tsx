import { useQuery } from '@tanstack/react-query';
import { route } from './../api/routes';
import { RouteCardList } from '../components/RouteCardList';
import SearchCard from '../components/SearchCard';
import PrimaryButton from '../components/PrimaryButton';

function LogbookPage() {
  const { isPending, isError, data } = useQuery({
    queryKey: ['routes'],
    queryFn: route,
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
        <SearchCard />
        <RouteCardList routes={data?.routes} />
      </div>
    </main>
  );
}

export default LogbookPage;
