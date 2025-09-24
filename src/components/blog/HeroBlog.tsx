import dots from "../../assets/img/dots.svg";

export default function HeroBlog() {
  return (
    <section
      id="home"
      className="relative overflow-hidden h-[75vh] bg-primary text-primary-color pt-[120px] md:pt-[130px] lg:pt-[160px]"
    >
      <div className="container">
        <div className="-mx-5 flex flex-wrap items-center">
          <div className="w-full px-5">
            <div className="scroll-revealed mx-auto max-w-[780px] text-center">
              <h1 className="mb-6 text-3xl font-bold leading-snug text-primary-color sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-tight">
                Explore Our Blog
              </h1>
              <p className="mx-auto mb-9 max-w-[600px] text-base text-primary-color sm:text-lg sm:leading-normal">
                Stay updated with the latest insights, trends, and tips from our
                team of experts.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-5">
          <div className="scroll-revealed relative z-10 mx-auto max-w-[845px]">
            <div className="absolute -left-30 -top-40 z-[-1]">
              <img src={dots} alt="" className="w-[120px] opacity-75" />
            </div>
            <div className="absolute -right-20 top-20 z-[-1]">
              <img src={dots} alt="" className="w-[120px] opacity-75" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
