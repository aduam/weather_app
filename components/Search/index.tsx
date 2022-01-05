import { FC, useContext } from 'react';
import Select from 'react-select';
import { toast } from 'react-hot-toast';

import { locations } from '../../location';
import { DropdownIndicator } from './DropdownIndicator';
import {
  SearchContainer,
  reactSelectStyles,
  reactSelectTheme
} from './styles';
import { Items } from '../../context';
import { getApi } from '../../utils';

interface SelectOption {
  id: number;
  value: string;
  label: string;
}

interface SearchProps {
  onSelect: (event: any) => Promise<void>;
}

const options = locations.map((location) => ({
  id: location.id,
  value: location.name,
  label: location.name
}));

export const Search: FC<SearchProps> = ({ onSelect }: SearchProps) => {
  const { items, setItems } = useContext(Items);

  const setNewItem = async (event: SelectOption): Promise<void> => {
    if (items[`i-${event.id}`]) {
      toast.success('City is in the list.');
      return;
    }

    const data = await getApi({ cityId: event.id });
    if (data?.cod !== 200) {
      toast.error('There was an error');
    } else {
      setItems({ ...items, [`i-${event.id}`]: { main: { ...data.main }, name: data.name } });
    }
  };

  return (
    <SearchContainer>
      <Select
        options={options}
        onChange={setNewItem}
        placeholder='City'
        components={{
          DropdownIndicator
        }}
        styles={reactSelectStyles}
        theme={reactSelectTheme}
      />
    </SearchContainer>
  );
}
