import Head from 'next/head';
import React from 'react';
import Header from './Layout/Header';

const Layout = ({title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="" />

       
      </Head>
      <Header />
      <div className="relative mt-10">{children}</div>
    </>
  );
};

export default Layout;
