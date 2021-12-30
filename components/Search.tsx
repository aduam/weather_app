import { FC } from 'react';
import styled from 'styled-components';
import { FaSearch } from "react-icons/fa";
import Select, { components, DropdownIndicatorProps } from 'react-select';

const SearchContainer = styled.div`
  width: 200px;
  position: relative;
`;

const SearchLogo = styled(FaSearch)`
  position: absolute;
  top: 8px;
  right: 10px;
`;

const test = [
  { id: 1, value: 'Guatemala', label: 'Guatemala' },
  { id: 2, value: 'Colombia', label: 'Colombia' },
  { id: 3, value: 'Mexico', label: 'Mexico' },
  { id: 4, value: 'Costa Rica', label: 'Costa Rica' },
  { id: 5, value: 'Brazil', label: 'Brazil' },
];

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <SearchLogo color='#F24D03' />
    </components.DropdownIndicator>
  );
};

export const Search: FC = () => {
  return (
    <SearchContainer>
      <Select
        options={test}
        placeholder='City'
        components={{
          DropdownIndicator,
        }}
        styles={{
          indicatorSeparator: () => ({
            display: 'none',
          }),
          menu: (provided) => ({
            ...provided,
            top: 32,
            padding: 0,
            borderRadius: '0 0 5px 5px',
            borderTop: 'black',
          }),
          control: (provided) => ({
            ...provided,
            border: 'none',
            borderRadius: '5px 5px 0 0',
          }),
        }}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: '#f24d0759',
            primary: '#F24D03',
          },
        })}
      />
    </SearchContainer>
  );
}
