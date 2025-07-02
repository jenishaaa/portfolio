import Hero from "../components/Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
