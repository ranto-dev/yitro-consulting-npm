import { useState } from "react";
import { FaLink, FaMagnifyingGlassPlus } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import portfolio1 from "../assets/img/portfolio/portfolio-1.jpg";
import portfolio2 from "../assets/img/portfolio/portfolio-2.jpg";
import portfolio3 from "../assets/img/portfolio/portfolio-3.jpg";
import portfolio4 from "../assets/img/portfolio/portfolio-4.jpg";
import portfolio5 from "../assets/img/portfolio/portfolio-5.jpg";
import portfolio6 from "../assets/img/portfolio/portfolio-6.jpg";

const portfolioImages = [
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
];

const itemVariants = {
  initial: { opacity: 0, y: 50, scale: 0.8 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -50, scale: 0.8, transition: { duration: 0.2 } },
};

const Portfolio = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");

  const allItems: any[] = t("portfolio.items", { returnObjects: true });

  const filteredItems =
    activeFilter === "all"
      ? allItems
      : allItems.filter((item) => item.filter === activeFilter);

  const filters = ["all", "branding", "marketing", "planning", "research"];

  return (
    <section id="portfolio" className="section-area overflow-hidden">
      <div className="container">
        <div className="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
          <motion.h6
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="mb-2 block text-lg font-semibold text-primary"
          >
            {t("portfolio.sectionTitleSmall")}
          </motion.h6>
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            className="mb-6"
          >
            {t("portfolio.sectionTitleBig")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
          >
            {t("portfolio.sectionDescription")}
          </motion.p>
        </div>

        <motion.nav
          className="flex gap-2 flex-wrap justify-center items-center py-4"
          aria-label="Portfolio filter"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`font-semibold px-5 py-2 rounded-md text-body-light-11 dark:text-body-dark-11 hover:bg-primary hover:text-primary-color focus:bg-primary focus:text-primary-color ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {t(`portfolio.filters.${filter}`)}
            </button>
          ))}
        </motion.nav>

        <motion.div className="row">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                className="portfolio col-12 sm:col-6 lg:col-4"
                variants={itemVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                layout
                transition={{ duration: 0.2 }}
              >
                <article className="group" data-filter={item.filter}>
                  <div className="relative overflow-hidden w-full aspect-[4/3] rounded-xl">
                    <img
                      src={portfolioImages[index]}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full aspect-[4/3] flex items-center justify-center bg-body-light-1/75 scale-[0.15] rounded-xl opacity-0 invisible duration-300 ease-in-out group-hover:scale-95 group-hover:opacity-100 group-hover:visible">
                      <div className="flex flex-wrap gap-2 p-4">
                        <div className="inline-block relative">
                          <a
                            href={portfolioImages[index]}
                            className="portfolio-box text-[1.75rem] text-primary-color bg-primary z-10 w-[60px] aspect-square rounded-lg inline-flex items-center justify-center"
                          >
                            <FaMagnifyingGlassPlus />
                          </a>
                        </div>
                        <div className="portfolio-icon">
                          <a
                            href="javascript:void(0)"
                            className="text-[1.75rem] text-primary-color bg-primary z-10 w-[60px] aspect-square rounded-lg inline-flex items-center justify-center"
                          >
                            <FaLink />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <h4 className="mb-2">
                      <a
                        href="javascript:void(0)"
                        className="text-[1.5rem] leading-tight text-inherit"
                      >
                        {item.title}
                      </a>
                    </h4>
                    <p>{item.description}</p>
                  </div>
                </article>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
