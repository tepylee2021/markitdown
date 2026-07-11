import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LINKS = ['Work', 'About', 'Services', 'Contact'];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={styles.nav}
    >
      <div className="container" style={styles.inner}>
        <a href="#top" style={styles.logo}>
          Studio<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        <div className="nav-desktop-links" style={styles.desktopLinks}>
          {LINKS.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} style={styles.link}>
              {link}
            </a>
          ))}
        </div>

        <button
          aria-label="Toggle menu"
          className="nav-burger"
          onClick={() => setOpen((o) => !o)}
          style={styles.burger}
        >
          <motion.span
            style={styles.burgerLine}
            animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
          />
          <motion.span
            style={styles.burgerLine}
            animate={{ opacity: open ? 0 : 1 }}
          />
          <motion.span
            style={styles.burgerLine}
            animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={styles.mobileMenu}
          >
            {LINKS.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 + 0.1 }}
                style={styles.mobileLink}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

const styles: Record<string, React.CSSProperties> = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    backdropFilter: 'blur(12px)',
    background: 'rgba(10, 10, 15, 0.7)',
    borderBottom: '1px solid var(--border)',
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 76,
  },
  logo: {
    fontFamily: 'var(--font-display)',
    fontSize: 20,
    fontWeight: 700,
  },
  desktopLinks: {
    display: 'flex',
    gap: 36,
  },
  link: {
    fontSize: 14,
    color: 'var(--fg-muted)',
    fontWeight: 500,
  },
  burger: {
    display: 'none',
    flexDirection: 'column',
    gap: 5,
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: 8,
  },
  burgerLine: {
    width: 22,
    height: 2,
    background: 'var(--fg)',
    display: 'block',
    borderRadius: 2,
  },
  mobileMenu: {
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    padding: '0 32px',
  },
  mobileLink: {
    padding: '14px 0',
    borderTop: '1px solid var(--border)',
    fontSize: 15,
    color: 'var(--fg-muted)',
  },
};
