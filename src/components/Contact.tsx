'use client';
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [status, setStatus] = useState<'idle'|'sending'|'sent'>('idle');
  const [form, setForm] = useState({ name:'', email:'', service:'', message:'' });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Build mailto link - works on all static hosts without a backend
    const subject = encodeURIComponent(
      `Portfolio Inquiry${form.service ? ` - ${form.service}` : ''}`
    );
    const body = encodeURIComponent(
      `Hi Hemanth,\n\nName: ${form.name}\nEmail: ${form.email}\nService: ${form.service || 'Not specified'}\n\nMessage:\n${form.message}\n\n- Sent via portfolio contact form`
    );
    window.open(
      `mailto:maturihemath7@gmail.com?subject=${subject}&body=${body}`,
      '_blank'
    );
    // Show success after short delay
    setTimeout(() => setStatus('sent'), 600);
  };

  const inp: React.CSSProperties = {
    width: '100%', padding: '0.9rem 1.1rem', borderRadius: 10, fontSize: 14,
    background: 'rgba(28,28,28,0.8)', border: '1px solid var(--border)',
    color: 'var(--text)', outline: 'none', fontFamily: "'DM Sans', sans-serif",
    transition: 'border-color 0.2s',
  };
  const focus = (e: React.FocusEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    (e.target.style.borderColor = 'rgba(212,168,83,0.5)');
  const blur = (e: React.FocusEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    (e.target.style.borderColor = 'var(--border)');

  return (
    <section id="contact" ref={ref} style={{ padding: '8rem 2rem', background: 'var(--bg2)', position: 'relative', overflow: 'hidden' }}>
      <div className="blob-cyan" style={{ position: 'absolute', bottom: '-10%', left: '40%', width: 600, height: 500, pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <div className="section-label">Get In Touch</div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }} className="contact-grid">
          {/* Info */}
          <div>
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
              style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 800, color: 'var(--text)', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              Let&apos;s create<br />something <span className="grad-full">remarkable</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}
              style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--muted)', marginBottom: '2.5rem' }}>
              Have a project in mind? Whether it&apos;s a brand identity, a video campaign, or social media content - I&apos;d love to hear about it.
            </motion.p>

            {[
              { icon: '📧', label: 'Email', value: 'maturihemath7@gmail.com', href: 'mailto:maturihemath7@gmail.com' },
              { icon: '📱', label: 'Phone', value: '+91 94941 71923',          href: 'tel:+919494171923' },
              { icon: '📍', label: 'Location', value: 'India',                 href: null },
            ].map((c, i) => (
              <motion.div key={c.label} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 + i * 0.1 }}
                style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                  background: 'rgba(212,168,83,0.08)', border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{c.icon}</div>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--muted2)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 2 }}>{c.label}</div>
                  {c.href
                    ? <a href={c.href} style={{ fontSize: 14, color: '#d4a853', textDecoration: 'none', fontWeight: 500 }}>{c.value}</a>
                    : <span style={{ fontSize: 14, color: 'var(--text)', fontWeight: 500 }}>{c.value}</span>}
                </div>
              </motion.div>
            ))}

            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }}
              style={{ display: 'flex', gap: 10, marginTop: '2rem' }}>
              {[
                { label: 'Instagram', icon: '📸', href: '#' },
                { label: 'LinkedIn',  icon: '💼', href: '#' },
                { label: 'YouTube',   icon: '▶',  href: '#' },
              ].map(s => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  style={{ width: 44, height: 44, borderRadius: 12,
                    background: 'rgba(28,28,28,0.8)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16,
                    textDecoration: 'none', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,168,83,0.4)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(212,168,83,0.2)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }}
            style={{ padding: '2.5rem', borderRadius: 24,
              background: 'rgba(28,28,28,0.6)', border: '1px solid var(--border)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.3)' }}>
            {status === 'sent' ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ fontSize: 48, marginBottom: '1rem',
                  background: 'linear-gradient(135deg,#a07828,#e8c47a)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>✓</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 22, fontWeight: 800, color: 'var(--text)', marginBottom: '0.75rem' }}>Message Sent!</h3>
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}>Thank you for reaching out. I&apos;ll get back to you within 24 hours.</p>
                <button onClick={() => { setStatus('idle'); setForm({ name:'', email:'', service:'', message:'' }); }}
                  style={{ marginTop: '1.5rem', padding: '0.6rem 1.4rem', borderRadius: 8, background: 'rgba(212,168,83,0.1)',
                    border: '1px solid rgba(212,168,83,0.2)', color: '#d4a853', cursor: 'pointer', fontSize: 13 }}>
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {[
                    { key: 'name', label: 'Name', placeholder: 'Your name', type: 'text' },
                    { key: 'email', label: 'Email', placeholder: 'your@email.com', type: 'email' },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted2)', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>{f.label}</label>
                      <input required type={f.type} value={(form as Record<string,string>)[f.key]}
                        onChange={e => setForm(v => ({ ...v, [f.key]: e.target.value }))}
                        placeholder={f.placeholder} style={inp} onFocus={focus} onBlur={blur} />
                    </div>
                  ))}
                </div>
                <div>
                  <label style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted2)', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Service</label>
                  <select value={form.service} onChange={e => setForm(v => ({ ...v, service: e.target.value }))}
                    style={{ ...inp, appearance: 'none' }} onFocus={focus} onBlur={blur}>
                    <option value="" style={{ background: '#0e0e0e' }}>Select a service…</option>
                    {['Graphic Design','Video Editing','Motion Graphics','Social Media Design','Branding','Real Estate Content','Other'].map(o => (
                      <option key={o} value={o.toLowerCase().replace(/ /g,'-')} style={{ background: '#0e0e0e' }}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted2)', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Message</label>
                  <textarea required rows={5} value={form.message} onChange={e => setForm(v => ({ ...v, message: e.target.value }))}
                    placeholder="Tell me about your project…" style={{ ...inp, resize: 'none' } as React.CSSProperties}
                    onFocus={focus} onBlur={blur} />
                </div>
                <button type="submit" disabled={status === 'sending'}
                  style={{ padding: '0.95rem', borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: 'pointer',
                    background: status === 'sending' ? 'rgba(212,168,83,0.4)' : 'linear-gradient(135deg,#a07828,#d4a853)',
                    border: 'none', color: '#fff', letterSpacing: '0.02em',
                    boxShadow: '0 8px 24px rgba(212,168,83,0.3)', transition: 'transform 0.2s, box-shadow 0.2s' }}
                  onMouseEnter={e => { if (status !== 'sending') { (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 14px 36px rgba(212,168,83,0.45)'; } }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(212,168,83,0.3)'; }}>
                  {status === 'sending' ? 'Sending…' : 'Send Message →'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.contact-grid{grid-template-columns:1fr!important;gap:3rem!important}}`}</style>
    </section>
  );
}

