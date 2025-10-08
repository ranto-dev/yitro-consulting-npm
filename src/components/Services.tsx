import {
  FaChalkboardUser,
  FaChartLine,
  FaCode,
  FaDesktop,
  FaGraduationCap,
  FaScaleBalanced,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const iconList = [
  <FaChartLine />,
  <FaCode />,
  <FaDesktop />,
  <FaGraduationCap />,
  <FaChalkboardUser />,
  <FaScaleBalanced />,
];

const Services = () => {
  const { t } = useTranslation();
  const services = t("services.list", { returnObjects: true });

  return (
    <section id="services" className="section-area overflow-hidden">
      <div className="container">
        <div className="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
          <motion.h6
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="mb-2 block text-lg font-semibold text-primary"
          >
            {t("services.sectionTitleSmall")}
          </motion.h6>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="mb-6"
          >
            {t("services.sectionTitleBig")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            {t("services.sectionDescription")}
          </motion.p>
        </div>

        <div className="row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(
            (
              service: { title: string; description: string },
              index: number
            ) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: index / 10,
                }}
                className="scroll-revealed col-12 sm:col-6 lg:col-4"
              >
                <div className="group hover:-translate-y-1 duration-200 ease-in">
                  <div className="w-[70px] h-[70px] rounded-2xl mb-6 flex items-center justify-center text-[37px]/none bg-primary text-primary-color">
                    {iconList[index]}
                  </div>
                  <div className="w-full">
                    <h4 className="text-[1.25rem]/tight font-semibold mb-5">
                      {service.title}
                    </h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
