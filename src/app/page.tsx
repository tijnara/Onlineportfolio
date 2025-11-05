import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Work } from "../components/Work";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
