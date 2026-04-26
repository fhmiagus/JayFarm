import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrolled } from '../hooks/useScrolled';
import { useActiveSection } from '../hooks/useActiveSection';
import { navLinks } from '../data/navLinks';
import logo from '../assets/logo.png';

export default function Navbar() {
  const scrolled = useScrolled();
  const activeSection = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);

  const close = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 md:py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Jay Farm Logo" className="h-12 w-12 rounded-full object-cover" />
          <span className={`text-2xl font-bold ${scrolled ? 'text-gray-800' : 'text-white'}`}>
            Jay<span className="text-green-400">Farm</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            if (link.isButton) {
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="ml-2 px-5 py-2.5 rounded-md font-semibold text-sm text-white bg-gradient-to-br from-green-500 to-green-600 shadow-md hover:from-green-600 hover:to-green-700 hover:-translate-y-px transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              );
            }
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`px-4 py-2 rounded-md font-medium text-sm transition-all duration-300 ${
                    scrolled
                      ? isActive
                        ? 'text-green-700 bg-green-50'
                        : 'text-gray-700 hover:bg-gray-100'
                      : isActive
                      ? 'text-white bg-white/20'
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className={`block h-0.5 w-6 rounded-full ${scrolled ? 'bg-gray-800' : 'bg-white'}`}
              animate={
                menuOpen
                  ? i === 0
                    ? { rotate: 45, y: 8 }
                    : i === 1
                    ? { opacity: 0 }
                    : { rotate: -45, y: -8 }
                  : { rotate: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.25 }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="md:hidden flex flex-col gap-1 px-6 pb-6 bg-green-900/97 backdrop-blur-xl border-t border-white/10"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className={`block px-4 py-3 rounded-md text-sm font-medium text-white/90 hover:bg-white/10 transition-colors ${
                    link.isButton
                      ? 'mt-2 text-center bg-gradient-to-br from-green-500 to-green-600 text-white'
                      : ''
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
