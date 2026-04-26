import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUpWrapper } from './ui/FadeUpWrapper';
import { SectionHeader } from './ui/SectionHeader';

const contactItems = [
  { icon: '📍', label: 'Alamat',               value: 'Dusun Jl. Cikalong, Pajawankidul, Kec. Lebakwangi, Kabupaten Kuningan, Jawa Barat 45574' },
  { icon: '📞', label: 'Telepon / WhatsApp',   value: '081324456440' },
  { icon: '📧', label: 'Email',                 value: 'info@jayfarm.id' },
  { icon: '🕐', label: 'Jam Operasional',       value: 'Senin – Sabtu: 07.00 – 17.00 WIB\nMinggu: 08.00 – 13.00 WIB' },
];

const socials = [
  { label: '📘 Facebook',   href: '#' },
  { label: '📸 Instagram',  href: '#' },
  { label: '💬 WhatsApp',   href: '#' },
];

const EMPTY = { name: '', phone: '', email: '', need: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm(EMPTY);
    }, 4000);
  };

  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          tag="Hubungi Kami"
          title="Siap Bermitra dengan JayFarm?"
          description="Hubungi kami sekarang dan dapatkan penawaran terbaik untuk kebutuhan bebek pedaging Anda."
        />

        {/* Map */}
        <FadeUpWrapper className="mb-14">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md">
            <div className="flex items-center justify-between px-5 py-3.5 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center gap-2.5">
                <span className="text-lg">📍</span>
                <span className="font-semibold text-gray-800 text-sm">Lokasi Jay Farm</span>
                <span className="text-gray-400 text-xs">— Kab. Kuningan, Jawa Barat</span>
              </div>
              <a
                href="https://maps.app.goo.gl/R3N7WzqtcwAVvfoe8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition-colors"
              >
                Buka di Maps ↗
              </a>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15840.299343768713!2d108.5662196!3d-7.0004694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1360249bbef5%3A0x8b8e75ea8d89da15!2sJay%20Farm!5e0!3m2!1sid!2sid!4v1777178671903!5m2!1sid!2sid"
              width="100%"
              height="380"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Jay Farm"
            />
          </div>
        </FadeUpWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          {/* Contact info */}
          <FadeUpWrapper>
            <h3 className="text-xl font-bold text-gray-900 mb-8">Informasi Kontak</h3>
            <div className="flex flex-col gap-7 mb-8">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-green-100 rounded-sm flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <strong className="block text-gray-900 font-semibold text-sm mb-1">
                      {item.label}
                    </strong>
                    <p className="text-gray-600 text-sm whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-sm font-semibold px-4 py-2.5 bg-gray-100 border border-gray-200 rounded-sm text-gray-700 hover:bg-green-100 hover:border-green-400 hover:text-green-700 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </FadeUpWrapper>

          {/* Form */}
          <FadeUpWrapper delay={0.15}>
            <div className="bg-green-50 border border-green-100 rounded-xl p-10">
              <h3 className="text-xl font-bold text-gray-900 mb-7">Kirim Pesan</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nama Lengkap *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Masukkan nama Anda"
                      className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-sm text-sm text-gray-800 bg-white outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/15 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nomor WhatsApp *</label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="6281324456440"
                      className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-sm text-sm text-gray-800 bg-white outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/15 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="email@contoh.com"
                    className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-sm text-sm text-gray-800 bg-white outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/15 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Kebutuhan Anda *</label>
                  <select
                    name="need"
                    value={form.need}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-sm text-sm text-gray-800 bg-white outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/15 transition-all"
                  >
                    <option value="" disabled>Pilih jenis kebutuhan</option>
                    {['Bebek Utuh Segar','Bebek Potong / Parting','Bebek Hidup','Kemitraan Bisnis','Lainnya'].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Pesan</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Ceritakan kebutuhan Anda secara detail..."
                    className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-sm text-sm text-gray-800 bg-white outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/15 transition-all resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full py-4 rounded-md font-semibold text-white transition-all duration-300 disabled:cursor-not-allowed"
                  style={{
                    background: submitted
                      ? 'linear-gradient(135deg,#16a34a,#15803d)'
                      : 'linear-gradient(135deg,#3a8c46,#2d6e37)',
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={submitted ? 'ok' : 'send'}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="block"
                    >
                      {submitted
                        ? '✅ Pesan Terkirim! Kami akan segera menghubungi Anda.'
                        : 'Kirim Pesan 🚀'}
                    </motion.span>
                  </AnimatePresence>
                </button>
              </form>
            </div>
          </FadeUpWrapper>
        </div>
      </div>
    </section>
  );
}
