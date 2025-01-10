import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutPage from "./components/AboutPage";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#D7D7D7]">
      <div className="landing">
        <header id="header">
          <Header />
        </header>
        <main className="text-white h-full flex-1" id="hero">
          <Hero />
        </main>
      </div>
      <section
        className="h-screen flex-1  bg-black text-white w-screen"
        id="about"
      >
        <AboutPage />
      </section>
      <section
        className="h-screen flex-1  md:mb-0 px-10 md:px-0  bg-[#2b2b2b] w-screen text-white"
        id="skills"
      >
        <Skills />
      </section>
      <section className="h-screen flex-1 md:mb-0" id="work">
        <Work />
      </section>
      <section className="h-screen flex-1 bg-black text-white" id="contact">
        <Contact />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
