import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaTwitter,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative z-10 bg-body-light-1 dark:bg-body-dark-12/10 pt-20 lg:pt-24 pb-8 border-t border-body-light-6 dark:border-body-dark-6 overflow-hidden">
      <div className="container">
        <div className="row flex flex-wrap -mx-4">
          {/* Logo + description */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="w-full md:w-1/2 lg:w-4/12 px-4 mb-10 md:mb-0"
          >
            <div className="scroll-revealed mb-4">
              <a href="#">Yitro-consulting</a>
            </div>
            <p className="scroll-revealed text-base text-body-light-11 dark:text-body-dark-11 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="scroll-revealed flex items-center space-x-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map(
                (Icon, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-body-light-2 dark:bg-body-dark-2 text-primary hover:bg-primary hover:text-primary-color"
                    >
                      <Icon />
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="w-full md:w-1/2 lg:w-2/12 px-4 mb-10 md:mb-0"
          >
            <h4 className="scroll-revealed text-xl font-semibold mb-4 text-body-light-12 dark:text-body-dark-12">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              {["about", "services", "portfolio", "pricing", "contact"].map(
                (link) => (
                  <li key={link} className="scroll-revealed">
                    <a
                      href={`#${link}`}
                      className="text-base text-body-light-11 dark:text-body-dark-11 hover:text-primary"
                    >
                      {t(`footer.links.${link}`)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="w-full md:w-1/2 lg:w-3/12 px-4 mb-10 md:mb-0"
          >
            <h4 className="scroll-revealed text-xl font-semibold mb-4 text-body-light-12 dark:text-body-dark-12">
              {t("footer.support")}
            </h4>
            <ul className="space-y-2">
              {["help", "privacy", "terms"].map((link) => (
                <li key={link} className="scroll-revealed">
                  <a
                    href="#"
                    className="text-base text-body-light-11 dark:text-body-dark-11 hover:text-primary"
                  >
                    {t(`footer.links.${link}`)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="w-full md:w-1/2 lg:w-3/12 px-4 mb-10 md:mb-0"
          >
            <h4 className="scroll-revealed text-xl font-semibold mb-4 text-body-light-12 dark:text-body-dark-12">
              {t("footer.subscribe")}
            </h4>
            <p className="scroll-revealed text-base text-body-light-11 dark:text-body-dark-11 mb-4">
              {t("footer.newsletter")}
            </p>
            <form className="scroll-revealed flex">
              <input
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                className="w-full rounded-l-md border border-body-light-6 dark:border-body-dark-6 bg-transparent px-4 py-3 text-body-light-11 dark:text-body-dark-11 text-base outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="rounded-r-md px-6 bg-primary text-primary-color hover:bg-primary-light-10 dark:hover:bg-primary-dark-10"
              >
                <FaLocationArrow />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-body-light-1 dark:bg-body-dark-12/10 pt-8 mt-12 text-center">
        <div className="container">
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: -10 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="text-sm text-body-light-11 dark:text-body-dark-11"
          >
            {t("footer.copyright")}
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
