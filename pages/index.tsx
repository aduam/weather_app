import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import { Toaster, toast } from 'react-hot-toast';

import { Search, WeatherCard, ListWeatherCard } from '../components';
import { Layout } from '../styles/Layout';
import { getApi } from '../utils';

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

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <>
          <p>Your cities</p>
          <Search onSelect={onSelect} />
          {state.loading && <p>Loading...</p>}
          {state.data && state.name && id && <WeatherCard temp={state.data.temp} name={state.name} onSelect={onSelect} id={id} />}
          <ListWeatherCard />
        </>
      </Layout>
      <Toaster />
    </>
  );
};

export default Home;
