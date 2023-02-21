// next imports
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';

// react imports
import { useState } from 'react';

// components
import Featured from '@/components/Featured';
import PizzaList from '@/components/PizzaList';
import Add from '@/components/Add';
import AddButton from '@/components/AddButton';

// utils
import axios from 'axios';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true);

  return (
    <>
      <Head>
        <title>Pizzeria</title>
        <meta name='description' content='Pizza Store' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/img/favicon.png' />
      </Head>
      <Featured />
      {admin && <AddButton setClose={setClose} />}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || '';
  let admin = false;

  if (myCookie.token == process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get('http://localhost:3000/api/products');
  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};
