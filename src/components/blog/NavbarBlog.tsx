import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars, FaMoon, FaSun } from "react-icons/fa6";
// import { Link } from "react-router-dom";

const NavbarBlog = () => {
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
    <header
      className={`ic-navbar absolute left-0 top-0 z-40 flex w-full items-center bg-transparent ${
        isSticky ? "sticky" : ""
      }`}
      role="banner"
      aria-label="Navigation bar"
    >
      <div className="container">
        <div className="ic-navbar-container relative -mx-5 flex items-center justify-between">
          <div className="w-60 lg:w-56 max-w-full px-5">
            <p className="ic-navbar-logo block w-full text-5xl font-semibold py-5 text-primary-color">
              Yitro-consulting
            </p>
          </div>
          <div className="flex w-full items-center justify-between px-5">
            <div>
              <button
                type="button"
                className="ic-navbar-toggler absolute right-4 -bottom-5 block -translate-y-1/2 rounded-md px-3 py-[6px] text-[22px]/none text-primary-color ring-primary focus:ring-2 lg:hidden"
                onClick={toggleMenu}
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
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
                    <li key={index} className="group relative">
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="ic-page-scroll mx-8 flex py-2 text-base text-body-light-12 group-hover:text-primary dark:text-body-dark-12 lg:mx-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-primary-color lg:dark:text-primary-color lg:group-hover:text-primary-color lg:group-hover:opacity-70"
                        role="menuitem"
                        onClick={handleLinkClick}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex items-center justify-end pr-[52px] lg:pr-0">
              <button
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarBlog;
