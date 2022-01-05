import { createContext, FC, Dispatch, SetStateAction } from 'react';

import { useLocalStorage } from '../hooks';

type LocalStorageType = {
  items: Record<any, any>;
  loading: boolean;
  setItems: Dispatch<SetStateAction<Record<number, any>>>;
}

export const Items = createContext<LocalStorageType>({
  items: {},
  loading: false,
  setItems: () => {}
});

export const ItemsProvider: FC = ({ children }) => {
  const { items, loading, setItems } = useLocalStorage();
  return (
    <Items.Provider value={{ items, loading, setItems }}>
      { children }
    </Items.Provider>
  );
};
