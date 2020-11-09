import App from 'next/app';

import { appWithTranslation } from '../config/i18n';

import '../styles/index.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="root-app">
      <Component {...pageProps} />
    </div>
  );
};

MyApp.getInitialProps = async appContext => ({ ...(await App.getInitialProps(appContext)) });

export default appWithTranslation(MyApp);
