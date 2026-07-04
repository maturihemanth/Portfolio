'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '@/components/ThemeToggle';

const links = [
  { label: 'About',    href: '#about'    },
  { label: 'Work',     href: '#portfolio'},
  { label: 'Videos',   href: '#videos'   },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Process',  href: '#process'  },
  { label: 'Contact',  href: '#contact'  },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (href: string) => {
    setMenuOpen(false); setActive(href);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          padding: scrolled ? '0.8rem 2rem' : '1.4rem 2rem',
          background: scrolled ? 'rgba(8,8,8,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(160%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(212,168,83,0.12)' : '1px solid transparent',
          transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{
            width: 34, height: 34, borderRadius: 8, position: 'relative',
            background: 'linear-gradient(135deg, #a07828, #d4a853, #e8c47a)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 15, color: '#fff',
            boxShadow: '0 0 20px rgba(212,168,83,0.4)',
          }}>H</div>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, color: '#f1f5f9', letterSpacing: '0.02em' }}>Hemanth</span>
        </button>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: '0.2rem', alignItems: 'center' }} className="nav-desktop">
          {links.map(l => (
            <button key={l.href} onClick={() => go(l.href)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '0.45rem 0.85rem', borderRadius: 8,
                fontSize: 13, fontWeight: 500, letterSpacing: '0.02em',
                color: active === l.href ? '#d4a853' : 'rgba(241,245,249,0.6)',
                transition: 'color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#d4a853'; (e.currentTarget as HTMLElement).style.background = 'rgba(212,168,83,0.08)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = active === l.href ? '#d4a853' : 'rgba(241,245,249,0.6)'; (e.currentTarget as HTMLElement).style.background = 'none'; }}
            >{l.label}</button>
          ))}
          <ThemeToggle />
          <button onClick={() => go('#contact')}
            style={{
              marginLeft: '0.25rem', padding: '0.5rem 1.2rem', borderRadius: 8,
              background: 'linear-gradient(135deg, #a07828, #d4a853)',
              border: 'none', cursor: 'pointer',
              fontSize: 13, fontWeight: 600, color: '#fff', letterSpacing: '0.02em',
              boxShadow: '0 4px 20px rgba(212,168,83,0.35)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(212,168,83,0.5)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(212,168,83,0.35)'; }}
          >Hire Me</button>
        </nav>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: 5, padding: 8 }}
          className="nav-burger">
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 22, height: 2, borderRadius: 2,
              background: 'linear-gradient(90deg, #a07828, #e8c47a)',
              transform: menuOpen ? (i===0 ? 'rotate(45deg) translate(5px,5px)' : i===2 ? 'rotate(-45deg) translate(5px,-5px)' : 'scale(0)') : 'none',
              transition: 'transform 0.3s',
            }} />
          ))}
        </button>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            style={{ position: 'fixed', top: 62, left: 0, right: 0, zIndex: 999,
              background: 'rgba(8,8,8,0.97)', backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(212,168,83,0.12)',
              padding: '1.25rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
            {links.map((l, i) => (
              <motion.button key={l.href} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}
                onClick={() => go(l.href)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.9rem 0',
                  fontSize: 17, fontWeight: 500, color: 'rgba(241,245,249,0.8)', textAlign: 'left',
                  borderBottom: '1px solid rgba(212,168,83,0.08)' }}>
                {l.label}
              </motion.button>
            ))}
            <button onClick={() => go('#contact')}
              style={{ marginTop: '1rem', padding: '0.85rem', borderRadius: 10,
                background: 'linear-gradient(135deg,#a07828,#d4a853)', border: 'none', cursor: 'pointer',
                fontSize: 15, fontWeight: 600, color: '#fff' }}>
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) { .nav-desktop { display: none !important; } .nav-burger { display: flex !important; } }
        @media (min-width: 769px) { .nav-burger { display: none !important; } }
      `}</style>
    </>
  );
}
