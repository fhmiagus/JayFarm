import { motion } from 'framer-motion';
import { FadeUpWrapper } from './ui/FadeUpWrapper';
import { SectionHeader } from './ui/SectionHeader';
import { processSteps } from '../data/processSteps';

export default function Process() {
  return (
    <section id="process" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          tag="Cara Kerja Kami"
          title="Proses dari Kandang ke Meja Makan"
          description="Kami memastikan standar kualitas di setiap tahap proses produksi kami."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {processSteps.map((step, i) => (
            <FadeUpWrapper key={step.id} delay={i * 0.08}>
              <motion.div
                className="relative bg-green-50 border border-green-100 rounded-lg p-8 pt-10"
                whileHover={{ y: -4, boxShadow: '0 8px 32px rgba(0,0,0,.14)', backgroundColor: '#ffffff' }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                {/* Step number badge */}
                <div className="absolute -top-4 left-7 w-9 h-9 rounded-full flex items-center justify-center text-xs font-extrabold text-white bg-gradient-to-br from-green-600 to-green-700 shadow-md">
                  {step.id}
                </div>
                <div className="text-3xl mb-4">{step.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            </FadeUpWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
