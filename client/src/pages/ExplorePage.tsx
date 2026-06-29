import { useQuery } from '@tanstack/react-query';
import Table from '../components/tables/Table';
import { ascents } from '../api/ascents';
import AscentSearchCard from '../components/AscentSearchCard';
import { useMemo, useState } from 'react';
import type {
  AscentTableInterface,
  FilterAscentsInterface,
} from '../interfaces/AscentsInterface';
import filterAscents from '../utils/filterAscents';

function ExplorePage() {
  const [activeFilters, setActiveFilters] = useState<FilterAscentsInterface>({
    route: '',
    minGrade: '',
    maxGrade: '',
    format: '',
    style: '',
  });

  const { isPending, isError, data } = useQuery({
    queryKey: ['ascents'],
    queryFn: ascents,
  });

  const filteredData = useMemo(() => {
    if (!data) return null;
    return data.ascents.filter((element: AscentTableInterface) => {
      return filterAscents(element, activeFilters);
    });
  }, [data, activeFilters]);

  if (isPending) return <p>Loading</p>;
  return (
    <main className="p-6 pt-8 flex items-start gap-6">
      <Table
        headers={['Crag', 'Grade', 'Format', 'Style', 'Ascent Date', 'Rating']}
        tableWidth={['30', '10', '10', '10', '15', '25']}
        tableData={filteredData}
      />
      <AscentSearchCard
        submitSearch={(filters) => setActiveFilters(filters)}
        searchFilters={activeFilters}
      />
    </main>
  );
}

export default ExplorePage;
