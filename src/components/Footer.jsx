import { navLinks } from '../data/navLinks';
import logo from '../assets/logo.png';

const productLinks = ['Bebek Utuh Segar', 'Bebek Potong', 'Bebek Hidup', 'Pemesanan Khusus'];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white/70 pt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Jay Farm Logo" className="h-12 w-12 rounded-full object-cover" />
              <span className="text-2xl font-bold text-white">Jay<span className="text-green-400">Farm</span></span>
            </a>
            <p className="text-sm leading-relaxed text-white/60">
              Peternakan bebek pedaging terpercaya dengan standar kualitas premium dan komitmen terhadap keberlanjutan lingkungan.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              {['🥇 Sertifikat Halal MUI', '✅ SNI Terdaftar'].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 bg-white/6 border border-white/10 px-3 py-2 rounded-sm text-sm w-fit"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white font-bold mb-5">Navigasi</h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.filter((l) => !l.isButton).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-green-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold mb-5">Produk</h4>
            <ul className="flex flex-col gap-2.5">
              {productLinks.map((p) => (
                <li key={p}>
                  <a href="#products" className="text-sm text-white/60 hover:text-green-400 transition-colors">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-5">Kontak</h4>
            {[
              '📍 Kab. Bogor, Jawa Barat',
              '📞 +62 812-3456-7890',
              '📧 info@jayfarm.id',
              '🕐 Senin–Sabtu, 07.00–17.00',
            ].map((item) => (
              <p key={item} className="text-sm text-white/60 mb-2.5 leading-snug">{item}</p>
            ))}
          </div>
        </div>

        <div className="border-t border-white/8 py-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-white/40">
          <p>&copy; 2026 JayFarm. Seluruh hak cipta dilindungi.</p>
          <p>Dibuat dengan ❤️ untuk ketahanan pangan Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
