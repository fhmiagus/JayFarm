import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FadeUpWrapper } from './ui/FadeUpWrapper';
import { SectionHeader } from './ui/SectionHeader';
import { products } from '../data/products';

function ProductImage({ product }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!product.imgs || product.imgs.length < 2) return;
    const timer = setInterval(() => setIdx((i) => (i + 1) % product.imgs.length), 3000);
    return () => clearInterval(timer);
  }, [product.imgs]);

  if (product.imgs) {
    return (
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <img
          src={product.imgs[idx]}
          alt={product.title}
          className="w-full h-full object-cover transition-opacity duration-500"
          key={idx}
        />
        {/* Dot indicators */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {product.imgs.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === idx ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    );
  }

  if (product.img) {
    return (
      <div className="h-56 sm:h-64 overflow-hidden">
        <img src={product.img} alt={product.title} className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`h-56 sm:h-64 flex items-center justify-center text-6xl sm:text-7xl ${
        product.featured
          ? 'bg-gradient-to-br from-green-700 to-green-600'
          : 'bg-gradient-to-br from-green-100 to-[#c8e6ca]'
      }`}
    >
      {product.emoji}
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <motion.div
      className={`bg-white rounded-lg overflow-hidden shadow-md flex flex-col border-2 transition-colors duration-300 ${
        product.featured ? 'border-green-500 shadow-lg scale-[1.02]' : 'border-transparent hover:border-green-400'
      }`}
      whileHover={{ y: -8, boxShadow: '0 16px 48px rgba(0,0,0,.18)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    >
      <ProductImage product={product} />

      <div className="p-5 sm:p-7 flex flex-col flex-1">
        <span
          className={`inline-block self-start text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-3 ${
            product.tagVariant === 'premium'
              ? 'bg-gradient-to-r from-green-600 to-green-700 text-white'
              : 'bg-amber-100 text-amber-800'
          }`}
        >
          {product.tag}
        </span>

        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{product.title}</h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-4 flex-1">{product.description}</p>

        <ul className="mb-5">
          {product.specs.map((spec) => (
            <li key={spec} className="text-xs sm:text-sm text-gray-600 py-1.5 border-b border-gray-200 last:border-0">
              {spec}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={`block text-center py-3 rounded-sm font-semibold text-sm transition-colors duration-300 ${
            product.featured
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-green-100 text-green-700 hover:bg-green-700 hover:text-white'
          }`}
        >
          Pesan Sekarang
        </a>
      </div>
    </motion.div>
  );
}

export default function Products() {
  return (
    <section id="products" className="py-16 md:py-28 bg-gray-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <SectionHeader
          tag="Produk Kami"
          title="Pilihan Bebek Segar Berkualitas"
          description="Kami menyediakan berbagai pilihan produk bebek pedaging segar yang siap memenuhi kebutuhan rumah tangga maupun bisnis kuliner Anda."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-7 items-start">
          {products.map((p, i) => (
            <FadeUpWrapper key={p.id} delay={i * 0.1}>
              <ProductCard product={p} />
            </FadeUpWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
