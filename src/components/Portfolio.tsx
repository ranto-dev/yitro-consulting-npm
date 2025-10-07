import { useState } from "react";
import portfolio1 from "../assets/img/portfolio/portfolio-1.jpg";
import portfolio2 from "../assets/img/portfolio/portfolio-2.jpg";
import portfolio3 from "../assets/img/portfolio/portfolio-3.jpg";
import portfolio4 from "../assets/img/portfolio/portfolio-4.jpg";
import portfolio5 from "../assets/img/portfolio/portfolio-5.jpg";
import portfolio6 from "../assets/img/portfolio/portfolio-6.jpg";
import { FaLink, FaMagnifyingGlassPlus } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";

const portfolioItems = [
  {
    id: 1,
    image: portfolio1,
    title: "Graphics Design",
    description:
      "Short description for the ones who look for something new. Awesome!",
    filter: "branding",
  },
  {
    id: 2,
    image: portfolio2,
    title: "Web Development",
    description:
      "Short description for the ones who look for something new. Awesome!",
    filter: "planning",
  },
  {
    id: 3,
    image: portfolio3,
    title: "App Development",
    description:
      "Short description for the ones who look for something new. Awesome!",
    filter: "marketing",
  },
  {
    id: 4,
    image: portfolio4,
    title: "Digital Marketing",
    description:
      "Short description for the ones who look for something new. Awesome!!",
    filter: "marketing",
  },
  {
    id: 5,
    image: portfolio5,
    title: "SEO Services",
    description:
      "Short description for the ones who look for something new. Awesome!",
    filter: "marketing",
  },
  {
    id: 6,
    image: portfolio6,
    title: "Product Design",
    description:
      "Short description for the ones who look for something new. Awesome!",
    filter: "branding",
  },
];

const itemVariants = {
  initial: { opacity: 0, y: 50, scale: 0.8 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -50, scale: 0.8, transition: { duration: 0.2 } },
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.filter === activeFilter);

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
            Portfolio
          </motion.h6>
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            className="mb-6"
          >
            Our Recent Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
          >
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </motion.p>
        </div>
        <motion.nav
          className=" flex gap-2 flex-wrap justify-center items-center py-4"
          aria-label="Portfolio filter"
        >
          {["all", "branding", "marketing", "planning", "research"].map(
            (filter) => (
              <button
                key={filter}
                type="button"
                className={`font-semibold px-5 py-2 rounded-md text-body-light-11 dark:text-body-dark-11 hover:bg-primary hover:text-primary-color focus:bg-primary focus:text-primary-color ${
                  activeFilter === filter ? "active" : ""
                }`}
                onClick={() => setActiveFilter(filter)}
                data-filter={filter}
              >
                {filter === "all"
                  ? "All Work"
                  : filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            )
          )}
        </motion.nav>
        <motion.div className="row">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
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
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full aspect-[4/3] flex items-center justify-center bg-body-light-1/75 scale-[0.15] rounded-xl opacity-0 invisible duration-300 ease-in-out group-hover:scale-95 group-hover:opacity-100 group-hover:visible">
                      <div className="flex flex-wrap gap-2 p-4">
                        <div className="inline-block relative">
                          <a
                            href={item.image}
                            className="portfolio-box text-[1.75rem] text-primary-color bg-primary z-10 w-[60px] aspect-square rounded-lg text-center inline-flex items-center justify-center hover:bg-primary-light-10 hover:text-primary-color dark:hover:bg-primary-dark-10 dark:hover:text-primary-color focus:bg-primary-light-10 focus:text-primary-color dark:focus-bg-primary-dark-10 dark:focus-text-primary-color"
                          >
                            <FaMagnifyingGlassPlus />
                          </a>
                        </div>
                        <div className="portfolio-icon">
                          <a
                            href="javascript:void(0)"
                            className="text-[1.75rem] text-primary-color bg-primary z-10 w-[60px] aspect-square rounded-lg text-center inline-flex items-center justify-center hover:bg-primary-light-10 hover:text-primary-color dark:hover:bg-primary-dark-10 dark:hover:text-primary-color focus:bg-primary-light-10 focus:text-primary-color dark:focus-bg-primary-dark-10 dark:focus-text-primary-color"
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
