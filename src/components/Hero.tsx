import heroImage from "../assets/img/hero.jpg";
import dots from "../assets/img/dots.svg";
import { FaPlay } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const [, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

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
    <section
      id="home"
      className="relative bg-primary text-primary-color pt-[120px] md:pt-[130px] lg:pt-[160px] overflow-hidden"
    >
      <div className="container">
        <div className="-mx-5 flex flex-wrap items-center">
          <div className="w-full px-5">
            <div className="scroll-revealed mx-auto max-w-[780px] text-center">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: 1.4 }}
                className="mb-6 text-3xl font-bold leading-snug text-primary-color sm:text-4xl lg:text-5xl"
              >
                {t("hero.title")}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: 1.6 }}
                className="mx-auto mb-9 max-w-[600px] text-base text-primary-color sm:text-lg"
              >
                {t("hero.description")}
              </motion.p>

              <ul className="mb-10 flex flex-wrap items-center justify-center gap-4 md:gap-5">
                <li>
                  <motion.a
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 100, delay: 1.5 }}
                    href="#contact"
                    onClick={handleLinkClick}
                    className="inline-flex items-center justify-center rounded-md bg-primary-color text-primary px-5 py-3 font-medium shadow-md hover:bg-primary-light-5 md:px-7 md:py-[14px]"
                    role="button"
                  >
                    {t("hero.buttons.start")}
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 100, delay: 1.5 }}
                    href="#video"
                    className="flex items-center gap-4 rounded-md bg-primary-color/[0.15] px-5 py-3 font-medium text-primary-color hover:bg-primary-color hover:text-primary md:px-7 md:py-[14px]"
                    role="button"
                  >
                    <FaPlay />
                    {t("hero.buttons.intro")}
                  </motion.a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image + Dots */}
        <div className="w-full px-5">
          <div className="scroll-revealed relative z-10 mx-auto max-w-[845px]">
            <motion.figure
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="mt-16"
            >
              <img
                src={heroImage}
                alt="Hero image"
                className="mx-auto max-w-full rounded-t-xl"
              />
            </motion.figure>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="absolute -left-9 bottom-0 z-[-1]"
            >
              <img src={dots} alt="" className="w-[120px] opacity-75" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="absolute -right-6 -top-6 z-[-1]"
            >
              <img src={dots} alt="" className="w-[120px] opacity-75" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
