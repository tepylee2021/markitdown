import { motion } from 'framer-motion';

const SERVICES = [
  {
    title: 'Motion Design',
    desc: 'Page transitions, micro-interactions, and scroll choreography built with Framer Motion and GSAP.',
  },
  {
    title: '3D & WebGL',
    desc: 'Real-time 3D scenes with Three.js and React Three Fiber — hero visuals, product configurators, immersive backdrops.',
  },
  {
    title: 'Interface Engineering',
    desc: 'Accessible, performant React front-ends with a design system that scales across products.',
  },
];

export default function Services() {
  return (
    <section id="services" style={styles.section}>
      <div className="container">
        <p style={styles.eyebrow}>Capabilities</p>
        <h2 style={styles.heading}>What's inside the stack</h2>

        <div style={styles.grid}>
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              style={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, borderColor: 'var(--accent)' }}
            >
              <div style={styles.cardIndex}>0{i + 1}</div>
              <h3 style={styles.cardTitle}>{s.title}</h3>
              <p style={styles.cardDesc}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: '80px 0 160px',
  },
  eyebrow: {
    color: 'var(--accent)',
    fontSize: 13,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    fontWeight: 600,
    marginBottom: 12,
  },
  heading: {
    fontSize: 'clamp(28px, 5vw, 44px)',
    marginBottom: 56,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 24,
  },
  card: {
    padding: '36px 28px',
    border: '1px solid var(--border)',
    borderRadius: 16,
    background: 'var(--bg-elevated)',
    cursor: 'default',
  },
  cardIndex: {
    fontFamily: 'var(--font-display)',
    color: 'var(--fg-muted)',
    fontSize: 13,
    marginBottom: 24,
  },
  cardTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  cardDesc: {
    color: 'var(--fg-muted)',
    fontSize: 14.5,
    lineHeight: 1.6,
  },
};
