import type { AppProps } from 'next/app';

import Mouse from 'components/mouse';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div >
      <Mouse/>
      <Component {...pageProps} />
    </div>
  );
};


export default MyApp;
