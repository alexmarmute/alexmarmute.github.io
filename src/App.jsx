import SkipLink from "./components/SkipLink";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Highlights from "./components/Highlights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <SkipLink />
      <Navigation />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Highlights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
