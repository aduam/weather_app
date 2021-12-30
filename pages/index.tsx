import type { NextPage } from 'next';
import Head from 'next/head';

import { Search } from '../components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Search />
    </>
  );
};

export default Home;
