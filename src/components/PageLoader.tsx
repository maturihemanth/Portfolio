'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          style={{
            position: 'fixed', inset: 0, zIndex: 99999,
            background: 'var(--bg, #080808)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: '1.5rem',
          }}
        >
          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: 64, height: 64, borderRadius: 16,
              background: 'linear-gradient(135deg, #a07828, #d4a853, #e8c47a)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 28, color: '#fff',
              boxShadow: '0 0 40px rgba(212,168,83,0.3)',
            }}
          >
            H
          </motion.div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            style={{
              fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 600,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'var(--muted, rgba(245,243,238,0.5))',
            }}
          >
            Maturi Hemanth
          </motion.p>

          {/* Progress bar */}
          <div style={{ width: 120, height: 2, borderRadius: 2, background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
              style={{ height: '100%', borderRadius: 2, background: 'linear-gradient(90deg, #a07828, #d4a853, #e8c47a)' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
