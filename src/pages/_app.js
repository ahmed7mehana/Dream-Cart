import '@/styles/globals.css'
import Navba from 'components/Navbarr';
import { store } from '/rtk/Store'
import { Provider } from 'react-redux'
import Icons from 'components/Icons';
import { SessionProvider} from 'next-auth/react'
import { ThemeProvider} from 'next-themes';
import ScrollToTop from "react-scroll-to-top";


export default function App({ Component, pageProps , session }) {



  return (
    <div   >
    <Provider store={store}>
    <SessionProvider session={session}>
    <ThemeProvider attribute='class' defaultTheme='dark'>
    <Navba  />
    <Icons/>
    <Component  {...pageProps}  />
    </ThemeProvider>
    </SessionProvider>
  </Provider>
  <ScrollToTop className="animate-bounce " color='#717fe0'   width='100%' smooth top={1000} />

    </div>
  );
}
