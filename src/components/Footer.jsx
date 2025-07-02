import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#f3f3f3] text-[#1a1a1a] border-t border-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-6 space-y-6 md:space-y-0 md:flex md:justify-between md:items-center text-center md:text-left">

        {/* Left - Name & Copyright */}
        <div className="text-sm sm:text-base font-medium">
          &copy; {new Date().getFullYear()} <span className="font-semibold">Jenisha Adhikari</span>. All rights reserved.
        </div>

        {/* Middle - Contact Links */}
        <div className="space-y-2">
          <div className="font-semibold text-[#1a1a1a]">Contact</div>
          <div className="flex justify-center md:justify-start items-center gap-5 text-[#1a1a1a]">
            <a
              href="mailto:jennyadhikari0612@gmail.com"
              className="hover:text-[#3b82f6] transition"
              title="Email"
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href="https://github.com/jenishaaa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3b82f6] transition"
              title="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3b82f6] transition"
              title="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Right - Location */}
        <div className="flex justify-center md:justify-start items-center gap-2 text-base text-[#555]">
          <FaMapMarkerAlt className="text-[#3b82f6]" />
          <span>Kathmandu, Nepal</span>
        </div>

      </div>
    </footer>
  );
}
