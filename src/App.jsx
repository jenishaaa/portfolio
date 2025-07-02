import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Trainings from './pages/Trainings';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Trainings />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
