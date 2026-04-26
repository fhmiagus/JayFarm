import { motion } from 'framer-motion';
import { FadeUpWrapper } from './ui/FadeUpWrapper';
import { SectionHeader } from './ui/SectionHeader';
import { whyUsCards } from '../data/whyUsCards';

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-16 md:py-28"
      style={{ background: 'linear-gradient(160deg,#1a3a1f,#22532a)' }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <SectionHeader
          light
          tag="Mengapa JayFarm?"
          title="Keunggulan yang Membedakan Kami"
          description="Kami berkomitmen untuk memberikan yang terbaik dalam setiap aspek bisnis peternakan bebek kami."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {whyUsCards.map((card, i) => (
            <FadeUpWrapper key={card.id} delay={i * 0.08}>
              <motion.div
                className="bg-white/6 border border-white/10 rounded-lg p-6 sm:p-9 backdrop-blur-sm"
                whileHover={{ y: -6, backgroundColor: 'rgba(255,255,255,0.10)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <div className="text-3xl sm:text-4xl mb-4">{card.icon}</div>
                <h3 className="text-white font-bold text-base sm:text-lg mb-2">{card.title}</h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            </FadeUpWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
