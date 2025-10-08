import { useState } from "react";
import aboutImage from "../assets/img/about-img.jpg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = ["profile", "vision", "history"];

  return (
    <section id="about" className="section-area overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div className="w-full">
            <motion.figure
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="scroll-revealed max-w-[480px] mx-auto"
            >
              <img src={aboutImage} alt="About image" className="rounded-xl" />
            </motion.figure>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="w-full"
          >
            <div className="scroll-revealed">
              <h6 className="mb-2 block text-lg font-semibold text-primary">
                {t("about.titleSmall")}
              </h6>
              <h2 className="mb-6">{t("about.titleBig")}</h2>
            </div>

            <div className="tabs scroll-revealed">
              <nav
                className="tabs-nav flex flex-wrap gap-4 my-8"
                role="tablist"
                aria-label={t("about.titleSmall")}
              >
                {tabs.map((key) => (
                  <button
                    key={key}
                    type="button"
                    className={`tabs-link inline-block py-2 px-4 rounded-md text-body-light-12 dark:text-body-dark-12 bg-body-light-12/10 dark:bg-body-dark-12/10 font-medium hover:bg-primary hover:text-primary-color focus:bg-primary focus:text-primary-color ${
                      activeTab === key ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(key)}
                    role="tab"
                    aria-controls={`tabs-panel-${key}`}
                    aria-selected={activeTab === key}
                  >
                    {t(`about.tabs.${key}.label`)}
                  </button>
                ))}
              </nav>

              <div className="tabs-content mt-4" role="tabpanel">
                {t(`about.tabs.${activeTab}.content`, {
                  returnObjects: true,
                }).map((paragraph: string, idx: number) => (
                  <p key={idx} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
