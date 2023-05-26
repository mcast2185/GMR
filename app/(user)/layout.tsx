import Header from '../../components/header';
import Banner from '../../components/banner';

import Mouse from 'components/mouse';
import Head from '../head';

import "../../styles/globals.css";
import Providers from 'app/providers';
import FloatButtonComp from 'components/floatButton';
import Helper from 'components/helpButton';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <Head/>
        <body className="min-w-[500px] md:min-w-full flex min-h-full ">
          <Providers>
            <Mouse/>
            <FloatButtonComp/>
            <Helper/>
            <div className="mx-auto">
              <div className="max-w-[500px] md:max-w-5xl h-fit flex flex-col">
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