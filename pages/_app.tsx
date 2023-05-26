import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import Mouse from 'components/mouse';

import '../styles/globals.css';
import Providers from 'app/providers';
import FloatButtonComp from 'components/floatButton';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Mouse/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};


export default MyApp;
