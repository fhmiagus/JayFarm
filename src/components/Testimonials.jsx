import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './ui/SectionHeader';
import { testimonials } from '../data/testimonials';

const doubled = [...testimonials, ...testimonials];

function TestimonialCard({ t }) {
  return (
    <div className="w-80 flex-shrink-0 bg-white/7 border border-white/12 rounded-lg p-7 backdrop-blur-sm flex flex-col">
      <div className="text-amber-400 text-base mb-4">★★★★★</div>
      <p className="text-white/80 text-sm leading-relaxed italic mb-6 flex-1">
        "{t.quote}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
          {t.initials}
        </div>
        <div>
          <strong className="block text-white text-sm">{t.name}</strong>
          <span className="text-white/50 text-xs">{t.role}</span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      id="testimonials"
      className="py-28 overflow-hidden"
      style={{ background: 'linear-gradient(160deg,#1a3a1f,#22532a)' }}
    >
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <SectionHeader light tag="Testimoni" title="Apa Kata Pelanggan Kami" />
      </div>

      {/* Track */}
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #1a3a1f, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #22532a, transparent)' }} />

        <motion.div
          className="flex gap-5 w-max"
          animate={{ x: paused ? undefined : ['0%', '-50%'] }}
          transition={{
            x: {
              duration: 35,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
            },
          }}
          style={paused ? { animationPlayState: 'paused' } : {}}
        >
          {doubled.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
