'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const op = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section ref={ref} id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'var(--bg)' }}>

      {/* Background elements */}
      <div className="blob-violet" style={{ position: 'absolute', top: '-10%', right: '0%', width: 800, height: 800, pointerEvents: 'none', zIndex: 0, opacity: 0.7 }} />
      <div className="blob-cyan" style={{ position: 'absolute', bottom: '5%', left: '-5%', width: 450, height: 450, pointerEvents: 'none', zIndex: 0, opacity: 0.5 }} />
      {/* Subtle dot grid */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'radial-gradient(rgba(129,140,248,0.18) 1px, transparent 1px)',
        backgroundSize: '40px 40px', pointerEvents: 'none', opacity: 0.4 }} />

      <motion.div style={{ y, opacity: op, position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '2rem 2rem 0',
          display: 'grid', gridTemplateColumns: '55% 45%', gap: '2rem', alignItems: 'center' }}
          className="hero-grid">

          {/* ── Left: Text ─────────────────────────── */}
          <div>
            {/* Available badge */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(34,211,238,0.07)', border: '1px solid rgba(34,211,238,0.2)',
                borderRadius: 100, padding: '0.35rem 1rem', marginBottom: '2rem' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22d3ee', display: 'inline-block',
                boxShadow: '0 0 8px #22d3ee', animation: 'pulse-glow 2s infinite' }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: '#22d3ee', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Open to Work · Freelance Available
              </span>
            </motion.div>

            {/* Name */}
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
              style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(0.85rem,1.2vw,1rem)',
                fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase',
                color: 'rgba(129,140,248,0.7)', marginBottom: '0.6rem' }}>
              Maturi Hemanth
            </motion.p>

            <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22,1,0.36,1] }}
              style={{ fontFamily: "'Syne', sans-serif",
                fontSize: 'clamp(3rem,5.5vw,5.5rem)', fontWeight: 800,
                lineHeight: 1.0, marginBottom: '1rem', color: 'var(--text)' }}>
              Video Editor<br />&amp; <span className="grad-full">Graphic</span><br />Designer
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
              style={{ fontSize: 'clamp(0.95rem,1.5vw,1.05rem)', color: 'var(--muted)',
                marginBottom: '2.5rem', lineHeight: 1.8, maxWidth: 500 }}>
              Crafting cinematic reels, brand visuals, and scroll-stopping content
              for real estate and lifestyle brands. Currently at <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Property Edge Pvt. Ltd.</strong>
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <button onClick={() => scrollTo('#videos')}
                style={{ padding: '0.9rem 2rem', borderRadius: 10,
                  background: 'linear-gradient(135deg, #6366f1, #818cf8)',
                  border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 600, color: '#fff',
                  boxShadow: '0 8px 30px rgba(99,102,241,0.4)', transition: 'transform 0.2s, box-shadow 0.2s',
                  display: 'flex', alignItems: 'center', gap: 8 }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 14px 40px rgba(99,102,241,0.55)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(99,102,241,0.4)'; }}>
                ▶ Watch Showreel
              </button>
              <button onClick={() => scrollTo('#contact')}
                style={{ padding: '0.9rem 2rem', borderRadius: 10,
                  background: 'transparent', border: '1px solid rgba(129,140,248,0.3)',
                  cursor: 'pointer', fontSize: 14, fontWeight: 500, color: 'rgba(241,245,249,0.8)',
                  transition: 'all 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(129,140,248,0.7)'; (e.currentTarget as HTMLElement).style.color = '#818cf8'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(129,140,248,0.3)'; (e.currentTarget as HTMLElement).style.color = 'rgba(241,245,249,0.8)'; }}>
                Hire Me →
              </button>
              <button onClick={() => scrollTo('#portfolio')}
                style={{ padding: '0.9rem 2rem', borderRadius: 10,
                  background: 'transparent', border: '1px solid rgba(34,211,238,0.2)',
                  cursor: 'pointer', fontSize: 14, fontWeight: 500, color: 'rgba(34,211,238,0.7)',
                  transition: 'all 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(34,211,238,0.6)'; (e.currentTarget as HTMLElement).style.color = '#22d3ee'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(34,211,238,0.2)'; (e.currentTarget as HTMLElement).style.color = 'rgba(34,211,238,0.7)'; }}>
                View Portfolio
              </button>
            </motion.div>

            {/* Stats strip */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
              style={{ display: 'flex', gap: '2.5rem', paddingTop: '2rem',
                borderTop: '1px solid rgba(99,102,241,0.1)', flexWrap: 'wrap' }}>
              {[
                { n: '26', l: 'Videos Produced' },
                { n: '1+', l: 'Year Experience' },
                { n: '50+', l: 'Design Projects' },
              ].map(s => (
                <div key={s.l}>
                  <div style={{ fontFamily: "'Syne', sans-serif",
                    fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 800,
                    background: 'linear-gradient(135deg,#6366f1,#818cf8,#22d3ee)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.n}</div>
                  <div style={{ fontSize: 11, color: 'var(--muted2)', letterSpacing: '0.08em',
                    textTransform: 'uppercase', marginTop: 3 }}>{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Portrait ─────────────────────── */}
          <motion.div initial={{ opacity: 0, scale: 0.9, x: 30 }} animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.22,1,0.36,1] }}
            style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
            className="hero-portrait">

            {/* Glow ring */}
            <div style={{ position: 'absolute', inset: 0, borderRadius: '40px',
              background: 'radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.25) 0%, transparent 70%)',
              filter: 'blur(30px)', zIndex: 0 }} />

            {/* Photo frame */}
            <div style={{ position: 'relative', zIndex: 1, width: '88%', maxWidth: 420,
              aspectRatio: '3/4', borderRadius: 32, overflow: 'hidden',
              border: '1px solid rgba(99,102,241,0.2)',
              boxShadow: '0 50px 100px rgba(0,0,0,0.55), 0 0 60px rgba(99,102,241,0.12)' }}>
              <Image src="/IMG_0246.JPG" alt="Maturi Hemanth — Professional Portrait" fill priority
                style={{ objectFit: 'cover', objectPosition: 'center top' }} sizes="420px" />
              {/* Bottom gradient */}
              <div style={{ position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(7,7,26,0.6) 0%, rgba(7,7,26,0.1) 40%, transparent 70%)' }} />
              {/* Name label on photo */}
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem' }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 800, color: '#fff' }}>Maturi Hemanth</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>Graphic Designer &amp; Video Editor</div>
              </div>
            </div>

            {/* Floating company card */}
            <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ position: 'absolute', top: '12%', left: '-10%',
                background: 'rgba(12,12,36,0.92)', backdropFilter: 'blur(20px)',
                border: '1px solid rgba(99,102,241,0.25)', borderRadius: 14,
                padding: '0.85rem 1.2rem', boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                minWidth: 160 }}>
              <div style={{ fontSize: 10, color: 'var(--muted2)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>Currently Working</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#818cf8', marginBottom: 2 }}>Property Edge Pvt. Ltd.</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22d3ee', flexShrink: 0 }} />
                <span style={{ fontSize: 11, color: 'var(--muted)' }}>Video Editor &amp; Designer</span>
              </div>
            </motion.div>

            {/* Floating tools card */}
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              style={{ position: 'absolute', bottom: '15%', right: '-8%',
                background: 'rgba(12,12,36,0.92)', backdropFilter: 'blur(20px)',
                border: '1px solid rgba(34,211,238,0.2)', borderRadius: 14,
                padding: '0.85rem 1.2rem', boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
                minWidth: 140 }}>
              <div style={{ fontSize: 10, color: 'var(--muted2)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>Tools</div>
              {['🎬 Premiere Pro', '🖼 Photoshop', '✨ After Effects'].map(t => (
                <div key={t} style={{ fontSize: 11, color: '#22d3ee', marginBottom: 3, fontWeight: 500 }}>{t}</div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, zIndex: 2, cursor: 'pointer' }}
        onClick={() => scrollTo('#videos')}>
        <span style={{ fontSize: 10, color: 'var(--muted2)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll to explore</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, rgba(99,102,241,0.8), transparent)' }} />
      </motion.div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid { grid-template-columns: 1fr !important; padding-top: 7rem !important; gap: 3rem !important; }
          .hero-portrait { max-width: 320px !important; margin: 0 auto !important; }
        }
        @keyframes pulse-glow { 0%,100%{opacity:0.7;transform:scale(1)} 50%{opacity:1;transform:scale(1.15)} }
      `}</style>
    </section>
  );
}

