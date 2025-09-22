import { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa6";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-[99] w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center transition-all duration-300 ${
        isVisible ? "" : "is-hided"
      }`}
      data-web-trigger="scroll-top"
      aria-label="Scroll to top"
    >
      <FaAngleUp />
    </button>
  );
};

export default ScrollToTopButton;
