import { FC } from 'react';
import Select from 'react-select';

import { locations } from '../../location';
import { DropdownIndicator } from './DropdownIndicator';
import {
  SearchContainer,
  reactSelectStyles,
  reactSelectTheme,
} from './styles';

interface SearchProps {
  onSelect: (event: any) => Promise<void>;
}

const options = locations.map((location) => ({
  id: location.id,
  value: location.name,
  label: location.name,
}));

export const Search: FC<SearchProps> = ({ onSelect }: SearchProps) => {
  return (
    <SearchContainer>
      <Select
        options={options}
        onChange={onSelect}
        placeholder='City'
        components={{
          DropdownIndicator,
        }}
        styles={reactSelectStyles}
        theme={reactSelectTheme}
      />
    </SearchContainer>
  );
}
