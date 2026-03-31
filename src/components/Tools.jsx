// Tools.jsx
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";
import { motion } from "framer-motion";

const tools = [
  { name: "React", icon: <FaReact color="#61dafb" /> },
  { name: "Tailwind", icon: <SiTailwindcss color="#38bdf8" /> },
  { name: "Vite", icon: <SiVite color="#646cff" /> },
  { name: "JavaScript", icon: <FaJsSquare color="#f7df1e" /> },
  { name: "HTML5", icon: <FaHtml5 color="#e34f26" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#1572b6" /> },
];

export default function Tools() {
  return (
    <section className="bg-[#f0f4ef] py-20 flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#344966] mb-12">
        Technologies I Use
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 w-full max-w-5xl">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center"
            whileHover={{ scale: 1.25 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="text-7xl">{tool.icon}</div>
            <p className="mt-3 text-[#0d1821] font-medium text-lg">{tool.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}