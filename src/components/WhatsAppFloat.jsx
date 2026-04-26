import { motion } from 'framer-motion';

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/6281324456440?text=Halo%20JayFarm,%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20produk%20bebek%20Anda."
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg"
      style={{ background: 'linear-gradient(135deg,#25d366,#128c7e)', boxShadow: '0 4px 20px rgba(37,211,102,.4)' }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      aria-label="Chat via WhatsApp"
    >
      💬
      <span className="absolute right-16 bg-gray-900 text-white text-xs font-semibold px-3 py-2 rounded-sm whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 after:content-[''] after:absolute after:left-full after:top-1/2 after:-translate-y-1/2 after:border-4 after:border-transparent after:border-l-gray-900">
        Chat via WhatsApp
      </span>
    </motion.a>
  );
}
