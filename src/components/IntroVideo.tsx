import { FaPlay } from "react-icons/fa6";
import introVideoImage from "../assets/img/intro-video.jpg";
import { motion } from "framer-motion";

const IntroVideo = () => {
  return (
    <section id="intro" className="section-area">
      <div className="container">
        <div className="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
          <motion.h6
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="mb-2 block text-lg font-semibold text-primary"
          >
            Intro Video
          </motion.h6>
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            className="mb-6"
          >
            Watch Our Intro Video
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
          >
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="scroll-revealed relative max-w-[900px] mx-auto"
        >
          <img
            src={introVideoImage}
            alt="Intro video"
            className="w-full h-full aspect-video rounded-xl object-cover"
          />
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            target="blank"
            href="https://www.youtube.com/watch?v=our_video_id"
            className="video-popup w-[80px] h-[80px] rounded-full inline-flex items-center justify-center bg-primary text-primary-color text-[1.875rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md hover:bg-primary-color hover:text-primary hover:shadow-xl focus:bg-primary-color focus:text-primary focus:shadow-xl"
          >
            <FaPlay />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroVideo;
