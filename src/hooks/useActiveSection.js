import { useState, useEffect } from 'react';

export function useActiveSection() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const handler = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 140) current = s.id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return active;
}
