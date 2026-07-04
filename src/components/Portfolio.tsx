'use client';
import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const categories = ['All', 'Posters', 'Branding', 'Social Media', 'Real Estate', 'Photography'];

const projects = [
  { id: 1, title: '3 Types of Buyers', category: 'Posters', desc: 'Educational infographic-style poster for real estate buyers, combining strong typography with clear visual hierarchy.', tools: ['Photoshop'], image: '/posters/3 types of buyers.  .jpg', span: 'wide' },
  { id: 2, title: 'Brand Identity Artwork', category: 'Branding', desc: 'Bold graphic design artwork blending colour theory, typography, and digital illustration techniques.', tools: ['Photoshop', 'Illustrator'], image: '/posters/Artboard 1.png', span: 'tall' },
  { id: 3, title: 'Creative Portrait Edit', category: 'Photography', desc: 'High-impact creative self-portrait with neon aesthetics and advanced compositing - showcasing Photoshop mastery.', tools: ['Photoshop'], image: '/IMG_0233.JPG', span: 'normal' },
  { id: 4, title: 'MAD Design Campaign', category: 'Social Media', desc: 'Bold social media creative combining experimental typography with vivid colour and impactful messaging.', tools: ['Photoshop'], image: '/posters/mad.jpg', span: 'normal' },
  { id: 5, title: 'NR Property Listing', category: 'Real Estate', desc: 'Clean, professional property listing creative designed for maximum readability and visual appeal.', tools: ['Photoshop', 'Premiere Pro'], image: '/posters/NR 1_1.jpg', span: 'wide' },
  { id: 6, title: 'Villa Showcase', category: 'Real Estate', desc: 'Premium villa marketing creative for Property Edge Pvt. Ltd. - blending luxury aesthetics with property highlights.', tools: ['Photoshop', 'Premiere Pro'], image: '/posters/villa 1.jpg', span: 'normal' },
  { id: 7, title: 'Cinematic Portrait', category: 'Photography', desc: 'Dramatic dark-tone portrait with gold highlights and fine detail retouching for premium brand use.', tools: ['Photoshop', 'Lightroom'], image: '/IMG_0797.JPG', span: 'tall' },
  { id: 8, title: 'Professional Headshot', category: 'Photography', desc: 'Clean professional studio-style portrait ideal for branding and corporate identity.', tools: ['Lightroom', 'Photoshop'], image: '/IMG_0246.JPG', span: 'normal' },
];

type Project = typeof projects[0];

function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(16px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <motion.div initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.88, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22,1,0.36,1] }} onClick={e => e.stopPropagation()}
        style={{ background: 'var(--bg2)', border: '1px solid var(--border2)', borderRadius: 24, overflow: 'hidden',
          width: '100%', maxWidth: 920, maxHeight: '90vh', display: 'flex', flexDirection: 'column',
          boxShadow: '0 40px 100px rgba(0,0,0,0.8), 0 0 60px rgba(212,168,83,0.15)' }}>
        <div style={{ position: 'relative', aspectRatio: '16/9', background: 'var(--bg3)' }}>
          <Image src={project.image} alt={project.title} fill style={{ objectFit: 'cover' }} sizes="920px" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,20,20,0.7) 0%, transparent 60%)' }} />
          <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 16,
            background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer',
            width: 36, height: 36, borderRadius: '50%', color: '#fff', fontSize: 18,
            display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)' }}>×</button>
        </div>
        <div style={{ padding: '2rem', overflowY: 'auto' }}>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#d4a853' }}>{project.category}</span>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, color: 'var(--text)', marginTop: 6, marginBottom: '0.75rem' }}>{project.title}</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--muted)' }}>{project.desc}</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: '1.25rem' }}>
            {project.tools.map(t => (
              <span key={t} style={{ fontSize: 12, fontWeight: 500, padding: '0.3rem 0.9rem', borderRadius: 100,
                background: 'rgba(212,168,83,0.1)', color: '#d4a853', border: '1px solid rgba(212,168,83,0.25)' }}>{t}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" ref={ref} style={{ padding: '8rem 2rem', background: 'var(--bg2)', position: 'relative' }}>
      <div className="blob-violet" style={{ position: 'absolute', top: '10%', left: '-5%', width: 500, height: 500, pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <div className="section-label">Portfolio</div>
        </motion.div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem' }}>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: 'var(--text)', lineHeight: 1.15 }}>
            Selected <span className="grad-full">Work</span>
          </motion.h2>
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
            style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {categories.map(c => (
              <button key={c} onClick={() => setFilter(c)}
                style={{ padding: '0.4rem 1rem', borderRadius: 100, fontSize: 12, fontWeight: 500, cursor: 'pointer',
                  border: `1px solid ${filter === c ? 'rgba(212,168,83,0.5)' : 'var(--border)'}`,
                  background: filter === c ? 'rgba(212,168,83,0.12)' : 'transparent',
                  color: filter === c ? '#d4a853' : 'var(--muted)', transition: 'all 0.2s' }}>{c}</button>
            ))}
          </motion.div>
        </div>

        {/* Masonry-style grid */}
        <motion.div layout style={{ columns: 3, columnGap: '1.25rem' }} className="portfolio-masonry">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div key={p.id} layout
                initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => setSelected(p)}
                style={{ position: 'relative', borderRadius: 16, overflow: 'hidden',
                  border: '1px solid var(--border)', cursor: 'pointer', background: 'var(--bg3)',
                  marginBottom: '1.25rem', breakInside: 'avoid',
                  aspectRatio: p.span === 'tall' ? '3/4' : p.span === 'wide' ? '16/9' : '4/3' }}
                whileHover="hover">
                <Image src={p.image} alt={p.title} fill style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }} sizes="400px" />
                <motion.div variants={{ hover: { opacity: 1 } }} initial={{ opacity: 0 }}
                  style={{ position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.5) 50%, transparent 100%)',
                    display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.25rem' }}>
                  <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#d4a853', marginBottom: 5 }}>{p.category}</span>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{p.title}</h3>
                  <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.5 }} className="line-clamp-2">{p.desc}</p>
                  <div style={{ display: 'flex', gap: 5, marginTop: 8 }}>
                    {p.tools.map(t => (
                      <span key={t} style={{ fontSize: 10, padding: '0.15rem 0.5rem', borderRadius: 100, background: 'rgba(212,168,83,0.2)', color: '#d4a853' }}>{t}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>{selected && <Modal project={selected} onClose={() => setSelected(null)} />}</AnimatePresence>

      <style>{`
        @media (max-width: 900px) { .portfolio-masonry { columns: 2 !important; } }
        @media (max-width: 560px) { .portfolio-masonry { columns: 1 !important; } }
      `}</style>
    </section>
  );
}

