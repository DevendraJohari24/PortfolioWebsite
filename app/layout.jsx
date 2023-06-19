import '@styles/global.css';
import Providers from './providers';
import Header from '@components/Header/Header';
import {Jost, Yellowtail} from 'next/font/google';
import Footer from '@components/Footer/Footer';
import SideNavbar from '@components/SideNavbar/SideNavbar';
import Intro from './intro/page';

export const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
})


export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio of Devendra Johari',
}



export default function RootLayout({ children }) {
 return (
    <html lang='en' className={`${jost.className}`} >
      <body className="bg-darkGray font-sans text-white">
          <Providers>
            <Header />
              <div className='flex md:flex-row flex-col-reverse relative max-h-full max-w-full gap-5'>
                <div className='w-1/12 md:block hidden sticky z-10'>
                  <SideNavbar />
                </div>
                <div className='md:w-6/12 w-full p-5 md:p-0'>
                  {children}
                </div>
                <div className=' sticky border-l border-slate md:w-5/12'>
                  <Intro />
                </div>

              </div>
            <Footer />            
          </Providers>
      </body>
    </html>
  )
}

    
