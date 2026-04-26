import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './ui/SectionHeader';
import { testimonials } from '../data/testimonials';

const doubled = [...testimonials, ...testimonials];

function TestimonialCard({ t }) {
  return (
    <div className="w-72 sm:w-80 flex-shrink-0 bg-white/7 border border-white/12 rounded-lg p-5 sm:p-7 backdrop-blur-sm flex flex-col">
      <div className="text-amber-400 text-sm sm:text-base mb-3">★★★★★</div>
      <p className="text-white/80 text-xs sm:text-sm leading-relaxed italic mb-5 flex-1">
        "{t.quote}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
          {t.initials}
        </div>
        <div>
          <strong className="block text-white text-xs sm:text-sm">{t.name}</strong>
          <span className="text-white/50 text-[10px] sm:text-xs">{t.role}</span>
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
      className="py-16 md:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(160deg,#1a3a1f,#22532a)' }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 mb-10 sm:mb-12">
        <SectionHeader light tag="Testimoni" title="Apa Kata Pelanggan Kami" />
      </div>

      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #1a3a1f, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #22532a, transparent)' }} />

        <motion.div
          className="flex gap-4 sm:gap-5 w-max"
          animate={{ x: paused ? undefined : ['0%', '-50%'] }}
          transition={{
            x: {
              duration: 35,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
            },
          }}
        >
          {doubled.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
