import { DynamicInput } from './DynamicInput';
import PrimaryButton from './PrimaryButton';
import SearchInput from './SearchInput';

function AscentSearchCard() {
  return (
    <div className="flex flex-col flex-1 p-4 shadow-[0_4px_12px_rgba(0,0,0,0.3)] shadow-black">
      <SearchInput
        label="Route"
        placeholder="Input Route..."
        value=""
        onChange={() => console.log('Change route')}
      />
      <div className="flex gap-2">
        <DynamicInput
          label="Grade"
          placeholder="min grade"
          value=""
          onChange={() => console.log('Change min grade')}
        />
        <DynamicInput
          label="Grade"
          placeholder="max grade"
          value=""
          onChange={() => console.log('Change max grade')}
        />
      </div>
      <div className="flex gap-2">
        <DynamicInput
          label="Format"
          placeholder="format"
          value=""
          onChange={() => console.log('Change format')}
        />
        <DynamicInput
          label="Style"
          placeholder="style"
          value=""
          onChange={() => console.log('Change style')}
        />
      </div>
      <PrimaryButton className="mt-4 " onClick={() => console.log('Search')}>
        Search
      </PrimaryButton>
    </div>
  );
}

export default AscentSearchCard;
