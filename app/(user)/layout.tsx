import Header from '../../components/header';
import Banner from '../../components/banner';
import "../../styles/globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className="max-w-7xl mx-auto">
        <Header/>
        <Banner/>
        {children}
      </body>
    </html>
  )
}
