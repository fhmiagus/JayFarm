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

export default function App() {
  return (
    <>
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
