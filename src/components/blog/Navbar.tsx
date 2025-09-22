import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

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
          <div>
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
              <div className="hidden sm:flex">
                <a
                  href="javascript:void(0)"
                  className="btn-navbar ml-5 px-6 py-3 rounded-md bg-primary-color bg-opacity-20 text-base font-medium text-primary-color hover:bg-opacity-100 hover:text-primary"
                  role="button"
                >
                  New blog
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarBlog;
