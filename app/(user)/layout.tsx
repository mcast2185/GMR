import Header from '../../components/header';
import Banner from '../../components/banner';

import Mouse from 'components/mouse';
import Head from '../head';

import "../../styles/globals.css";
import Providers from 'app/providers';
import FloatButtonComp from 'components/floatButton';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <Head/>
        <body className="min-w-full flex min-h-full ">
      <Providers>
          <Mouse/>
          <FloatButtonComp/>
          <div className="mx-auto">
            <div className="max-w-[600px] md:max-w-5xl h-fit flex flex-col">
              <Header/>
              <Banner/>
            </div>
            {children}
          </div> 
        </Providers>
        </body>
    </html>
  );
};