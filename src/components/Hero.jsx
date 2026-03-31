import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import ProfilePhoto from "../assets/profile.jpg";

export default function Hero() {
  return (
    <div className="w-full max-w-md bg-[#0d1821] px-6 py-8 rounded-2xl shadow-xl text-center">

      {/* Top Introduction */}
      <div className="space-y-3">
        <h1 className="text-lg sm:text-xl text-[#b4cded]/70">Hello! I am</h1>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#b4cded] leading-snug">
          Jenisha Adhikari
        </h2>
      </div>

      {/* Profile Image */}
      <motion.div
        className="my-6"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 150 }}
      >
        <img
          src={ProfilePhoto}
          alt="Jenisha Adhikari"
          className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-[#344966] shadow-2xl mx-auto"
        />
      </motion.div>

      {/* Social Icons */}
      <div className="flex gap-6 mt-4 flex justify-center">
        <motion.a
          href="https://github.com/jenishaaa"
          target="_blank"
          whileHover={{ scale: 1.2 }}
          className="text-[#b4cded] hover:text-[#344966] transition"
        >
          <FaGithub size={28} />
        </motion.a>
        <motion.a
          href="https://linkedin.com"
          target="_blank"
          whileHover={{ scale: 1.2 }}
          className="text-[#b4cded] hover:text-[#344966] transition"
        >
          <FaLinkedin size={28} />
        </motion.a>
        <motion.a
          href="mailto:jennyadhikari0612@gmail.com"
          whileHover={{ scale: 1.2 }}
          className="text-[#b4cded] hover:text-[#344966] transition"
        >
          <FaEnvelope size={28} />
        </motion.a>
      </div>
    </div>
  );
}