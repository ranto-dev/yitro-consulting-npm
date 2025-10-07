import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("Inazuma_WebTheme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("Inazuma_WebTheme") || "light";
    setTheme(savedTheme);

    const handleScroll = () => {
      setIsSticky(window.scrollY >= 72);
    };

    const handleScrollspy = () => {
      const links =
        document.querySelectorAll<HTMLAnchorElement>(".ic-page-scroll");
      const scrollpos =
        window.pageYOffset || document.documentElement.scrollTop;

      links.forEach((link) => {
        const href = link.getAttribute("href");
        if (href) {
          const targetElement = document.querySelector<HTMLElement>(href);
          if (targetElement) {
            const topminus = scrollpos + 74;
            if (
              targetElement.offsetTop <= topminus &&
              targetElement.offsetTop + targetElement.offsetHeight > topminus
            ) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollspy);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollspy);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.webTheme = theme;
  }, [theme]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");

    if (href) {
      const targetElement = document.querySelector<HTMLElement>(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className={`ic-navbar left-0 top-0 z-40 flex w-full items-center ${
          isSticky
            ? "sticky bg-white/90 shadow-md dark:bg-primary-dark-1"
            : "absolute bg-transparent"
        }`}
        role="banner"
        aria-label="Navigation bar"
      >
        <div className="container">
          <div className="ic-navbar-container relative -mx-5 flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 1 }}
              className="w-60 lg:w-56 max-w-full px-5"
            >
              <p className="ic-navbar-logo block w-full text-5xl font-semibold py-5 text-primary-color">
                Yitro-consulting
              </p>
            </motion.div>
            <div className="flex w-full items-center justify-between px-5">
              <div>
                <button
                  type="button"
                  className="ic-navbar-toggler absolute right-4 top-1/2 block -translate-y-1/2 rounded-md px-3 py-[6px] text-[22px]/none text-primary-color ring-primary focus:ring-2 lg:hidden"
                  onClick={toggleMenu}
                  aria-expanded={isMenuOpen}
                  aria-label="Toggle navigation menu"
                >
                  <i
                    className={isMenuOpen ? "lni lni-close" : "lni lni-menu"}
                  ></i>
                </button>
                <nav
                  id="navbarMenu"
                  className={`ic-navbar-collapse absolute right-4 top-[80px] w-full max-w-[250px] rounded-lg bg-primary-light-1 py-5 shadow-lg dark:bg-primary-dark-1 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:shadow-none dark:lg:bg-transparent xl:px-6 ${
                    isMenuOpen ? "block" : "hidden"
                  }`}
                >
                  <ul
                    className="block lg:flex gap-8"
                    role="menu"
                    aria-label="Navigation menu"
                  >
                    {[
                      "Home",
                      "Services",
                      "Portfolio",
                      "Pricing",
                      "Team",
                      "Blog",
                      "Contact",
                    ].map((item, index) => (
                      <motion.li
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          delay: 1 + index * 0.1,
                        }}
                        key={index}
                        className="group relative"
                      >
                        <a
                          href={`#${item.toLowerCase()}`}
                          className="ic-page-scroll mx-8 flex py-2 text-base text-body-light-12 group-hover:text-primary dark:text-body-dark-12 lg:mx-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-primary-color lg:dark:text-primary-color lg:group-hover:text-primary-color lg:group-hover:opacity-70"
                          role="menuitem"
                          onClick={handleLinkClick}
                        >
                          {item}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-[52px] lg:pr-0">
                <motion.button
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: 1 }}
                  whileHover={{ scale: 1.02 }}
                  type="button"
                  className="inline-flex items-center text-primary-color text-[24px]/none"
                  aria-label="Switch theme"
                  onClick={toggleTheme}
                >
                  {theme === "dark" ? (
                    <FaMoon className={isSticky ? "text-primary" : ""} />
                  ) : (
                    <FaSun className={isSticky ? "text-black" : ""} />
                  )}
                </motion.button>
                <div className="hidden sm:flex">
                  <motion.a
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 100, delay: 1 }}
                    whileHover={{ scale: 1.02 }}
                    href="#contact"
                    onClick={handleLinkClick}
                    className="btn-navbar ml-5 px-6 py-3 rounded-md bg-primary-color bg-opacity-20 text-base font-medium text-primary-color hover:bg-opacity-100 hover:text-primary"
                    role="button"
                  >
                    Get Started
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.header>
    </AnimatePresence>
  );
};

export default Navbar;
