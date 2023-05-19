import Header from '../../components/header';
import Banner from '../../components/banner';

import Mouse from 'components/mouse';
import Head from '../head';

import "../../styles/globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html >
      <Head/>
      <body className="min-w-full flex min-h-full">
        <Mouse/>
        <div className="mx-auto">
          <div className="max-w-5xl h-fit flex flex-col">
            <Header/>
            <Banner/>
          </div>
          {children}
        </div> 
      </body>
    </html>
  );
};