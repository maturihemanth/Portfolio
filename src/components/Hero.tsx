'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const G  = '#d4a853';
const GL = '#e8c47a';
const GD = '#a07828';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yP = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const fO = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section ref={ref} id="hero" style={{ position:'relative', minHeight:'100vh', display:'flex', alignItems:'center', overflow:'hidden', background:'var(--bg)' }}>
      <div style={{ position:'absolute', inset:0, zIndex:0, pointerEvents:'none', backgroundImage:`radial-gradient(${G}1a 1px, transparent 1px)`, backgroundSize:'36px 36px', opacity:0.55 }} />
      <div style={{ position:'absolute', right:'-5%', top:'10%', zIndex:0, width:600, height:700, pointerEvents:'none', background:`radial-gradient(ellipse, ${G}10 0%, transparent 65%)`, filter:'blur(60px)' }} />

      <motion.div style={{ y:yP, opacity:fO, position:'relative', zIndex:1, width:'100%' }}>
        <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 2rem', display:'grid', gridTemplateColumns:'55% 45%', gap:'3rem', alignItems:'center' }} className="hero-grid">

          {/* ── LEFT: TEXT ── */}
          <div>
            <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.15 }}
              style={{ display:'inline-flex', alignItems:'center', gap:8, background:`${G}0f`, border:`1px solid ${G}30`, borderRadius:100, padding:'0.35rem 1rem', marginBottom:'2rem' }}>
              <span style={{ width:7, height:7, borderRadius:'50%', background:G, display:'inline-block', boxShadow:`0 0 8px ${G}`, animation:'pulse-glow 2s infinite' }} />
              <span style={{ fontSize:11, fontWeight:600, color:G, letterSpacing:'0.1em', textTransform:'uppercase' }}>Open to Freelance</span>
            </motion.div>

            <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.25 }}
              style={{ fontFamily:"'Syne', sans-serif", fontSize:'clamp(0.75rem,1vw,0.85rem)', fontWeight:700, letterSpacing:'0.28em', textTransform:'uppercase', color:`${G}70`, marginBottom:'0.5rem' }}>
              Maturi Hemanth
            </motion.p>

            <motion.h1 initial={{ opacity:0, y:35 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.9, delay:0.3, ease:[0.22,1,0.36,1] }}
              style={{ fontFamily:"'Syne', sans-serif", fontSize:'clamp(3rem,5.2vw,5.4rem)', fontWeight:800, lineHeight:1.0, color:'var(--text)', marginBottom:'1.25rem' }}>
              Video Editor<br />
              <span style={{ background:`linear-gradient(135deg,${GD} 0%,${G} 45%,${GL} 100%)`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>&amp; Designer</span>
            </motion.h1>

            <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.45 }}
              style={{ fontSize:'clamp(0.9rem,1.4vw,1rem)', color:'var(--muted)', lineHeight:1.8, maxWidth:500, marginBottom:'2.5rem' }}>
              Crafting cinematic reels, brand visuals, and scroll-stopping content for real estate and lifestyle brands.
              26 videos produced &middot; 50+ design projects delivered.
            </motion.p>

            <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.55 }}
              style={{ display:'flex', gap:'0.75rem', flexWrap:'wrap', marginBottom:'3rem' }}>
              <button onClick={() => go('#videos')}
                style={{ padding:'0.85rem 1.75rem', borderRadius:8, background:`linear-gradient(135deg,${GD},${G})`, border:'none', cursor:'pointer', fontSize:14, fontWeight:700, color:'#080808', letterSpacing:'0.02em', boxShadow:`0 6px 28px ${G}35`, transition:'transform 0.2s,box-shadow 0.2s', display:'flex', alignItems:'center', gap:8 }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform='translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow=`0 12px 36px ${G}50`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform='none'; (e.currentTarget as HTMLElement).style.boxShadow=`0 6px 28px ${G}35`; }}>
                ▶&nbsp;Watch Showreel
              </button>
              <button onClick={() => go('#contact')}
                style={{ padding:'0.85rem 1.75rem', borderRadius:8, background:'transparent', border:`1px solid ${G}35`, cursor:'pointer', fontSize:14, fontWeight:600, color:'var(--muted)', letterSpacing:'0.02em', transition:'all 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor=`${G}70`; (e.currentTarget as HTMLElement).style.color=G; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor=`${G}35`; (e.currentTarget as HTMLElement).style.color='var(--muted)'; }}>
                Hire Me
              </button>
              <button onClick={() => go('#portfolio')}
                style={{ padding:'0.85rem 1.75rem', borderRadius:8, background:'transparent', border:'1px solid rgba(255,255,255,0.09)', cursor:'pointer', fontSize:14, fontWeight:500, color:'var(--muted2)', transition:'all 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.2)'; (e.currentTarget as HTMLElement).style.color='var(--text)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.09)'; (e.currentTarget as HTMLElement).style.color='var(--muted2)'; }}>
                View Portfolio
              </button>
            </motion.div>

            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.85 }}
              style={{ display:'flex', gap:'2.5rem', flexWrap:'wrap', paddingTop:'2rem', borderTop:`1px solid ${G}14` }}>
              {[{n:'26',l:'Videos Produced'},{n:'1+',l:'Year Experience'},{n:'50+',l:'Design Projects'}].map(s => (
                <div key={s.l}>
                  <div style={{ fontFamily:"'Syne', sans-serif", fontSize:'clamp(1.8rem,3vw,2.4rem)', fontWeight:800, background:`linear-gradient(135deg,${GD},${G},${GL})`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>{s.n}</div>
                  <div style={{ fontSize:10, color:'var(--muted2)', letterSpacing:'0.1em', textTransform:'uppercase', marginTop:3 }}>{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: PORTRAIT + INFO (NO OVERLAP) ── */}
          <motion.div initial={{ opacity:0, x:30 }} animate={{ opacity:1, x:0 }} transition={{ duration:1.1, delay:0.35, ease:[0.22,1,0.36,1] }}
            style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'1.25rem' }} className="hero-portrait">

            {/* Photo */}
            <div style={{ position:'relative', width:'100%', maxWidth:400, aspectRatio:'3/4', borderRadius:24, overflow:'hidden', border:`1px solid ${G}1a`, boxShadow:`0 40px 80px rgba(0,0,0,0.6), 0 0 40px ${G}0c` }}>
              <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'45%', zIndex:1, background:'linear-gradient(to top, rgba(8,8,8,0.65) 0%, transparent 100%)' }} />
              <Image src="/IMG_0246.JPG" alt="Maturi Hemanth" fill priority style={{ objectFit:'cover', objectPosition:'center top' }} sizes="400px" />
            </div>

            {/* Info strip — sits BELOW the photo, zero overlap */}
            <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.8 }}
              style={{ display:'flex', gap:'0.75rem', width:'100%', maxWidth:400, flexWrap:'wrap' }}>
              <div style={{ flex:1, minWidth:150, background:'var(--bg3)', border:`1px solid ${G}15`, borderRadius:12, padding:'0.9rem 1rem' }}>
                <div style={{ fontSize:9, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--muted2)', marginBottom:5 }}>Currently At</div>
                <div style={{ fontSize:13, fontWeight:700, color:G, marginBottom:3, lineHeight:1.3 }}>Property Edge Pvt. Ltd.</div>
                <div style={{ display:'flex', alignItems:'center', gap:5 }}>
                  <span style={{ width:5, height:5, borderRadius:'50%', background:G, boxShadow:`0 0 6px ${G}`, flexShrink:0 }} />
                  <span style={{ fontSize:11, color:'var(--muted)' }}>Video Editor &amp; Graphic Designer</span>
                </div>
              </div>
              <div style={{ flex:1, minWidth:120, background:'var(--bg3)', border:`1px solid ${G}15`, borderRadius:12, padding:'0.9rem 1rem' }}>
                <div style={{ fontSize:9, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--muted2)', marginBottom:6 }}>Top Tools</div>
                {['Premiere Pro','Photoshop','After Effects'].map(t => (
                  <div key={t} style={{ fontSize:11, color:GL, marginBottom:2, fontWeight:500 }}>✓ {t}</div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.6 }}
        onClick={() => go('#videos')}
        style={{ position:'absolute', bottom:'2rem', left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:6, zIndex:2, cursor:'pointer' }}>
        <span style={{ fontSize:9, color:'var(--muted2)', letterSpacing:'0.18em', textTransform:'uppercase' }}>Scroll</span>
        <motion.div animate={{ y:[0,8,0] }} transition={{ duration:1.5, repeat:Infinity }}
          style={{ width:1, height:32, background:`linear-gradient(to bottom, ${G}80, transparent)` }} />
      </motion.div>

      <style>{`
        @media(max-width:960px){.hero-grid{grid-template-columns:1fr!important;padding-top:7rem!important;gap:2.5rem!important}.hero-portrait{max-width:340px!important;margin:0 auto!important}}
        @keyframes pulse-glow{0%,100%{opacity:0.6;transform:scale(1)}50%{opacity:1;transform:scale(1.25)}}
      `}</style>
    </section>
  );
}