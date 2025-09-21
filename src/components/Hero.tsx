import heroImage from "../assets/img/hero.jpg";
import dots from "../assets/img/dots.svg";

const Hero = () => {
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
                Welcome to Yitro-consulting
              </h1>
              <p className="mx-auto mb-9 max-w-[600px] text-base text-primary-color sm:text-lg sm:leading-normal">
                Yitro-Consulting turns your ambitions into digital reality.
                Tailor-made solutions that boost your visibility, engage your
                clients, and drive your sales. From audit to delivery, we
                support every step of your digital transformation.
              </p>
              <ul className="mb-10 flex flex-wrap items-center justify-center gap-4 md:gap-5">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="inline-flex items-center justify-center rounded-md bg-primary-color text-primary px-5 py-3 text-center text-base font-medium shadow-md hover:bg-primary-light-5 md:px-7 md:py-[14px]"
                    role="button"
                  >
                    Get Started
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="video-popup flex items-center gap-4 rounded-md bg-primary-color/[0.15] px-5 py-3 text-base font-medium text-primary-color hover:bg-primary-color hover:text-primary md:px-7 md:py-[14px]"
                    role="button"
                  >
                    <i className="lni lni-play text-lg/none"></i> Watch Intro
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
