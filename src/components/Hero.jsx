import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import ProfilePhoto from "../assets/profile.jpg";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center text-center h-full w-full bg-[#0d1821] px-6 py-12 rounded-xl shadow-xl max-w-m mx-auto">

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
          className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-[#344966] shadow-2xl"
        />
      </motion.div>

      {/* Social Icons */}
      <div className="flex gap-6 mt-4">
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

// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import ProfilePhoto from "../assets/profile.jpg";

// export default function Hero() {
//   return (
//     <div className="flex flex-col justify-between items-center text-center h-full w-full">

//       {/* Top Introduction */}
//       <div className="space-y-4">
//         <h1 className="text-lg text-[#6b6b6b]">Hello! I am</h1>
//         <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1a1a1a] leading-tight">
//           Jenisha Adhikari
//         </h2>
//         <p className="text-lg sm:text-xl text-[#333] font-medium">
//           Aspiring Front-End Web Developer
//         </p>
//       </div>

//       {/* Profile Image */}
//       <div className="my-8">
//         <img
//           src={ProfilePhoto}
//           alt="Jenisha Adhikari"
//           className="w-56 h-56 sm:w-64 sm:h-64 object-cover rounded-full border border-gray-300 shadow-md hover:scale-105 transition"
//         />
//       </div>

//       {/* Social Icons */}
//       <div className="flex gap-6 text-3xl mt-8">
//         <a href="https://github.com/jenishaaa" target="_blank" className="text-gray-900 hover:text-[#3b82f6] hover:scale-110 transition">
//           <FaGithub />
//         </a>
//         <a href="https://linkedin.com" target="_blank" className="text-blue-600 hover:text-[#2563eb] hover:scale-110 transition">
//           <FaLinkedin />
//         </a>
//         <a href="mailto:jennyadhikari0612@gmail.com" className="text-red-500 hover:text-red-600 hover:scale-110 transition">
//           <FaEnvelope />
//         </a>
//       </div>

//     </div>
//   );
// }

// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import ProfilePhoto from "../assets/profile.jpg";

// export default function Hero() {
//   return (
//     <section
//       id="hero"
//       className="min-h-screen flex flex-col justify-between items-center text-center px-8 py-12 bg-[#f0efeb]"
//     >
//       {/* Top Introduction */}
//       <div className="space-y-4">
//         <h1 className="text-lg text-[#6b6b6b]">
//           Hello! I am
//         </h1>

//         <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1a1a1a] leading-tight">
//           Jenisha Adhikari
//         </h2>

//         <p className="text-lg sm:text-xl text-[#333] font-medium">
//           Aspiring Front-End Web Developer
//         </p>
//       </div>

//       {/* Profile Image */}
//       <div className="my-10">
//         <img
//           src={ProfilePhoto}
//           alt="Jenisha Adhikari"
//           className="w-56 h-56 sm:w-64 sm:h-64 object-cover rounded-full border border-gray-300 shadow-md"
//         />
//       </div>

//       {/* Social Icons */}
//       <div className="flex gap-6 text-2xl text-[#333]">
//         <a
//           href="https://github.com/jenishaaa"
//           target="_blank"
//           className="hover:text-[#3b82f6] transition"
//         >
//           <FaGithub />
//         </a>

//         <a
//           href="https://linkedin.com"
//           target="_blank"
//           className="hover:text-[#3b82f6] transition"
//         >
//           <FaLinkedin />
//         </a>

//         <a
//           href="mailto:jennyadhikari0612@gmail.com"
//           className="hover:text-[#3b82f6] transition"
//         >
//           <FaEnvelope />
//         </a>
//       </div>
//     </section>
//   );
// }