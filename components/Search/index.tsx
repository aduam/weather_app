import { FC } from 'react';
import Select from 'react-select';

import { locations } from '../../location';
import { DropdownIndicator } from './DropdownIndicator';
import {
  SearchContainer,
  reactSelectStyles,
  reactSelectTheme,
} from './styles';

const options = locations.map((location) => ({
  id: location.id,
  value: location.name,
  label: location.name,
}));

export const Search: FC = () => {
  return (
    <SearchContainer>
      <Select
        options={options}
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
