import { FaStar } from "react-icons/fa6";
import Illustation from "../../assets/img/blog/shape-14.svg";
import { motion } from "framer-motion";

const HeroBlog = () => {
  return (
    <section className="relative overflow-hidden bg-primary rounded-br-full text-white pt-[140px] pb-[100px]">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Explore Our Blog
          </h1>
          <p
            className="mb-8 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
            style={{ zIndex: 1 }}
          >
            Stay updated with the latest insights, trends, and tips from our
            team of experts.
          </p>
          <a
            href="#blogs"
            className="inline-block mt-4 px-8 py-3 bg-white text-purple-700 font-semibold rounded-full shadow-lg hover:scale-105 transition transform duration-300"
          >
            Browse Articles
          </a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0, rotate: -20 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute border rounded-full p-4 top-[8rem] left-[4rem]"
      >
        <FaStar className="text-2xl" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative top-10 border rounded-full p-4"
      ></motion.div>

      <motion.img
        initial={{ opacity: 0, y: -2000 }}
        animate={{ opacity: 1.5, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="w-[15%] absolute -bottom-3 right-32"
        style={{ zIndex: 0 }}
        src={Illustation}
        alt="illustration"
      />
    </section>
  );
};

export default HeroBlog;
