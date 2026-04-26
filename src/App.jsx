import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import About         from './components/About';
import Products      from './components/Products';
import WhyUs         from './components/WhyUs';
import Process       from './components/Process';
import Gallery       from './components/Gallery';
import Testimonials  from './components/Testimonials';
import Contact       from './components/Contact';
import Footer        from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function AnnouncementBar() {
  return (
    <div className="w-full bg-green-700 text-white text-xs sm:text-sm py-2 px-4 text-center font-medium z-50 relative">
      🚚 <span className="font-bold">Luar Kuningan – Cirebon:</span> minimal pembelian <span className="font-bold">100 ekor</span>
      &nbsp;|&nbsp;
      <a
        href="https://wa.me/6285117117440"
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 hover:text-green-200 transition-colors"
      >
        Hubungi Kami
      </a>
    </div>
  );
}

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyUs />
        <Process />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
