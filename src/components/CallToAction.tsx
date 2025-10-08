import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const CallToAction = () => {
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
      id="call-action"
      className="section-area !bg-primary !text-primary-color overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        className="container"
      >
        <div className="scroll-revealed text-center max-w-[550px] mx-auto">
          <h2 className="mb-8 text-inherit">{t("callToAction.title")}</h2>
          <p>{t("callToAction.description")}</p>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="inline-block px-5 py-3 rounded-md mt-11 bg-green-400 text-white hover:bg-green-500 hover:text-white focus:bg-green-500 focus:text-white"
            role="button"
          >
            {t("callToAction.button")}
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
