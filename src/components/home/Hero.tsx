import heroImage from "../../assets/img/hero.jpg";
import dots from "../../assets/img/dots.svg";
import { FaPlay } from "react-icons/fa6";
import traduction from "../../../public/traduction/traduction.json";

interface lang {
  lang: string;
}

const Hero = ({ lang }: lang) => {
  
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-primary text-primary-color pt-[120px] md:pt-[130px] lg:pt-[160px]"
    >
      <div className="container">
        <div className="-mx-5 flex flex-wrap items-center">
          <div className="w-full px-5">
            <div className="scroll-revealed mx-auto max-w-[780px] text-center">
              <h1 className="mb-6 text-3xl font-bold leading-snug text-primary-color sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-tight">
                
                {lang == "eng" && traduction["eng"]["heroTitle"]}
                {lang == "fr" && traduction["fr"]["heroTitle"]}
              </h1>
              <p className="mx-auto mb-9 max-w-[600px] text-base text-primary-color sm:text-lg sm:leading-normal">
                {lang == "eng" && traduction["eng"]["paragraphe"]}
                {lang == "fr" && traduction["fr"]["paragraphe"]}
              </p>
              <ul className="mb-10 flex flex-wrap items-center justify-center gap-4 md:gap-5">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="inline-flex items-center justify-center rounded-md bg-primary-color text-primary px-5 py-3 text-center text-base font-medium shadow-md hover:bg-primary-light-5 md:px-7 md:py-[14px]"
                    role="button"
                  >
                    {lang == "eng" && traduction["eng"]["get_started"]}
                    {lang == "fr" && traduction["fr"]["get_started"]}
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="video-popup flex items-center gap-4 rounded-md bg-primary-color/[0.15] px-5 py-3 text-base font-medium text-primary-color hover:bg-primary-color hover:text-primary md:px-7 md:py-[14px]"
                    role="button"
                  >
                    <FaPlay /> 
                    {lang == "eng" && traduction["eng"]["watch_intro"]}
                    {lang == "fr" && traduction["fr"]["watch_intro"]}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full px-5">
          <div className="scroll-revealed relative z-10 mx-auto max-w-[845px]">
            <figure className="mt-16">
              <img
                src={heroImage}
                alt="Hero image"
                className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
              />
            </figure>
            <div className="absolute -left-9 bottom-0 z-[-1]">
              <img src={dots} alt="" className="w-[120px] opacity-75" />
            </div>
            <div className="absolute -right-6 -top-6 z-[-1]">
              <img src={dots} alt="" className="w-[120px] opacity-75" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
