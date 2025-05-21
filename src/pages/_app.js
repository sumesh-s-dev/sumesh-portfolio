import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <main key={router.route}>
          <Component {...pageProps} />
        </main>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;