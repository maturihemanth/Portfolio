'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  { icon: '◈', title: 'Graphic Design', desc: 'Posters, banners, social media creatives, and promotional materials built on strong visual hierarchy.', tags: ['Photoshop', 'Illustrator'], color: '#6366f1' },
  { icon: '▶', title: 'Video Editing', desc: 'Cinematic reels, YouTube Shorts, brand films and promotional videos with smooth cuts and dynamic pacing.', tags: ['Premiere Pro', 'DaVinci Resolve'], color: '#818cf8' },
  { icon: '✦', title: 'Motion Graphics', desc: 'Animated titles, transitions, logo reveals, and visual effects that breathe life into any content.', tags: ['After Effects'], color: '#22d3ee' },
  { icon: '⬡', title: 'Social Media Design', desc: 'Platform-optimised creatives for Instagram, YouTube, and Facebook — built to stop the scroll.', tags: ['Photoshop', 'Canva'], color: '#818cf8' },
  { icon: '◉', title: 'Branding & Identity', desc: 'Visual identity systems — logos, colour palettes, typography, and brand guidelines for cohesive storytelling.', tags: ['Illustrator', 'Photoshop'], color: '#6366f1' },
  { icon: '⬕', title: 'Real Estate Content', desc: 'Property videos, promotional listings, virtual tour visuals, and marketing materials for real estate brands.', tags: ['Premiere Pro', 'Photoshop'], color: '#22d3ee' },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" ref={ref} style={{ padding: '8rem 2rem', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div className="blob-cyan" style={{ position: 'absolute', bottom: '0', left: '20%', width: 500, height: 400, pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <div className="section-label">Services</div>
        </motion.div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3.5rem' }}>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: 'var(--text)', lineHeight: 1.15 }}>
            What I bring to<br /><span className="grad-full">every project</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}
            style={{ fontSize: 15, color: 'var(--muted)', maxWidth: 360, lineHeight: 1.7 }}>
            From concept to final delivery — creative services designed to elevate your brand.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem' }} className="services-grid">
          {services.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * i, ease: [0.22,1,0.36,1] }}
              whileHover={{ y: -6 }}
              style={{ padding: '2rem', borderRadius: 20, cursor: 'default',
                background: 'rgba(19,19,48,0.5)', border: '1px solid var(--border)',
                transition: 'border-color 0.3s, box-shadow 0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${s.color}33`; (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 40px ${s.color}10`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, marginBottom: '1.5rem',
                background: `${s.color}12`, border: `1px solid ${s.color}25`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, color: s.color }}>
                {s.icon}
              </div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: '0.7rem' }}>{s.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--muted)', marginBottom: '1.5rem' }}>{s.desc}</p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {s.tags.map(t => (
                  <span key={t} style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
                    padding: '0.2rem 0.6rem', borderRadius: 100,
                    background: `${s.color}0d`, color: s.color, border: `1px solid ${s.color}20` }}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .services-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 580px) { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

