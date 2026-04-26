import { motion } from 'framer-motion';
import { FadeUpWrapper } from './ui/FadeUpWrapper';
import { SectionHeader } from './ui/SectionHeader';

const items = [
  { emoji: '🦆', label: 'Kawanan Bebek di Kandang', large: true },
  { emoji: '🌾', label: 'Area Padang Bebek',         large: false },
  { emoji: '🏠', label: 'Kandang Modern',             large: false },
  { emoji: '🌿', label: 'Pakan Alami Bebek',          large: false },
  { emoji: '🧑‍🌾', label: 'Tim Peternak JayFarm',     large: false },
  { emoji: '🍖', label: 'Produk Bebek Siap Kirim',   large: true },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          tag="Galeri"
          title="Sekilas Pandang JayFarm"
          description="Lihat langsung kondisi peternakan dan fasilitas produksi kami yang modern dan higienis."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <FadeUpWrapper
              key={item.label}
              delay={i * 0.06}
              className={item.large ? 'col-span-2' : ''}
            >
              <motion.div
                className="rounded-md overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <div
                  className={`flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-green-100 to-[#c8e6ca] ${
                    item.large ? 'aspect-video text-5xl' : 'aspect-square text-4xl'
                  }`}
                >
                  {item.emoji}
                  <p className="text-sm text-gray-600 font-medium">{item.label}</p>
                </div>
              </motion.div>
            </FadeUpWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
