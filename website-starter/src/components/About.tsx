import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: '120+', label: 'Sites shipped' },
  { value: '60fps', label: 'Animation target' },
  { value: '3D', label: 'Native WebGL' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal-line').forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: 100, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>('.stat-card').forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} style={styles.section}>
      <div className="container">
        <div style={styles.lineWrap}>
          <h2 className="reveal-line" style={styles.heading}>
            Every scroll, hover, and transition
          </h2>
        </div>
        <div style={styles.lineWrap}>
          <h2 className="reveal-line" style={{ ...styles.heading, color: 'var(--fg-muted)' }}>
            is choreographed, not decorative.
          </h2>
        </div>

        <div style={styles.statsGrid}>
          {STATS.map((s) => (
            <div key={s.label} className="stat-card" style={styles.statCard}>
              <div style={styles.statValue}>{s.value}</div>
              <div style={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: '160px 0',
  },
  lineWrap: {
    overflow: 'hidden',
  },
  heading: {
    fontSize: 'clamp(28px, 5vw, 52px)',
    marginBottom: 6,
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 24,
    marginTop: 80,
  },
  statCard: {
    padding: '32px 28px',
    border: '1px solid var(--border)',
    borderRadius: 16,
    background: 'var(--bg-elevated)',
  },
  statValue: {
    fontFamily: 'var(--font-display)',
    fontSize: 40,
    color: 'var(--accent)',
    fontWeight: 700,
  },
  statLabel: {
    marginTop: 8,
    color: 'var(--fg-muted)',
    fontSize: 14,
  },
};
