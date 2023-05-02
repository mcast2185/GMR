import type { AppProps } from 'next/app';
import Mouse from 'components/mouse';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div >
     
      <Mouse/>
      <Component {...pageProps} />
    </div>
  )
};

export default MyApp;
// import { SessionProvider } from "next-auth/react"
// import Mouse from 'components/mouse';

// export default function App({
//   Component,
//   pageProps: { session, ...pageProps },
// }: AppProps) {
//   return (
//     <SessionProvider session={session}>
//       <Mouse/>
//       <Component {...pageProps} />
//     </SessionProvider>
//   )
// }