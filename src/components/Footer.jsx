import { navLinks } from '../data/navLinks';
import logo from '../assets/logo.png';

const productLinks = ['Bebek Utuh Segar', 'Bebek Potong', 'Bebek Hidup', 'Pemesanan Khusus'];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white/70 pt-12 md:pt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 pb-10 md:pb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Jay Farm Logo" className="h-12 w-12 rounded-full object-cover" />
              <span className="text-xl sm:text-2xl font-bold text-white">Jay<span className="text-green-400">Farm</span></span>
            </a>
            <p className="text-xs sm:text-sm leading-relaxed text-white/60">
              Peternakan bebek pedaging terpercaya dengan standar kualitas premium dan komitmen terhadap keberlanjutan lingkungan.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              {['🥇 Sertifikat Halal MUI', '✅ SNI Terdaftar'].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 bg-white/6 border border-white/10 px-3 py-2 rounded-sm text-xs sm:text-sm w-fit"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm sm:text-base">Navigasi</h4>
            <ul className="flex flex-col gap-2">
              {navLinks.filter((l) => !l.isButton).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-xs sm:text-sm text-white/60 hover:text-green-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm sm:text-base">Produk</h4>
            <ul className="flex flex-col gap-2">
              {productLinks.map((p) => (
                <li key={p}>
                  <a href="#products" className="text-xs sm:text-sm text-white/60 hover:text-green-400 transition-colors">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white font-bold mb-4 text-sm sm:text-base">Kontak</h4>
            {[
              '📍 Dusun Jl. Cikalong, Pajawankidul, Kec. Lebakwangi, Kabupaten Kuningan, Jawa Barat 45574',
              '📞 +6285117117440',
              '📧 info@jayfarm.id',
              '🕐 Senin–Sabtu, 07.00–17.00',
            ].map((item) => (
              <p key={item} className="text-xs sm:text-sm text-white/60 mb-2 leading-snug">{item}</p>
            ))}
          </div>
        </div>

        <div className="border-t border-white/8 py-5 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs sm:text-sm text-white/40">
          <p>&copy; 2026 JayFarm. Seluruh hak cipta dilindungi.</p>
          <p>Dibuat dengan ❤️ untuk ketahanan pangan Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
