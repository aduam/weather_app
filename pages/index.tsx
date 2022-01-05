import type { NextPage } from 'next';
import { useState, useContext } from 'react';
import Head from 'next/head';
import { Toaster, toast } from 'react-hot-toast';

import { Search, WeatherCard, ListWeatherCard } from '../components';
import { Layout, H2 } from '../styles/Layout';
import { getApi } from '../utils';
import { Items } from '../context';

interface OnSelectEvent {
  id: number;
}

interface WeatherData {
  temp: number;
  // eslint-disable-next-line camelcase
  feels_like: number;
  // eslint-disable-next-line camelcase
  temp_min: number;
  // eslint-disable-next-line camelcase
  temp_max: number;
}

export interface WeatherResponse {
  cod: number;
  main: WeatherData;
  name: string;
}

interface IState {
  data: null | WeatherData;
  loading: boolean;
  name: null | string;
}

const Home: NextPage = () => {
  const {
    items
  } = useContext(Items);
  const [state, setState] = useState<IState>({
    data: null,
    loading: false,
    name: null
  });
  const [id, setId] = useState<number | null>(null);
  const onSelect = async (event: OnSelectEvent): Promise<void> => {
    setState({ ...state, loading: true, data: null, name: null });
    setId(event.id);

    const data = await getApi({ cityId: event.id });
    if (data?.cod !== 200) {
      toast.error('There was an error');
      setState({ ...state, loading: false });
      return;
    }
    setState({ ...state, loading: false, data: data.main, name: data.name });
  }

  const getList = () => {
    return Object.keys(items).map(item => ({
      id: item,
      ...items[item]
    }));
  };

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <>
          <H2>Your cities</H2>
          <Search onSelect={onSelect} />
          {state.data && state.name && id && (
            <WeatherCard
            id={id}
              temp={state.data.temp}
              name={state.name}
              onSelect={onSelect}
            />
          )}
          <ListWeatherCard list={getList()} />
        </>
      </Layout>
      <Toaster />
    </>
  );
};

export default Home;
