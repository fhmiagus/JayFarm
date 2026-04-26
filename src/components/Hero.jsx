import { useRef, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const stats = [
  { target: 3,    suffix: '+', label: 'Tahun Pengalaman' },
  { target: 1000, suffix: '+', label: 'Ekor / Panen' },
  { target: 200,  suffix: '+', label: 'Pelanggan Setia' },
];

function Counter({ target, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [1, 0, 0.2, 1],
      onUpdate(v) {
        if (ref.current)
          ref.current.textContent = Math.floor(v).toLocaleString('id-ID') + suffix;
      },
    });
    return controls.stop;
  }, [inView, target, suffix]);

  return (
    <strong ref={ref} className="block text-3xl font-extrabold text-green-400 leading-none">
      0{suffix}
    </strong>
  );
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(160deg,#1a3a1f 0%,#22532a 40%,#1e5c2a 70%,#2d7a38 100%)',
      }}
    >
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='%23ffffff' fill-opacity='0.03'/%3E%3C/svg%3E\")",
        }}
      />
      {/* Radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[800px] h-[600px] -translate-y-1/2 rounded-full opacity-12" style={{ background: 'radial-gradient(ellipse,rgba(76,175,87,.15) 0%,transparent 60%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10" style={{ background: 'radial-gradient(ellipse,rgba(245,158,11,.1) 0%,transparent 50%)' }} />
      </div>
      {/* Decorative duck */}
      <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 text-[360px] opacity-[0.04] pointer-events-none select-none scale-x-[-1]">🦆</div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          {/* Badge */}
          <motion.span
            variants={itemVariants}
            className="inline-block bg-white/12 text-white/90 text-sm font-medium px-5 py-2 rounded-full border border-white/20 backdrop-blur-sm mb-6"
          >
            🌿 Peternakan Bebek Premium
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-[1.08] mb-6"
          >
            Kualitas Terbaik<br />
            dari <span className="text-green-400">JayFarm</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-white/80 leading-relaxed mb-10 max-w-xl"
          >
            Menyediakan bebek pedaging segar berkualitas tinggi dengan standar peternakan modern, higienis, dan berkelanjutan untuk memenuhi kebutuhan konsumen dan bisnis kuliner Anda.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">
            <a
              href="#products"
              className="px-8 py-3.5 rounded-md font-semibold text-white bg-gradient-to-br from-green-600 to-green-700 shadow-lg hover:from-green-700 hover:to-green-800 hover:-translate-y-0.5 transition-all duration-300"
            >
              Lihat Produk
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-md font-semibold text-white bg-white/15 border-2 border-white/60 backdrop-blur-sm hover:bg-white/25 hover:border-white transition-all duration-300"
            >
              Pesan Sekarang
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="inline-flex flex-col sm:flex-row items-stretch sm:items-center bg-white/8 backdrop-blur-xl border border-white/15 rounded-md overflow-hidden"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex sm:flex-col items-center sm:items-center gap-4 sm:gap-0 px-8 py-5">
                <Counter target={stat.target} suffix={stat.suffix} />
                <span className="text-xs text-white/70 sm:mt-1">{stat.label}</span>
                {i < stats.length - 1 && (
                  <div className="hidden sm:block absolute right-0 top-4 bottom-4 w-px bg-white/20" />
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs">
        <span>Scroll ke bawah</span>
        <div className="w-4 h-4 border-r-2 border-b-2 border-white/40 animate-scroll-bounce" />
      </div>
    </section>
  );
}
