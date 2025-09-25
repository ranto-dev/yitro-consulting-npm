import { useState, useEffect } from "react";
import NavbarBlog from "../../components/blog/NavbarBlog";
import HeroBlog from "../../components/blog/HeroBlog";
import Content from "../../components/blog/Content";
import Contact from "../../components/home/Contact";
import Footer from "../../components/home/Footer";
import type { lang } from "../../components/home/Portfolio";

export default function AllBlogs({lang}: lang) {
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

      <div>
        <NavbarBlog />
        <HeroBlog />
        <Content />
        <Contact lang={lang} />
        <Footer />
      </div>
    </>
  );
}