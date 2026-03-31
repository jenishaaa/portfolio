import { useState } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#b4cded] shadow-md z-50 px-6 py-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">

        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl sm:text-3xl font-bold text-[#800000] hover:text-[#ff4d4d] transition-colors"
        >
          Jenisha
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-base sm:text-lg font-medium text-black">
          {['about', 'skills', 'trainings', 'projects', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="hover:text-[#344966] transition-colors"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}

          {/* Social Links */}
          <a
            href="https://github.com/jenishaaa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#344966] transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#344966] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-black text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#b4cded] px-6 pt-4 pb-6 space-y-4 text-base font-medium text-black">
          {['about', 'skills', 'trainings', 'projects', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="block hover:text-[#344966] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}

          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com/jenishaaa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#344966] transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#344966] transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}