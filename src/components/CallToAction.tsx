import { useState } from "react";

const CallToAction = () => {
  const [, setIsMenuOpen] = useState(false);

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
      className="section-area !bg-primary !text-primary-color"
    >
      <div className="container">
        <div className="scroll-revealed text-center max-w-[550px] mx-auto">
          <h2 className="mb-8 text-inherit">
            We love to make perfect solutions for your business
          </h2>
          <p>
            Why I say old chap that is, spiffing off his nut cor blimey guvnords
            geeza bloke knees up bobby, sloshed arse William cack Richard. Bloke
            fanny around chesed of bum bag old lost the pilot say there spiffing
            off his nut.
          </p>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="inline-block px-5 py-3 rounded-md mt-11 bg-green-400 text-white hover:bg-green-500 hover:text-white focus:bg-green-500 focus:text-white"
            role="button"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
