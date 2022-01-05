import { components, DropdownIndicatorProps } from 'react-select';

import { SearchLogo } from './styles';

export const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <SearchLogo color='#F24D03' />
    </components.DropdownIndicator>
  );
};
