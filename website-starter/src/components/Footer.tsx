export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.inner}>
        <span>&copy; {new Date().getFullYear()} Studio.</span>
        <span style={styles.muted}>Built with React, Framer Motion, GSAP &amp; Three.js</span>
      </div>
    </footer>
  );
}

const styles: Record<string, React.CSSProperties> = {
  footer: {
    borderTop: '1px solid var(--border)',
    padding: '28px 0',
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 12,
    fontSize: 13,
    color: 'var(--fg-muted)',
  },
  muted: {
    color: 'var(--fg-muted)',
  },
};
