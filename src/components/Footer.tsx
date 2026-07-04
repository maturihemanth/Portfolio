'use client';
import { motion } from 'framer-motion';

const nav = [
  { label: 'About',    href: '#about'    },
  { label: 'Work',     href: '#portfolio'},
  { label: 'Videos',   href: '#videos'   },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Process',  href: '#process'  },
  { label: 'Contact',  href: '#contact'  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '4rem 2rem 2rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }} className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{ width: 38, height: 38, borderRadius: 10,
                background: 'linear-gradient(135deg,#a07828,#d4a853,#e8c47a)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 16, color: '#fff',
                boxShadow: '0 0 20px rgba(212,168,83,0.3)' }}>H</div>
              <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 700, color: 'var(--text)' }}>Maturi Hemanth</span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--muted)', maxWidth: 320 }}>
              Graphic Designer & Video Editor crafting compelling visuals and cinematic content for brands that want to stand out.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: '1.5rem' }}>
              {[
                { label: 'Email', icon: '📧', href: 'mailto:maturihemath7@gmail.com' },
                { label: 'Phone', icon: '📱', href: 'tel:+919494171923' },
              ].map(s => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  style={{ width: 38, height: 38, borderRadius: 10, fontSize: 14,
                    background: 'rgba(28,28,28,0.8)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none',
                    transition: 'border-color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,168,83,0.4)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="section-label" style={{ marginBottom: '1.25rem' }}>Navigation</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {nav.map(l => (
                <button key={l.href} onClick={() => go(l.href)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                    fontSize: 14, color: 'var(--muted)', padding: 0, transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#d4a853'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--muted)'}>
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="section-label" style={{ marginBottom: '1.25rem' }}>Services</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Graphic Design','Video Editing','Motion Graphics','Social Media','Branding','Real Estate'].map(s => (
                <span key={s} style={{ fontSize: 14, color: 'var(--muted)' }}>{s}</span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--border)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: 13, color: 'var(--muted2)' }}>© {year} Maturi Hemanth. All rights reserved.</p>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ padding: '0.45rem 1rem', borderRadius: 8, fontSize: 12, fontWeight: 500, cursor: 'pointer',
              background: 'rgba(212,168,83,0.07)', border: '1px solid var(--border)', color: '#d4a853' }}>
            Back to top ↑
          </motion.button>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){.footer-grid{grid-template-columns:1fr 1fr!important}}
        @media(max-width:480px){.footer-grid{grid-template-columns:1fr!important}}
      `}</style>
    </footer>
  );
}

const navLinks = [
  { label: 'About',    href: '#about'    },
  { label: 'Services', href: '#services' },
  { label: 'Work',     href: '#portfolio'},
  { label: 'Skills',   href: '#skills'   },
  { label: 'Process',  href: '#process'  },
  { label: 'Contact',  href: '#contact'  },
];

