import {
  FaChalkboardUser,
  FaChartLine,
  FaCode,
  FaDesktop,
  FaGraduationCap,
  FaScaleBalanced,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaChartLine />,
    title: "Digital Marketing",
    description:
      "We design data-driven marketing strategies to boost your visibility and attract qualified leads. From SEO to Google & social ads, we tailor every campaign to your goals. Results that matter, growth you can measure.",
  },
  {
    icon: <FaCode />,
    title: "Web & Mobile Development",
    description:
      "We build responsive, secure websites and apps that match your vision and scale with your business. Whether it’s an e-commerce, a showcase site, or a mobile app, we deliver high-performance solutions. Smart tech, beautiful design.",
  },
  {
    icon: <FaDesktop />,
    title: "Digital Transformation",
    description:
      "We guide your business through every step of digital transformation—from audits to implementation. Our human-centered approach ensures smooth adoption and long-term impact. More than tech, it’s a mindset shift.",
  },
  {
    icon: <FaGraduationCap />,
    title: "E-learning & Training",
    description:
      "With Yitro Learning, we offer impactful training based on neuroscience and storytelling. Learn faster, remember longer, and grow personally or professionally. Flexible learning, lasting change.",
  },
  {
    icon: <FaChalkboardUser />,
    title: "Consulting & Change Management",
    description:
      "We help you lead change with clarity and confidence. From team coaching to strategic planning, we support transformation at every level. People-focused. Results-driven.",
  },
  {
    icon: <FaScaleBalanced />,
    title: "Legal Consulting",
    description:
      "We provide expert legal consulting to help businesses navigate regulatory, contractual, and compliance matters. From company formation to digital policy audits, we ensure your operations are secure and legally sound. Smart business starts with solid legal foundations.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-area overflow-hidden">
      <div className="container">
        <div className="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
          <motion.h6
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.2,
            }}
            className="mb-2 block text-lg font-semibold text-primary"
          >
            Services
          </motion.h6>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="mb-6"
          >
            Our Best Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </motion.p>
        </div>
        <div className="row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: index / 10,
              }}
              key={index}
              className="scroll-revealed col-12 sm:col-6 lg:col-4"
            >
              <div className="group hover:-translate-y-1 duration-200 ease-in">
                <div className="w-[70px] h-[70px] rounded-2xl mb-6 flex items-center justify-center text-[37px]/none bg-primary text-primary-color">
                  {service.icon}
                </div>
                <div className="w-full">
                  <h4 className="text-[1.25rem]/tight font-semibold mb-5">
                    {service.title}
                  </h4>
                  <p>{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
