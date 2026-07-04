'use client';
import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const videoCategories = ['All', 'Real Estate Reels', 'Property Tours', 'Investment Content', 'Client Reels'];

const videos = [
  // A Roll – Hero/feature content
  { id: 1, title: '90 Seconds to Fall in Love with a Flat', cat: 'Property Tours', src: '/videos/90 seconds to fall in love with a flat.mp4', desc: 'Cinematic property showcase reel for a residential flat — fast-paced cuts, lifestyle b-roll, and compelling narrative.', duration: '~90s', featured: true },
  { id: 2, title: 'Buying a Home vs Investing in a Home', cat: 'Investment Content', src: '/videos/Buying a home and Investing a home.mp4', desc: 'Educational explainer video comparing buyer motivations — clean text animations and engaging voiceover pacing.', duration: 'Full', featured: true },
  { id: 3, title: 'Durga Anna — Personal Reel', cat: 'Client Reels', src: '/videos/Durga Anna Reel.mp4', desc: 'High-energy personal brand reel with dynamic cuts, colour grading, and motion typography.', duration: 'Reel', featured: true },
  { id: 4, title: 'KK Reel', cat: 'Client Reels', src: '/videos/KK Reel.mp4', desc: 'Client testimonial and lifestyle reel crafted for social media engagement.', duration: 'Reel', featured: false },
  { id: 5, title: 'KK v2', cat: 'Client Reels', src: '/videos/kk(2)1.0.mp4', desc: 'Revised version of the KK reel with updated pacing and enhanced colour work.', duration: 'Reel', featured: false },
  { id: 6, title: 'Lokesh Anna — Personal Reel', cat: 'Client Reels', src: '/videos/Lokesh Anna Reel.mp4', desc: 'Dynamic personal reel with trend-aligned transitions and audio sync.', duration: 'Reel', featured: false },
  { id: 7, title: 'Two Types of Buyers', cat: 'Investment Content', src: '/videos/Two types of Buyers.mp4', desc: 'Engaging short-form content breaking down buyer psychology for real estate marketing.', duration: 'Short', featured: true },

  // B Roll – Supporting/property content
  { id: 8, title: 'Banjara Hills Auction — City Lights', cat: 'Real Estate Reels', src: '/videos/Banjara Hills Auction_CityLights.mp4', desc: 'Luxury Banjara Hills property auction reel with premium night-time city aesthetics.', duration: 'Reel', featured: true },
  { id: 9, title: 'Believe Every Home Deserves', cat: 'Real Estate Reels', src: '/videos/believe every home deserves.mp4', desc: 'Brand philosophy reel for Property Edge — warm storytelling and aspirational messaging.', duration: 'Short', featured: false },
  { id: 10, title: 'Budvel Layout', cat: 'Property Tours', src: '/videos/Budvel  layout. -_1.mp4', desc: 'Comprehensive layout showcase for the Budvel residential development with aerial-style edits.', duration: 'Full', featured: true },
  { id: 11, title: 'Budvel Part 1', cat: 'Property Tours', src: '/videos/Budvel part 1.mp4', desc: 'First installment of the Budvel property series — plot previews and location highlights.', duration: 'Part 1', featured: false },
  { id: 12, title: 'Hyderabad Series — Day 10', cat: 'Real Estate Reels', src: '/videos/Day 10 Hyd Series.mp4', desc: 'Part of a daily Hyderabad real estate content series — market updates with polished motion graphics.', duration: 'Series', featured: false },
  { id: 13, title: 'Hyderabad Series — Day 12', cat: 'Real Estate Reels', src: '/videos/Day 12 Hyd series_.mp4', desc: 'Day 12 of the Hyd Series — consistent branding, smooth transitions, and clear delivery.', duration: 'Series', featured: false },
  { id: 14, title: 'Fablehause', cat: 'Property Tours', src: '/videos/fablehause. .mp4', desc: 'Boutique property showcase for Fablehause — luxury feel with attention to architectural details.', duration: 'Reel', featured: true },
  { id: 15, title: 'Govt Free Lands', cat: 'Investment Content', src: '/videos/Govt Free Lands_1.mp4', desc: 'Informational content on government land schemes — clear visual explainers and call-to-action.', duration: 'Full', featured: false },
  { id: 16, title: 'Hare Krishna Heritage Tower', cat: 'Real Estate Reels', src: '/videos/Hare Krishna Heritage Tower.mp4', desc: 'Premium heritage tower property video — dramatic reveals, elegant pacing, luxury positioning.', duration: 'Full', featured: true },
  { id: 17, title: 'High Rise Investment', cat: 'Investment Content', src: '/videos/HIGH RISE INV.mp4', desc: 'Persuasive investment pitch reel for high-rise properties — data-driven visuals with strong CTA.', duration: 'Full', featured: false },
  { id: 18, title: 'Hyderabad Investment Villa', cat: 'Investment Content', src: '/videos/Hyd Investment_Villa_2.mp4', desc: 'Villa investment showcase combining aerial views, interior walkthroughs, and price breakdowns.', duration: 'Full', featured: false },
  { id: 19, title: 'Invest or Wait?', cat: 'Investment Content', src: '/videos/inverst or wait. .mp4', desc: 'Thought-leadership short answering the key question every buyer asks — punchy edits and bold text.', duration: 'Short', featured: false },
  { id: 20, title: 'Jewellery Brand Reel', cat: 'Client Reels', src: '/videos/Jewellery.MOV', desc: 'Elegant product reel for a jewellery brand — macro shots, shimmer effects, and luxury visual language.', duration: 'Reel', featured: true },
  { id: 21, title: 'Oorjitha Villa', cat: 'Property Tours', src: '/videos/Oorjitha villa .mp4', desc: 'Flagship villa showcase — cinematic walkthroughs, lifestyle b-roll, and premium colour grade.', duration: 'Full', featured: true },
  { id: 22, title: 'Public, Semi-Private & Private Zones', cat: 'Property Tours', src: '/videos/Public, Semi-Private, and Private Zones.mp4', desc: 'Educational property design explainer covering zone planning in modern residential developments.', duration: 'Full', featured: false },
  { id: 23, title: 'SAS Teaser', cat: 'Real Estate Reels', src: '/videos/SAS Teaser .mp4', desc: 'High-energy teaser for the SAS project — rapid cuts, motion type, and cinematic reveal moments.', duration: 'Teaser', featured: true },
  { id: 24, title: 'Sequence 02', cat: 'Real Estate Reels', src: '/videos/Sequence 02.mp4', desc: 'Creative sequence edit showcasing editing technique — smooth scene transitions and visual flow.', duration: 'Edit', featured: false },
  { id: 25, title: 'Sequence 08', cat: 'Real Estate Reels', src: '/videos/Sequence 08_2.mp4', desc: 'Second edit in the sequence series — polished colour work and impactful pacing.', duration: 'Edit', featured: false },
  { id: 26, title: 'MH & MV Project', cat: 'Property Tours', src: '/videos/MH & MV__.mp4', desc: 'Dual-property showcase combining MH and MV developments — cohesive narrative and brand consistency.', duration: 'Full', featured: true },
];

type Video = typeof videos[0];

function VideoCard({ video, onClick }: { video: Video; onClick: () => void }) {
  const vRef = useRef<HTMLVideoElement>(null);
  return (
    <motion.div
      whileHover="hover" onClick={onClick}
      style={{ borderRadius: 16, overflow: 'hidden', cursor: 'pointer', position: 'relative',
        background: 'var(--bg3)', border: '1px solid var(--border)',
        transition: 'border-color 0.3s' }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(99,102,241,0.3)';
        vRef.current?.play().catch(() => {});
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
        if (vRef.current) { vRef.current.pause(); vRef.current.currentTime = 0; }
      }}>
      {/* Video preview */}
      <div style={{ position: 'relative', aspectRatio: '16/9', background: 'var(--bg3)' }}>
        <video ref={vRef} src={video.src} muted playsInline preload="metadata"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        {/* Overlay */}
        <div style={{ position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(7,7,26,0.9) 0%, rgba(7,7,26,0.3) 50%, transparent 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <motion.div variants={{ hover: { scale: 1.1, opacity: 1 } }} initial={{ opacity: 0.8 }}
            style={{ width: 52, height: 52, borderRadius: '50%',
              background: 'rgba(99,102,241,0.85)', backdropFilter: 'blur(8px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 30px rgba(99,102,241,0.5)' }}>
            <span style={{ fontSize: 18, marginLeft: 3 }}>▶</span>
          </motion.div>
        </div>
        {/* Featured badge */}
        {video.featured && (
          <div style={{ position: 'absolute', top: 10, left: 10,
            background: 'linear-gradient(135deg,#6366f1,#818cf8)',
            borderRadius: 100, padding: '0.2rem 0.6rem',
            fontSize: 10, fontWeight: 600, color: '#fff', letterSpacing: '0.06em' }}>Featured</div>
        )}
        <div style={{ position: 'absolute', top: 10, right: 10,
          background: 'rgba(0,0,0,0.6)', borderRadius: 6, padding: '0.2rem 0.5rem',
          fontSize: 10, color: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(8px)' }}>
          {video.duration}
        </div>
      </div>
      {/* Info */}
      <div style={{ padding: '1rem 1.1rem 1.25rem' }}>
        <div style={{ fontSize: 10, fontWeight: 600, color: '#818cf8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>{video.cat}</div>
        <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 4, lineHeight: 1.3 }} className="line-clamp-2">{video.title}</h3>
        <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.5 }} className="line-clamp-2">{video.desc}</p>
      </div>
    </motion.div>
  );
}

function VideoModal({ video, onClose }: { video: Video; onClose: () => void }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, zIndex: 3000, background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(20px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <motion.div initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.88, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22,1,0.36,1] }} onClick={e => e.stopPropagation()}
        style={{ width: '100%', maxWidth: 1000,
          background: 'var(--bg2)', border: '1px solid var(--border2)', borderRadius: 24, overflow: 'hidden',
          boxShadow: '0 40px 100px rgba(0,0,0,0.9), 0 0 80px rgba(99,102,241,0.15)' }}>
        <div style={{ position: 'relative', aspectRatio: '16/9', background: '#000' }}>
          <video src={video.src} controls autoPlay muted
            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
          <button onClick={onClose}
            style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(0,0,0,0.6)', border: 'none', cursor: 'pointer',
              width: 36, height: 36, borderRadius: '50%', color: '#fff', fontSize: 18,
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
        </div>
        <div style={{ padding: '1.5rem 2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span style={{ fontSize: 11, fontWeight: 600, color: '#818cf8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{video.cat}</span>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(1.2rem,2.5vw,1.6rem)', fontWeight: 800, color: 'var(--text)', marginTop: 4 }}>{video.title}</h3>
            </div>
            <span style={{ padding: '0.3rem 0.9rem', borderRadius: 100, background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', fontSize: 12, color: '#818cf8' }}>{video.duration}</span>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--muted)', marginTop: '0.75rem' }}>{video.desc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function VideoShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState<Video | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filtered = filter === 'All' ? videos : videos.filter(v => v.cat === filter);
  const displayed = showAll ? filtered : filtered.slice(0, 9);

  return (
    <section id="videos" ref={ref} style={{ padding: '8rem 2rem', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div className="blob-cyan" style={{ position: 'absolute', top: '5%', right: '-5%', width: 600, height: 600, pointerEvents: 'none' }} />
      <div className="blob-violet" style={{ position: 'absolute', bottom: '10%', left: '-5%', width: 400, height: 400, pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <div className="section-label">Video Work</div>
        </motion.div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem' }}>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: 'var(--text)', lineHeight: 1.15 }}>
            My <span className="grad-full">Video Work</span><br />26 Productions — Real Impact.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}
            style={{ fontSize: 14, color: 'var(--muted)', maxWidth: 360, lineHeight: 1.7 }}>
            Hover to preview. Click to watch full screen. All videos produced for Property Edge Pvt. Ltd. and direct clients.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
          style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {videoCategories.map(c => (
            <button key={c} onClick={() => { setFilter(c); setShowAll(false); }}
              style={{ padding: '0.4rem 1rem', borderRadius: 100, fontSize: 12, fontWeight: 500, cursor: 'pointer',
                border: `1px solid ${filter === c ? 'rgba(99,102,241,0.5)' : 'var(--border)'}`,
                background: filter === c ? 'rgba(99,102,241,0.12)' : 'transparent',
                color: filter === c ? '#818cf8' : 'var(--muted)', transition: 'all 0.2s' }}>{c}</button>
          ))}
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem' }} className="videos-grid">
          <AnimatePresence mode="popLayout">
            {displayed.map((v, i) => (
              <motion.div key={v.id}
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}>
                <VideoCard video={v} onClick={() => setSelected(v)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show more / less */}
        {filtered.length > 9 && (
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}
            style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
            <button onClick={() => setShowAll(v => !v)}
              style={{ padding: '0.85rem 2.5rem', borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: 'pointer',
                background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.25)',
                color: '#818cf8', transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(99,102,241,0.16)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(99,102,241,0.08)'; }}>
              {showAll ? `Show Less ↑` : `Load All ${filtered.length} Videos ↓`}
            </button>
          </motion.div>
        )}
      </div>

      <AnimatePresence>{selected && <VideoModal video={selected} onClose={() => setSelected(null)} />}</AnimatePresence>

      <style>{`
        @media (max-width: 900px) { .videos-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .videos-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
