import { useQueries } from '@tanstack/react-query';
import { DynamicInput } from './inputs/DynamicInput';
import PrimaryButton from './PrimaryButton';
import SearchInput from './inputs/SearchInput';
import { getGrades, getFormats, getStyles } from '../api/dictionaries';
import { route } from '../api/routes';
import { useState } from 'react';
import type { FilterAscentsInterface } from '../interfaces/AscentsInterface';
import type {
  FormatInterface,
  GradeInterface,
  StyleInterface,
} from '../interfaces/DictionaryInterface';

interface AscentSearchCardProps {
  submitSearch: (filters: FilterAscentsInterface) => void;
  searchFilters: FilterAscentsInterface;
}

function AscentSearchCard({
  submitSearch,
  searchFilters,
}: AscentSearchCardProps) {
  const dictionaryData = useQueries({
    queries: [
      {
        queryKey: ['grades'],
        queryFn: () => getGrades(),
      },
      {
        queryKey: ['formats'],
        queryFn: () => getFormats(),
      },
      {
        queryKey: ['styles'],
        queryFn: () => getStyles(),
      },
      {
        queryKey: ['routes'],
        queryFn: () => route(),
      },
    ],
  });

  const [filters, setFilters] = useState<FilterAscentsInterface>(searchFilters);

  if (
    dictionaryData[0].isLoading ||
    dictionaryData[1].isLoading ||
    dictionaryData[2].isLoading
  ) {
    return <div>loading</div>;
  }

  return (
    <div className="min-h-[70vh] flex flex-col flex-1 p-4 shadow-[0_4px_12px_rgba(0,0,0,0.3)] shadow-black">
      <SearchInput
        label="Route"
        placeholder="input Route..."
        value={filters.route}
        onChange={(value) => setFilters((prev) => ({ ...prev, route: value }))}
      />
      <div className="flex gap-2">
        <DynamicInput
          label="Min Grade"
          placeholder="min grade"
          data={dictionaryData[0].data.grades.map(
            (grade: GradeInterface) => grade.grade,
          )}
          value={filters.minGrade}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, minGrade: value }))
          }
        />
        <DynamicInput
          label="Max Grade"
          placeholder="max grade"
          data={dictionaryData[0].data.grades.map(
            (grade: GradeInterface) => grade.grade,
          )}
          value={filters.maxGrade}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, maxGrade: value }))
          }
        />
      </div>
      <div className="flex gap-2">
        <DynamicInput
          label="Format"
          placeholder="format"
          data={dictionaryData[1].data.formats.map(
            (format: FormatInterface) => format.format,
          )}
          value={filters.format}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, format: value }))
          }
        />
        <DynamicInput
          label="Style"
          placeholder="style"
          data={dictionaryData[2].data.styles.map(
            (style: StyleInterface) => style.style,
          )}
          value={filters.style}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, style: value }))
          }
        />
      </div>
      <PrimaryButton className="mt-4 " onClick={() => submitSearch(filters)}>
        Search
      </PrimaryButton>
    </div>
  );
}

export default AscentSearchCard;
