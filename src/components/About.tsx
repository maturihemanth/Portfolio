'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { getAssetPath } from '@/lib/paths';

const f = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} style={{ padding: '8rem 2rem', background: 'var(--bg2)', position: 'relative', overflow: 'hidden' }}>
      <div className="blob-violet" style={{ position: 'absolute', top: '-20%', right: '-10%', width: 600, height: 600, pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div variants={f} initial="hidden" animate={inView ? 'show' : 'hidden'} transition={{ duration: 0.5 }}>
          <div className="section-label">About Me</div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }} className="about-grid">
          {/* Photos */}
          <motion.div variants={f} initial="hidden" animate={inView ? 'show' : 'hidden'} transition={{ duration: 0.8, delay: 0.1 }}
            style={{ position: 'relative' }} className="about-photos">
            <div style={{ position: 'relative', borderRadius: 24, overflow: 'hidden',
              border: '1px solid var(--border2)', aspectRatio: '3/4', maxWidth: 380,
              boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 60px rgba(212,168,83,0.1)' }}>
              <Image src={getAssetPath('/IMG_0246.JPG')} alt="Hemanth - Professional" fill style={{ objectFit: 'cover' }} sizes="380px" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,0.4) 0%, transparent 60%)' }} />
            </div>
            <motion.div animate={{ y: [0,-6,0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              style={{ position: 'absolute', bottom: '-2rem', right: '-1rem',
                width: 155, height: 175, borderRadius: 18, overflow: 'hidden',
                border: '2px solid rgba(212,168,83,0.3)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 30px rgba(212,168,83,0.15)' }}>
              <Image src={getAssetPath('/IMG_0849.PNG')} alt="Hemanth - Casual" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} sizes="155px" />
            </motion.div>
            {/* Accent corner */}
            <div style={{ position: 'absolute', top: -12, left: -12, width: 56, height: 56,
              border: '2px solid rgba(212,168,83,0.4)', borderRadius: 10, borderRight: 'none', borderBottom: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-3rem', left: -12, width: 40, height: 40,
              border: '2px solid rgba(232,196,122,0.3)', borderRadius: 8, borderLeft: 'none', borderTop: 'none' }} />
          </motion.div>

          {/* Text */}
          <div>
            <motion.h2 variants={f} initial="hidden" animate={inView ? 'show' : 'hidden'} transition={{ duration: 0.7, delay: 0.2 }}
              style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2.2rem,4vw,3.2rem)', fontWeight: 800, lineHeight: 1.1, color: 'var(--text)', marginBottom: '1.5rem' }}>
              Crafting visuals<br />that <span className="grad-full">speak louder</span><br />than words.
            </motion.h2>

            {[
              { d: 0.3, t: "I'm Hemanth - a results-driven creative professional with over 1 year of hands-on experience in video editing and graphic design. Trained at TAC - The Art Code Institute, I now create high-impact visual content for Property Edge Pvt. Ltd., one of Hyderabad's growing real estate brands." },
              { d: 0.4, t: "My work spans cinematic property reels, brand campaigns, Instagram content, and motion graphics - with 26 videos produced and 50+ design projects delivered." },
              { d: 0.5, t: "Proficient in Adobe Premiere Pro, Photoshop, After Effects, DaVinci Resolve and Canva, I bring creative vision and technical precision to every frame." },
            ].map((p, i) => (
              <motion.p key={i} variants={f} initial="hidden" animate={inView ? 'show' : 'hidden'} transition={{ duration: 0.6, delay: p.d }}
                style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--muted)', marginBottom: '1rem' }}>{p.t}</motion.p>
            ))}

            {/* Timeline */}
            <motion.div variants={f} initial="hidden" animate={inView ? 'show' : 'hidden'} transition={{ duration: 0.6, delay: 0.6 }}
              style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { period: '2025 - Present (1 Year)', role: 'Video Editor & Graphic Designer', company: 'Property Edge Pvt. Ltd.', current: true },
                { period: '6 Months', role: 'Design & Video Editing Trainee', company: 'TAC - The Art Code Institute', current: false },
              ].map(e => (
                <div key={e.company} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start',
                  padding: '1rem 1.25rem', borderRadius: 12,
                  background: e.current ? 'rgba(212,168,83,0.07)' : 'transparent',
                  border: `1px solid ${e.current ? 'rgba(212,168,83,0.2)' : 'var(--border)'}` }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', marginTop: 5, flexShrink: 0,
                    background: e.current ? 'linear-gradient(135deg,#a07828,#e8c47a)' : '#333',
                    boxShadow: e.current ? '0 0 10px rgba(212,168,83,0.5)' : 'none' }} />
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>{e.role}</div>
                    <div style={{ fontSize: 12, color: e.current ? '#d4a853' : 'var(--muted2)', marginTop: 2 }}>{e.company} · {e.period}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } .about-photos { max-width: 320px !important; margin: 0 auto !important; } }
      `}</style>
    </section>
  );
}

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };

