import { useState } from 'react';
import PrimaryButton from './PrimaryButton';
import SearchInput from './SearchInput';
import type { RouteCardsFilterInterface } from '../interfaces/RouteCardsFilterInterface';

interface SearchCardInterface {
  filters: RouteCardsFilterInterface;
  onSearchClick: (filters: RouteCardsFilterInterface) => void;
}

function SearchCard({ filters, onSearchClick }: SearchCardInterface) {
  const [currentFilter, setCurrentFilter] =
    useState<RouteCardsFilterInterface>(filters);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-card-dark p-7 pt-8 border border-l-primary ">
      <SearchInput
        label="Route Name"
        placeholder="e.g. Lewy Meningitis"
        value={currentFilter.routeName}
        onChange={(value) =>
          setCurrentFilter((prev) => ({ ...prev, routeName: value }))
        }
      />
      <SearchInput
        label="Crag / Area"
        placeholder="e.g. Dupa Słonia"
        value={currentFilter.cragAreaName}
        onChange={(value) =>
          setCurrentFilter((prev) => ({ ...prev, cragAreaName: value }))
        }
      />
      <SearchInput
        label="Country"
        placeholder="e.g. Poland"
        value={currentFilter.country}
        onChange={(value) =>
          setCurrentFilter((prev) => ({ ...prev, country: value }))
        }
      />
      <div className="flex items-end">
        <PrimaryButton
          className="w-full"
          onClick={() => onSearchClick(currentFilter)}
        >
          Search
        </PrimaryButton>
      </div>
    </div>
  );
}

export default SearchCard;
