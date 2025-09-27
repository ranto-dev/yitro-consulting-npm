import { useState } from "react";
import portfolio1 from "../../assets/img/portfolio/portfolio-1.jpg";
import portfolio2 from "../../assets/img/portfolio/portfolio-2.jpg";
import portfolio3 from "../../assets/img/portfolio/portfolio-3.jpg";
import portfolio4 from "../../assets/img/portfolio/portfolio-4.jpg";
import portfolio5 from "../../assets/img/portfolio/portfolio-5.jpg";
import portfolio6 from "../../assets/img/portfolio/portfolio-6.jpg";
import { FaLink, FaMagnifyingGlassPlus } from "react-icons/fa6";
import traduction from "../../traduction/portfolio.json";

export interface lang {
  lang: string
}
const Portfolio = ({ lang }: lang) => {
  const [activeFilter, setActiveFilter] = useState("all");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [portfolioItems, _] = useState([
    {
      image: portfolio1,
      title: (
        (lang == "eng" ? traduction['eng']['portfolio_title_1'] : "") +
        (lang == "fr" ? traduction['eng']['portfolio_title_1'] : "")
      )

      ,
      description:
        <>
          {lang == "eng" && traduction['eng']['portfolio_deescription_1']}
          {lang == "fr" && traduction['fr']['portfolio_deescription_1']}
        </>,
      filter: "branding",
    },
    {
      image: portfolio2,
      title: (
        (lang == "eng" ? traduction['eng']['portfolio_title_2'] : "") +
        (lang == "fr" ? traduction['eng']['portfolio_title_2'] : "")
      ),
      description:
        <>
          {lang == "eng" && traduction['eng']['portfolio_deescription_2']}
          {lang == "fr" && traduction['fr']['portfolio_deescription_2']}
        </>,
      filter: "planning",
    },
    {
      image: portfolio3,
      title: (
        (lang == "eng" ? traduction['eng']['portfolio_title_3'] : "") +
        (lang == "fr" ? traduction['eng']['portfolio_title_3'] : "")
      ),
      description:
        <>
          {lang == "eng" && traduction['eng']['portfolio_deescription_3']}
          {lang == "fr" && traduction['fr']['portfolio_deescription_3']}
        </>,
      filter: "marketing",
    },
    {
      image: portfolio4,
      title: (
        (lang == "eng" ? traduction['eng']['portfolio_title_4'] : "") +
        (lang == "fr" ? traduction['eng']['portfolio_title_4'] : "")
      ),
      description:
        <>
          {lang == "eng" && traduction['eng']['portfolio_deescription_4']}
          {lang == "fr" && traduction['fr']['portfolio_deescription_4']}
        </>,
      filter: "marketing",
    },
    {
      image: portfolio5,
      title: (
        (lang == "eng" ? traduction['eng']['portfolio_title_5'] : "") +
        (lang == "fr" ? traduction['eng']['portfolio_title_5'] : "")
      ),
      description:
        <>
          {lang == "eng" && traduction['eng']['portfolio_deescription_5']}
          {lang == "fr" && traduction['fr']['portfolio_deescription_5']}
        </>,
      filter: "marketing",
    },
    {
      image: portfolio6,
      title: (
        (lang == "eng" ? traduction['eng']['portfolio_title_6'] : "") +
        (lang == "fr" ? traduction['eng']['portfolio_title_6'] : "")
      ),
      description:
        <>
          {lang == "eng" && traduction['eng']['portfolio_deescription_6']}
          {lang == "fr" && traduction['fr']['portfolio_deescription_6']}
        </>,
      filter: "branding",
    },
  ]);
  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.filter === activeFilter);

  return (
    <section id="portfolio" className="section-area">
      <div className="container">
        <div className="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
          <h6 className="mb-2 block text-lg font-semibold text-primary">
            Portfolio
          </h6>
          <h2 className="mb-6">
            {lang == "eng" && traduction['eng']['recent_work_title']}
            {lang == "fr" && traduction['fr']['recent_work_title']}
          </h2>
          <p>
            {lang == "eng" && traduction['eng']['recent_work_paragraphe']}
            {lang == "fr" && traduction['fr']['recent_work_paragraphe']}
          </p>
        </div>
        <nav
          className=" flex gap-2 flex-wrap justify-center items-center py-4"
          aria-label="Portfolio filter"
        >
          {["all", "branding", "marketing", "planning", "research"].map(
            (filter) => (
              <button
                key={filter}
                type="button"
                className={`font-semibold px-5 py-2 rounded-md text-body-light-11 dark:text-body-dark-11 hover:bg-primary hover:text-primary-color focus:bg-primary focus:text-primary-color ${activeFilter === filter ? "active" : ""
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
        </nav>
        <div className="scroll-revealed portfolio-grid row">
          {filteredItems.map((item, index) => (
            <div key={index} className="portfolio col-12 sm:col-6 lg:col-4">
              <article className="group" data-filter={item.filter}>
                <div className="relative overflow-hidden w-full aspect-[4/3] rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full aspect-[4/3] flex items-center justify-center bg-body-light-1/75 scale-[0.15] rounded-xl opacity-0 invisible group-hover:scale-95 group-hover:opacity-100 group-hover:visible">
                    <div className="flex flex-wrap gap-2 p-4">
                      <div className="inline-block relative">
                        <a
                          href={item.image}
                          className="portfolio-box text-[1.75rem] text-primary-color bg-primary z-10 w-[60px] aspect-square rounded-lg text-center inline-flex items-center justify-center hover:bg-primary-light-10 hover:text-primary-color dark:hover:bg-primary-dark-10 dark:hover:text-primary-color focus:bg-primary-light-10 focus:text-primary-color dark:focus:bg-primary-dark-10 dark:focus-text-primary-color"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
