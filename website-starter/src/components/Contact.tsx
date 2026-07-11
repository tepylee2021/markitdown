import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" style={styles.section}>
      <div className="container" style={styles.inner}>
        <motion.h2
          style={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let's build something that moves.
        </motion.h2>

        <AnimatePresence mode="wait">
          {!sent ? (
            <motion.form
              key="form"
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              style={styles.form}
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <input required type="email" placeholder="you@example.com" style={styles.input} />
              <motion.button
                type="submit"
                style={styles.button}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get in touch
              </motion.button>
            </motion.form>
          ) : (
            <motion.p
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={styles.success}
            >
              Thanks — we'll be in touch shortly.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: '80px 0 160px',
    borderTop: '1px solid var(--border)',
  },
  inner: {
    textAlign: 'center',
    maxWidth: 620,
    margin: '0 auto',
  },
  heading: {
    fontSize: 'clamp(28px, 5vw, 44px)',
    marginBottom: 40,
  },
  form: {
    display: 'flex',
    gap: 12,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  input: {
    flex: 1,
    minWidth: 240,
    padding: '14px 20px',
    borderRadius: 100,
    border: '1px solid var(--border)',
    background: 'var(--bg-elevated)',
    color: 'var(--fg)',
    fontSize: 15,
    outline: 'none',
  },
  button: {
    padding: '14px 28px',
    borderRadius: 100,
    border: 'none',
    background: 'var(--accent)',
    color: 'white',
    fontSize: 14,
    fontWeight: 600,
    cursor: 'pointer',
  },
  success: {
    color: 'var(--accent)',
    fontSize: 16,
  },
};
