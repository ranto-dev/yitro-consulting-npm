import { FaLocationArrow } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-body-light-1 dark:bg-body-dark-12/10 pt-20 lg:pt-24 pb-8 border-t border-body-light-6 dark:border-body-dark-6">
      <div className="container">
        <div className="row flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-4/12 px-4 mb-10 md:mb-0">
            <div className="scroll-revealed mb-4">
              <a href="#">Yitro-consulting</a>
            </div>
            <p className="scroll-revealed text-base text-body-light-11 dark:text-body-dark-11 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="scroll-revealed flex items-center space-x-4">
              <li>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-body-light-2 dark:bg-body-dark-2 text-primary hover:bg-primary hover:text-primary-color"
                >
                  <i className="lni lni-facebook-fill"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-body-light-2 dark:bg-body-dark-2 text-primary hover:bg-primary hover:text-primary-color"
                >
                  <i className="lni lni-twitter-original"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-body-light-2 dark:bg-body-dark-2 text-primary hover:bg-primary hover:text-primary-color"
                >
                  <i className="lni lni-instagram-original"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-body-light-2 dark:bg-body-dark-2 text-primary hover:bg-primary hover:text-primary-color"
                >
                  <i className="lni lni-linkedin-fill"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/12 px-4 mb-10 md:mb-0">
            <h4 className="scroll-revealed text-xl font-semibold text-body-light-12 dark:text-body-dark-12 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li className="scroll-revealed">
                <a
                  href="#about"
                  className="text-base text-body-light-11 dark:text-body-dark-11 hover:text-primary"
                >
                  About Us
                </a>
              </li>
              <li className="scroll-revealed">
                <a
                  href="#services"
                  className="text-base text-body-light-11 dark:text-body-dark-11 hover:text-primary"
                >
                  Services
                </a>
              </li>
              <li className="scroll-revealed">
                <a
                  href="#portfolio"
                  className="text-base text-body-light-11 dark:text-body-dark-11 hover:text-primary"
                >
                  Portfolio
                </a>
              </li>
              <li className="scroll-revealed">
                <a
                  href="#pricing"
                  className="text-base text-body-light-11 dark:text-body-dark-11 hover:text-primary"
                >
                  Pricing
                </a>
              </li>
              <li className="scroll-revealed">
                <a
                  href="#contact"
                  className="text-base text-body-light-11 dark:text-body-dark-11 hover:text-primary"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-3/12 px-4 mb-10 md:mb-0">
            <h4 className="scroll-revealed text-xl font-semibold text-body-light-12 dark:text-body-dark-12 mb-4">
              Support
            </h4>
            <ul className="space-y-2">
              <li className="scroll-revealed">
                <a
                  href="#"
                  className="text-base text-body-light-11 dark:text-body-dark-11 hover:text-primary"
                >
                  Help Center
                </a>
              </li>
              <li className="scroll-revealed">
                <a
                  href="#"
                  className="text-base text-body-light-11 dark:text-body-dark-11 hover:text-primary"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="scroll-revealed">
                <a
                  href="#"
                  className="text-base text-body-light-11 dark:text-body-dark-11 hover:text-primary"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-3/12 px-4 mb-10 md:mb-0">
            <h4 className="scroll-revealed text-xl font-semibold text-body-light-12 dark:text-body-dark-12 mb-4">
              Subscribe
            </h4>
            <p className="scroll-revealed text-base text-body-light-11 dark:text-body-dark-11 mb-4">
              Receive our latest news and updates.
            </p>
            <form className="scroll-revealed flex">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-l-md border border-body-light-6 dark:border-body-dark-6 bg-transparent px-4 py-3 text-body-light-11 dark:text-body-dark-11 text-base outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="rounded-r-md px-6 bg-primary text-primary-color hover:bg-primary-light-10 dark:hover:bg-primary-dark-10"
              >
                <FaLocationArrow />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-body-light-1 dark:bg-body-dark-12/10 pt-8 mt-12 text-center">
        <div className="container">
          <p className="text-sm text-body-light-11 dark:text-body-dark-11">
            © 2025 Yitro Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
