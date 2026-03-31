import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Intro() {
  const fullText = "Front-End Developer";
  const [displayText, setDisplayText] = useState("");
  const [showing, setShowing] = useState(true); // true = revealing, false = hiding
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const speed = 150; // ms per letter
    const pause = 1000; // pause before reversing

    const interval = setInterval(() => {
      if (showing) {
        if (index < fullText.length) {
          setDisplayText(fullText.slice(0, index + 1));
          setIndex(index + 1);
        } else {
          setShowing(false);
          setTimeout(() => {}, pause);
        }
      } else {
        if (index > 0) {
          setDisplayText(fullText.slice(0, index - 1));
          setIndex(index - 1);
        } else {
          setShowing(true);
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [index, showing]);

  return (
    <section className="bg-[#f0f4ef] w-full py-24 flex flex-col items-center justify-center">
      {/* Typewriter Title */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-black mb-6 h-[4rem]">
        {displayText}
        <span className="animate-pulse">|</span>
      </h1>
        <br></br>
        <br></br>
      {/* Short Description */}
      <p className="text-xl sm:text-2xl text-[#0d1821] font-medium text-center max-w-2xl mb-8">
        I build modern, responsive, and interactive web applications using React, Tailwind, and Vite.
      </p>
        <br></br>
        

      {/* CTA Button */}
      <a
        href="#projects"
        className="inline-flex items-center bg-[#344966] text-[#f0f4ef] font-bold px-8 py-4 rounded-lg hover:bg-[#b4cded] hover:text-black transition-colors"
      >
        View Projects <FaArrowRight className="ml-3" />
      </a>
    </section>
  );
}