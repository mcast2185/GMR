import Header from '../../components/header';
import Banner from '../../components/banner';

import Mouse from 'components/mouse';
import Head from '../head';

import "../../styles/globals.css";
import Providers from 'app/providers';
import FloatButtonComp from 'components/floatButton';
import Helper from 'components/helpButton';

// we need to adjust the height issue being created with the header being pushed off screen
// check the axis for any mistakes then strip height from all elements and re establish the styling tree

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <Head/>
        <body className="sm:min-w-[390px] min-w-full flex min-h-full overflow-hidden sm:p-0 sm:m-0">
          <Providers>
            <Mouse/>
            <FloatButtonComp/>
            <Helper/>
            <div className="mx-auto">
              <div className="sm:max-w-[390px] max-w-5xl h-fit flex flex-col">
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