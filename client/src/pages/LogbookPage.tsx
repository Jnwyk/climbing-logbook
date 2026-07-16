import { useQuery } from '@tanstack/react-query';
import Table from '../components/tables/Table';
import { ascents } from '../api/ascents';
import AscentSearchCard from '../components/AscentSearchCard';
import { useMemo, useRef, useState } from 'react';
import type {
  AscentTableInterface,
  FilterAscentsInterface,
} from '../interfaces/AscentsInterface';
import filterAscents from '../utils/filterAscents';
import AddAscentModal from '../components/modals/AddAscentModal';
import FlipButton from '../components/buttons/FlipButton';

function LogbookPage() {
  const modalRef = useRef<HTMLDialogElement>(null);
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
  if (isError) navigation.navigate('/home');
  return (
    <main className="p-6 pt-8 flex items-start gap-6">
      <Table
        headers={['Crag', 'Grade', 'Format', 'Style', 'Ascent Date', 'Rating']}
        tableWidth={['30', '10', '10', '10', '15', '25']}
        tableData={filteredData}
      />
      <div className="flex flex-col gap-6">
        <FlipButton
          text="Add Ascent +"
          onClick={() => modalRef.current?.showModal()}
        />
        <AscentSearchCard
          submitSearch={(filters) => setActiveFilters(filters)}
          searchFilters={activeFilters}
        />
      </div>
      <AddAscentModal
        modalRef={modalRef}
        onClose={() => modalRef.current?.close()}
      />
    </main>
  );
}

export default LogbookPage;
