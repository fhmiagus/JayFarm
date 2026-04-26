import { FadeUpWrapper } from './ui/FadeUpWrapper';
import { SectionTag } from './ui/SectionTag';

const features = [
  { icon: '✅', title: 'Bersertifikat Halal',  desc: 'Seluruh proses produksi telah tersertifikasi halal MUI' },
  { icon: '🌿', title: 'Ramah Lingkungan',     desc: 'Pengelolaan limbah peternakan yang bertanggung jawab' },
  { icon: '🏥', title: 'Bebas Antibiotik',     desc: 'Pakan alami tanpa hormon dan antibiotik berbahaya' },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Image stack — hidden on mobile */}
          <FadeUpWrapper className="relative hidden lg:block">
            <div className="w-[85%] rounded-lg overflow-hidden shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-[#c8e6ca] flex flex-col items-center justify-center gap-3 text-5xl">
                🦆
                <p className="text-sm text-gray-600 font-medium">Kandang Bebek Modern</p>
              </div>
            </div>
            <div className="absolute bottom-[-40px] right-0 w-[52%] rounded-lg overflow-hidden shadow-xl border-4 border-white">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-[#fff8e1] flex flex-col items-center justify-center gap-3 text-3xl">
                🌾
                <p className="text-sm text-gray-600 font-medium">Area Peternakan</p>
              </div>
            </div>
            <div className="absolute top-8 right-[-16px] bg-gradient-to-br from-green-600 to-green-700 text-white px-6 py-5 rounded-md shadow-lg text-center">
              <strong className="block text-3xl font-extrabold leading-none">3+</strong>
              <span className="text-xs opacity-85">Tahun Berpengalaman</span>
            </div>
          </FadeUpWrapper>

          {/* Content */}
          <FadeUpWrapper delay={0.15}>
            <SectionTag>Tentang JayFarm</SectionTag>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4 leading-snug">
              Peternakan Bebek Pedaging Berdedikasi Sejak 2024
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
              JayFarm adalah peternakan bebek pedaging yang telah berdiri sejak tahun 2024, berlokasi di lingkungan pedesaan yang asri dan jauh dari polusi. Kami menggabungkan kearifan lokal dengan teknologi peternakan modern untuk menghasilkan bebek pedaging berkualitas premium.
            </p>
            <p className="text-gray-600 leading-relaxed mb-7 text-sm sm:text-base">
              Dengan lahan cukup luas, JayFarm mampu mengelola ribuan ekor bebek secara berkelanjutan, memastikan setiap produk yang kami hasilkan memenuhi standar keamanan pangan dan kesehatan tertinggi.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-green-100 rounded-sm flex items-center justify-center text-base sm:text-lg flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <strong className="block text-gray-900 font-semibold mb-0.5 text-sm sm:text-base">{f.title}</strong>
                    <p className="text-xs sm:text-sm text-gray-600">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block px-7 py-3 sm:px-8 sm:py-3.5 rounded-md font-semibold text-sm sm:text-base text-white bg-gradient-to-br from-green-600 to-green-700 shadow-md hover:from-green-700 hover:to-green-800 hover:-translate-y-0.5 transition-all duration-300"
            >
              Kunjungi Farm Kami
            </a>
          </FadeUpWrapper>
        </div>
      </div>
    </section>
  );
}
