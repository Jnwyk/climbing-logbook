import { useQuery } from '@tanstack/react-query';
import Table from '../components/tables/Table';
import { ascents } from '../api/ascents';
import AscentSearchCard from '../components/AscentSearchCard';

function ExplorePage() {
  const { isPending, isError, data } = useQuery({
    queryKey: ['ascents'],
    queryFn: ascents,
  });

  if (isPending) return <p>Loading</p>;
  return (
    <main className="p-2 pt-8 flex gap-8">
      <Table
        headers={['Crag', 'Grade', 'Format', 'Style', 'Ascent Date', 'Rating']}
        tableWidth={['30', '10', '10', '10', '15', '25']}
        tableData={data.ascents}
      />
      <AscentSearchCard />
    </main>
  );
}

export default ExplorePage;
