import type { NextPage } from 'next';
import Head from 'next/head';

import { WeatherCard } from '../components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <WeatherCard />
    </>
  );
};

export default Home;
