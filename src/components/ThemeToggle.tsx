'use client';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggle}
      aria-label="Toggle theme"
      whileTap={{ scale: 0.9 }}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{
        position: 'relative',
        width: 44, height: 24,
        borderRadius: 12,
        background: isDark ? 'rgba(212,168,83,0.15)' : 'rgba(14,30,74,0.12)',
        border: isDark ? '1px solid rgba(212,168,83,0.3)' : '1px solid rgba(14,30,74,0.2)',
        cursor: 'pointer',
        padding: 0,
        transition: 'background 0.3s, border-color 0.3s',
        flexShrink: 0,
      }}
    >
      {/* Track icons */}
      <span style={{
        position: 'absolute', left: 5, top: '50%', transform: 'translateY(-50%)',
        fontSize: 10, opacity: isDark ? 0.5 : 0, transition: 'opacity 0.3s',
        pointerEvents: 'none',
      }}>🌙</span>
      <span style={{
        position: 'absolute', right: 5, top: '50%', transform: 'translateY(-50%)',
        fontSize: 10, opacity: isDark ? 0 : 0.7, transition: 'opacity 0.3s',
        pointerEvents: 'none',
      }}>☀️</span>
      {/* Thumb */}
      <motion.span
        layout
        animate={{ x: isDark ? 2 : 22 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        style={{
          position: 'absolute', top: 3,
          width: 18, height: 18, borderRadius: '50%',
          background: isDark
            ? 'linear-gradient(135deg, #a07828, #d4a853)'
            : 'linear-gradient(135deg, #0e1e4a, #1e3a8a)',
          boxShadow: isDark
            ? '0 0 8px rgba(212,168,83,0.5)'
            : '0 0 8px rgba(14,30,74,0.3)',
        }}
      />
    </motion.button>
  );
}
