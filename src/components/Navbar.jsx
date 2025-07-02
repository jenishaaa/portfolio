import { useState } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#1e293b] shadow-sm z-50 px-6 py-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">

        {/* Logo */}
        <a href="#hero" className="text-xl sm:text-2xl font-bold text-[#f3f3f3]">
          Jenisha
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-base sm:text-lg font-medium text-[#f3f3f3]">
          {['about', 'skills', 'trainings', 'projects', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="hover:text-[#3b82f6] transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}

          <a
            href="https://github.com/jenishaaa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#3b82f6] transition"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#3b82f6] transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#f3f3f3] text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#f9f9f6] px-6 pt-4 pb-6 space-y-4 text-base font-medium text-[#1f1f1f]">
          {['about', 'skills', 'trainings', 'projects', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="block hover:text-[#3b82f6]"
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
              className="hover:text-[#3b82f6]"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3b82f6]"
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
