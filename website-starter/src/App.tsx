import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from './lib/useLenis';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  useLenis();

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            style={preloaderStyle}
          >
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{ fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: '0.05em' }}
            >
              Studio<span style={{ color: 'var(--accent)' }}>.</span>
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

const preloaderStyle: React.CSSProperties = {
  position: 'fixed',
  inset: 0,
  zIndex: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'var(--bg)',
};

export default App;
