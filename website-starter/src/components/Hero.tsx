import { motion, type Variants } from 'framer-motion';
import Scene3D from './Scene3D';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item: Variants = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section id="top" style={styles.section}>
      <Scene3D />

      <div className="container" style={styles.content}>
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} style={styles.eyebrow}>
            Design &middot; Motion &middot; 3D
          </motion.p>
          <motion.h1 variants={item} style={styles.title}>
            We build interfaces
            <br />
            that <span style={styles.accent}>move</span>.
          </motion.h1>
          <motion.p variants={item} style={styles.subtitle}>
            A starter kit combining React, Framer Motion, GSAP scroll
            choreography, and real-time 3D — the stack behind modern
            award-winning sites.
          </motion.p>
          <motion.div variants={item} style={styles.ctaRow}>
            <a href="#services" style={styles.primaryBtn}>
              Explore the stack
            </a>
            <a href="#about" style={styles.secondaryBtn}>
              Learn more
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        style={styles.scrollHint}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        Scroll
      </motion.div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
  },
  content: {
    position: 'relative',
    zIndex: 2,
    paddingTop: 120,
    pointerEvents: 'none',
  },
  eyebrow: {
    color: 'var(--accent)',
    fontSize: 13,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    fontWeight: 600,
    marginBottom: 20,
  },
  title: {
    fontSize: 'clamp(40px, 7vw, 84px)',
    maxWidth: 820,
  },
  accent: {
    color: 'var(--accent)',
    fontStyle: 'italic',
  },
  subtitle: {
    marginTop: 28,
    maxWidth: 480,
    color: 'var(--fg-muted)',
    fontSize: 17,
  },
  ctaRow: {
    display: 'flex',
    gap: 16,
    marginTop: 40,
    pointerEvents: 'auto',
  },
  primaryBtn: {
    background: 'var(--accent)',
    color: 'white',
    padding: '14px 28px',
    borderRadius: 100,
    fontSize: 14,
    fontWeight: 600,
  },
  secondaryBtn: {
    border: '1px solid var(--border)',
    padding: '14px 28px',
    borderRadius: 100,
    fontSize: 14,
    fontWeight: 600,
  },
  scrollHint: {
    position: 'absolute',
    bottom: 40,
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: 12,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--fg-muted)',
    zIndex: 2,
  },
};
