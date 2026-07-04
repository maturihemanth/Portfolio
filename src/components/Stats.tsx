'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// violet/cyan palette
const stats = [
  { value: '1+',    label: 'Year of Experience',       sub: 'Professional creative work' },
  { value: '26',    label: 'Videos Produced',           sub: 'Real estate & brand reels' },
  { value: '50+',   label: 'Design Projects',           sub: 'Posters, branding & social' },
  { value: '85%',   label: 'Premiere Pro',              sub: 'Industry-level editing' },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{ padding: '6rem 2rem', background: 'var(--bg3)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--border)' }} className="stats-grid">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                padding: '2.5rem 2rem', background: 'var(--bg3)',
                textAlign: 'center',
              }}
            >
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 800, lineHeight: 1,
                background: 'linear-gradient(135deg, #a07828 0%, #d4a853 50%, #e8c47a 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                marginBottom: '0.5rem',
              }}>
                {s.value}
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>{s.label}</div>
              <div style={{ fontSize: 12, color: 'var(--muted2)' }}>{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .stats-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 400px) { .stats-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
