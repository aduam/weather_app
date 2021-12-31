import styled from 'styled-components';
import { FaSearch } from "react-icons/fa";
import { StylesConfig, ThemeConfig } from 'react-select';

export const SearchContainer = styled.div`
width: 200px;
position: relative;
`;

export const SearchLogo = styled(FaSearch)`
position: absolute;
top: 8px;
right: 10px;
`;

export const reactSelectStyles: StylesConfig = {
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
};

export const reactSelectTheme: ThemeConfig = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: '#f24d0759',
    primary: '#F24D03',
  },
});
