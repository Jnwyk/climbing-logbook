import SearchInput from './SearchInput';

function SearchCard() {
  return (
    <div className="grid grid-cols-3 gap-6 bg-card-dark p-5 pt-8 border border-l-primary ">
      <SearchInput
        label="Route Name"
        placeholder="e.g. Lewy Meningitis"
        onChange={() => console.log('test')}
      />
      <SearchInput
        label="Crag / Area"
        placeholder="e.g. Dupa Słonia"
        onChange={() => console.log('test')}
      />
      <SearchInput
        label="Country"
        placeholder="e.g. Poland"
        onChange={() => console.log('test')}
      />
    </div>
  );
}

export default SearchCard;
