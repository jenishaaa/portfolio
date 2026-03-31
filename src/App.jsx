import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import About from './pages/About';
import Skills from './pages/Skills';
import Trainings from './pages/Trainings';
import Projects from './pages/Projects';
import Tools from './components/Tools';
import Contact from './pages/Contact';
import Footer from './components/Footer';


export default function App() {
  return (
    <>
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row min-h-screen pt-16"> 
        {/* pt-16 = navbar height */}

        {/* Left Sidebar - Hero */}
      <div className="w-full md:w-[500px] md:sticky md:top-20 h-fit flex justify-center px-4 py-8 ml-4 md:ml-6">
        <Hero />
      </div>

        {/* Right Side - Other Sections */}
        <div className="flex-1 px-6 py-12 space-y-20">
          <Intro />
          <Projects /> 
          <Tools />    
          <About />
          <Skills />
          <Trainings />
          <Contact />
          <Footer />  
        </div>
      </div>
    </>
  );
}
