import React, { useEffect, useState } from 'react';
import { Github as GitHub, Menu, X } from 'lucide-react';
import { Link } from './Link';

const sections = ['home', 'about', 'skills', 'projects', 'contact'];

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id, top: Math.abs(rect.top) };
      });

      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActiveLink(closest.id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-dark-200 py-4 px-6 shadow-md">
      <div className="flex justify-between items-center">
        <span className="text-light-100 font-bold text-2xl">
          <span className="text-primary">M</span>OHAMED
        </span>

        {/* Desktop Nav */}
        <nav className="hidden md:flex bg-gradient-to-r from-primary to-secondary rounded-full px-6 py-2">
          <ul className="flex space-x-6">
            {sections.map((id) => (
              <Link
                key={id}
                href={`#${id}`}
                isActive={activeLink === id}
                onClick={() => setActiveLink(id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            ))}
          </ul>
        </nav>

        {/* GitHub Icon */}
        <a
          href="https://github.com/mohamedelqasemy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-light-100 hover:text-primary transition-colors duration-300 ml-4"
        >
          <GitHub size={24} />
        </a>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-light-100 ml-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="md:hidden mt-4 bg-dark-100 rounded-lg px-6 py-4">
          <ul className="space-y-4">
            {sections.map((id) => (
              <Link
                key={id}
                href={`#${id}`}
                isActive={activeLink === id}
                onClick={() => {
                  setActiveLink(id);
                  setMenuOpen(false);
                }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
