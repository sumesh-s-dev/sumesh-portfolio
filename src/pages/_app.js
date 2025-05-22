import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { ThemeProvider } from '../context/ThemeContext';

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider>
      <Header />
      <AnimatePresence mode="wait">
        <main key={router.route}>
          <Component {...pageProps} />
        </main>
      </AnimatePresence>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
