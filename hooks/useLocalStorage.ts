import { useState, useEffect } from 'react';

export const useLocalStorage = () => {
  const [items, setItems] = useState<Record<number, any>>({});
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const items = localStorage.getItem('weather_list');
    if (!items) {
      localStorage.setItem('weather_list', JSON.stringify({}));
      setItems({});
    } else {
      setItems(JSON.parse(localStorage.getItem('weather_list') || '{}'));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem('weather_list', JSON.stringify(items));
  }, [items]);

  return {
    items,
    loading,
    setItems
  }
};
