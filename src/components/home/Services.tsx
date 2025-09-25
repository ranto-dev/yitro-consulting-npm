import {
  FaChalkboardUser,
  FaChartLine,
  FaCode,
  FaDesktop,
  FaGraduationCap,
  FaScaleBalanced,
} from "react-icons/fa6";
import traduction from "../../traduction/service.json";
import { useState } from "react";


// const services = [
//   {
//     icon: <FaChartLine />,
//     title: "Digital Marketing",
//     description:
//       "We design data-driven marketing strategies to boost your visibility and attract qualified leads. From SEO to Google & social ads, we tailor every campaign to your goals. Results that matter, growth you can measure.",
//   },
//   {
//     icon: <FaCode />,
//     title: "Web & Mobile Development",
//     description:
//       "We build responsive, secure websites and apps that match your vision and scale with your business. Whether it’s an e-commerce, a showcase site, or a mobile app, we deliver high-performance solutions. Smart tech, beautiful design.",
//   },
//   {
//     icon: <FaDesktop />,
//     title: "Digital Transformation",
//     description:
//       "We guide your business through every step of digital transformation—from audits to implementation. Our human-centered approach ensures smooth adoption and long-term impact. More than tech, it’s a mindset shift.",
//   },
//   {
//     icon: <FaGraduationCap />,
//     title: "E-learning & Training",
//     description:
//       "With Yitro Learning, we offer impactful training based on neuroscience and storytelling. Learn faster, remember longer, and grow personally or professionally. Flexible learning, lasting change.",
//   },
//   {
//     icon: <FaChalkboardUser />,
//     title: "Consulting & Change Management",
//     description:
//       "We help you lead change with clarity and confidence. From team coaching to strategic planning, we support transformation at every level. People-focused. Results-driven.",
//   },
//   {
//     icon: <FaScaleBalanced />,
//     title: "Legal Consulting",
//     description:
//       "We provide expert legal consulting to help businesses navigate regulatory, contractual, and compliance matters. From company formation to digital policy audits, we ensure your operations are secure and legally sound. Smart business starts with solid legal foundations.",
//   },
// ];
interface lang{
  lang: string
}
const Services = ({lang}: lang) => {
  const [services, _] = useState([
    {
      icon: <FaChartLine />,
      title: <>
      {lang == "eng" && traduction['eng']['service_title_1']}
      {lang == "fr" && traduction['fr']['service_title_1']}
    </>,
      description:
      <>
      {lang == "eng" && traduction['eng']['service_description_1']}
      {lang == "fr" && traduction['fr']['service_description_1']}
    </>,
    },
    {
      icon: <FaCode />,
      title: <>
      {lang == "eng" && traduction['eng']['service_title_2']}
      {lang == "fr" && traduction['fr']['service_title_2']}
    </>,
      description:
      <>
      {lang == "eng" && traduction['eng']['service_description_2']}
      {lang == "fr" && traduction['fr']['service_description_2']}
    </>,
    },
    {
      icon: <FaDesktop />,
      title: <>
      {lang == "eng" && traduction['eng']['service_title_3']}
      {lang == "fr" && traduction['fr']['service_title_3']}
    </>,
      description:
      <>
      {lang == "eng" && traduction['eng']['service_description_3']}
      {lang == "fr" && traduction['fr']['service_description_3']}
    </>,
    },
    {
      icon: <FaGraduationCap />,
      title: <>
      {lang == "eng" && traduction['eng']['service_title_4']}
      {lang == "fr" && traduction['fr']['service_title_4']}
    </>,
      description:
      <>
      {lang == "eng" && traduction['eng']['service_description_4']}
      {lang == "fr" && traduction['fr']['service_description_4']}
    </>,
    },
    {
      icon: <FaChalkboardUser />,
      title: <>
      {lang == "eng" && traduction['eng']['service_title_5']}
      {lang == "fr" && traduction['fr']['service_title_5']}
    </>,
      description:
      <>
      {lang == "eng" && traduction['eng']['service_description_5']}
      {lang == "fr" && traduction['fr']['service_description_5']}
    </>,
    },
    {
      icon: <FaScaleBalanced />,
      title: <>
      {lang == "eng" && traduction['eng']['service_title_6']}
      {lang == "fr" && traduction['fr']['service_title_6']}
    </>,
      description:
      <>
      {lang == "eng" && traduction['eng']['service_description_6']}
      {lang == "fr" && traduction['fr']['service_description_6']}
    </>,
    },
  ])
  return (
    <section id="services" className="section-area">
      <div className="container">
        <div className="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
          <h6 className="mb-2 block text-lg font-semibold text-primary">
            Services
          </h6>
          <h2 className="mb-6">
          {lang == "eng" && traduction['eng']['our_service']}
          {lang == "fr" && traduction['fr']['our_service']}
          </h2>
          <p>
          {lang == "eng" && traduction['eng']['our_service_paragraphe']}
          {lang == "fr" && traduction['fr']['our_service_paragraphe']}
            
          </p>
        </div>
        <div className="row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="scroll-revealed col-12 sm:col-6 lg:col-4"
            >
              <div className="group hover:-translate-y-1">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
