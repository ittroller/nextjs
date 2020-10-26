import React from 'react';
import Head from 'next/head';
// import withLocale from '../../hocs/withLocale';

const PublicLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>LAYOUT</title>
      </Head>
      <>
        CLGHT
        {children}
      </>
    </>
  );
};
export default PublicLayout;
