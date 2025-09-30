import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import IntroVideo from "./components/IntroVideo";
import Portfolio from "./components/Portfolio";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Pricing from "./components/Pricing";
import CallToAction from "./components/CallToAction";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Blog from "./components/Blog";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [lang, setLang] = useState("fr");

  const handleChangeLang = () => {
    setLang(lang === "fr" ? "en" : "fr");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div
          className="page-loading fixed top-0 bottom-0 left-0 right-0 z-[99999] flex items-center justify-center bg-primary-light-1 dark:bg-primary-dark-1 opacity-100 visible pointer-events-auto"
          role="status"
          aria-live="polite"
          aria-atomic="true"
          aria-label="Loading..."
        >
          <div className="grid-loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}

      <button
        className={`fixed bottom-8 left-8 z-[99] w-12 h-12 border rounded-full bg-primary text-white flex items-center justify-center transition-all duration-300`}
        onClick={handleChangeLang}
      >
        {lang}
      </button>

      <Navbar />
      <div className="main relative">
        <Hero />
        <About />
        <Services />
        <IntroVideo />
        <Portfolio />
        <Pricing />
        <CallToAction />
        <Team />
        {/* <Testimonials /> */}
        <Blog />
        <Contact />
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
