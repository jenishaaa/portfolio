import HeroCard from '../components/HeroCard';
import ProfilePhoto from '../assets/1747922672429.jpg';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 sm:px-10 md:px-16 bg-[#f3f3f3]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl items-center py-16 sm:py-20">

        {/* Left Side - Introduction Text */}
        <HeroCard>
          <div className="text-left space-y-6">
            <h1 className="text-lg sm:text-xl text-[#6b6b6b]">Hello! I am</h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1a1a1a] leading-tight">
              Jenisha Adhikari
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl font-medium text-[#333]">
              Aspiring Front-End Web Developer
            </p>

            {/* CTA Button */}
            <div className="pt-6">
              <a
                href="#projects"
                className="inline-block bg-[#3b82f6] text-white px-6 py-3 rounded-lg 
                hover:bg-[#2563eb] hover:scale-105 transition font-semibold 
                text-base sm:text-lg shadow-md"
              >
                View Projects
              </a>
            </div>
          </div>
        </HeroCard>

        {/* Right Side - Profile Image */}
        <HeroCard>
          <img
            src={ProfilePhoto}
            alt="Portrait of Jenisha Adhikari"
            className="rounded-full w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover mx-auto border border-gray-300 shadow-md"
          />
        </HeroCard>
      </div>
    </section>
  );
}
