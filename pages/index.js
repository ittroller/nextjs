import { useEffect } from 'react';
import Head from 'next/head';

import { getInitialLocale } from '../config/i18n/getInitialLocale';

const App = () => {
  useEffect(() => {
    window.location.replace(`/${getInitialLocale()}`);
  });
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default App;
