'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  { name: 'Adobe Premiere Pro',  pct: 85, icon: '🎬', cat: 'Video',  color: '#d4a853' },
  { name: 'Adobe Photoshop',     pct: 75, icon: '🖼',  cat: 'Design', color: '#a07828' },
  { name: 'Adobe After Effects', pct: 50, icon: '✨',  cat: 'Motion', color: '#e8c47a' },
  { name: 'DaVinci Resolve',     pct: 50, icon: '🎞',  cat: 'Video',  color: '#d4a853' },
  { name: 'Canva',               pct: 80, icon: '🎨',  cat: 'Design', color: '#a07828' },
  { name: 'Typography & Layout', pct: 78, icon: '📐',  cat: 'Design', color: '#e8c47a' },
];

const softSkills = ['Visual Storytelling','Brand Identity','Color Theory','Creative Direction','Social Media Strategy','Client Communication','Real Estate Marketing','Motion Design'];

function Bar({ s, i, inView }: { s: typeof skills[0]; i: number; inView: boolean }) {
  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.08 * i }} style={{ marginBottom: '1.4rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 18 }}>{s.icon}</span>
          <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--text)' }}>{s.name}</span>
          <span style={{ fontSize: 10, padding: '0.15rem 0.5rem', borderRadius: 100,
            background: `${s.color}15`, color: s.color, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.cat}</span>
        </div>
        <span style={{ fontSize: 13, fontWeight: 700, color: s.color }}>{s.pct}%</span>
      </div>
      <div style={{ height: 4, background: 'rgba(255,255,255,0.05)', borderRadius: 4, overflow: 'hidden' }}>
        <motion.div initial={{ width: 0 }} animate={inView ? { width: `${s.pct}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: 0.25 + 0.08 * i, ease: [0.22,1,0.36,1] }}
          style={{ height: '100%', borderRadius: 4, background: `linear-gradient(90deg, ${s.color}aa, ${s.color})` }} />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" ref={ref} style={{ padding: '8rem 2rem', background: 'var(--bg2)', position: 'relative' }}>
      <div className="blob-violet" style={{ position: 'absolute', bottom: '0', right: '0', width: 500, height: 500, pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <div className="section-label">Expertise</div>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: 'var(--text)', marginBottom: '3.5rem', lineHeight: 1.15 }}>
          Skills &amp; <span className="grad-full">Tools</span>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '5rem', alignItems: 'start' }} className="skills-grid">
          <div>{skills.map((s, i) => <Bar key={s.name} s={s} i={i} inView={inView} />)}</div>
          <div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}
              style={{ padding: '2rem', borderRadius: 20, background: 'rgba(28,28,28,0.6)', border: '1px solid var(--border)', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', marginBottom: '1.25rem', letterSpacing: '0.02em' }}>Core Competencies</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {softSkills.map((s, i) => (
                  <motion.span key={s} initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.35 + i * 0.05 }}
                    style={{ fontSize: 12, fontWeight: 500, padding: '0.35rem 0.85rem', borderRadius: 100,
                      background: 'rgba(212,168,83,0.07)', color: 'rgba(241,245,249,0.7)', border: '1px solid var(--border)' }}>{s}</motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}
              style={{ padding: '2rem', borderRadius: 20, background: 'rgba(212,168,83,0.05)', border: '1px solid rgba(212,168,83,0.15)' }}>
              <div className="section-label" style={{ marginBottom: '0.75rem' }}>Education</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)' }}>Diploma in Electronics Engineering</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 2 }}>&amp; Embedded Systems</div>
              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                <div className="section-label" style={{ marginBottom: '0.5rem' }}>Certification</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>Graphic Design &amp; Video Editing</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>TAC - The Art Code Institute · 6 Months</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.skills-grid{grid-template-columns:1fr!important;gap:3rem!important}}`}</style>
    </section>
  );
}

