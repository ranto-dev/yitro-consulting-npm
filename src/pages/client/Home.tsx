import { useEffect, useState } from "react";
import Navbar from "../../components/home/Navbar";
import Hero from "../../components/home/Hero";
import About from "../../components/home/About";
import Services from "../../components/home/Services";
import IntroVideo from "../../components/home/IntroVideo";
import Portfolio, { type lang } from "../../components/home/Portfolio";
import Pricing from "../../components/home/Pricing";
import CallToAction from "../../components/home/CallToAction";
import Team from "../../components/home/Team";
import Blog from "../../components/home/Blog";
import Contact from "../../components/home/Contact";
import Footer from "../../components/home/Footer";
import ScrollToTopButton from "../../components/home/ScrollToTopButton";

export default function Home({lang}: lang) {
  const [isLoading, setIsLoading] = useState(true);

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

      <Navbar />
      <div className="main relative">
        <Hero lang={lang}/>
        <About lang={lang}/>
        <Services lang={lang}/>
        <IntroVideo lang={lang}/>
        <Portfolio lang={lang}/>
        <Pricing lang={lang}/>
        <CallToAction lang={lang}/>
        <Team lang={lang}/>
        <Blog />
        <Contact lang={lang}/>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
