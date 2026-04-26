import { motion } from 'framer-motion';
import { FadeUpWrapper } from './ui/FadeUpWrapper';
import { SectionHeader } from './ui/SectionHeader';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-28"
      style={{ background: 'linear-gradient(160deg,#1a3a1f,#22532a)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader light tag="Testimoni" title="Apa Kata Pelanggan Kami" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeUpWrapper key={t.id} delay={i * 0.1}>
              <motion.div
                className="bg-white/7 border border-white/12 rounded-lg p-9 backdrop-blur-sm flex flex-col h-full"
                whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.12)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <div className="text-amber-400 text-lg mb-5">★★★★★</div>
                <p className="text-white/80 text-sm leading-relaxed italic mb-7 flex-1">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <strong className="block text-white text-sm">{t.name}</strong>
                    <span className="text-white/60 text-xs">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            </FadeUpWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
