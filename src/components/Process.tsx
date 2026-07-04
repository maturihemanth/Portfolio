'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  { num: '01', title: 'Discover',       desc: 'Deep-dive brief - understanding your brand, audience, goals, and creative vision.' },
  { num: '02', title: 'Research',       desc: 'Analysing competitors, current trends, and references to find the creative edge.' },
  { num: '03', title: 'Concept',        desc: 'Generating bold ideas - moodboards, rough cuts, and visual directions.' },
  { num: '04', title: 'Design & Edit',  desc: 'Crafting high-fidelity visuals and editing sequences with meticulous detail.' },
  { num: '05', title: 'Feedback',       desc: 'Collaborative review rounds to refine and perfect every element.' },
  { num: '06', title: 'Final Delivery', desc: 'Production-ready files delivered in all required formats, on time.' },
];

const colors = ['#a07828','#d4a853','#e8c47a','#d4a853','#a07828','#e8c47a'];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="process" ref={ref} style={{ padding: '8rem 2rem', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div className="blob-violet" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 600, pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <div className="section-label">How I Work</div>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: 'var(--text)', marginBottom: '4rem', lineHeight: 1.15 }}>
          My Creative <span className="grad-full">Process</span>
        </motion.h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', position: 'relative' }} className="process-grid">
          {steps.map((s, i) => (
            <motion.div key={s.num}
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * i, ease: [0.22,1,0.36,1] }}
              whileHover={{ borderColor: `${colors[i]}40`, transition: { duration: 0.2 } }}
              style={{ padding: '2rem', borderRadius: 20,
                background: 'rgba(28,28,28,0.5)', border: '1px solid var(--border)', position: 'relative' }}>
              {/* Number */}
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 52, fontWeight: 800, lineHeight: 1, marginBottom: '1rem',
                background: `linear-gradient(135deg, ${colors[i]}25, ${colors[i]}08)`,
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.num}</div>
              <div style={{ width: 32, height: 2, borderRadius: 2, background: colors[i], marginBottom: '1rem', opacity: 0.6 }} />
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 700, color: 'var(--text)', marginBottom: '0.65rem' }}>{s.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--muted)' }}>{s.desc}</p>
              {i % 3 !== 2 && (
                <div style={{ position: 'absolute', right: -20, top: '50%', transform: 'translateY(-50%)',
                  color: 'rgba(212,168,83,0.25)', fontSize: 18, zIndex: 2 }} className="process-arrow">→</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){.process-grid{grid-template-columns:1fr 1fr!important}.process-arrow{display:none!important}}
        @media(max-width:580px){.process-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}

