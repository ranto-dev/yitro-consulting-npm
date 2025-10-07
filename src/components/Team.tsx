import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import avatar1 from "../assets/img/avatar/avatar-1.jpg";
import avatar2 from "../assets/img/avatar/avatar-2.jpg";
import avatar3 from "../assets/img/avatar/avatar-3.jpg";

const teamMembers = [
  { name: "Lai Yeves", role: "Digital marketing", image: avatar1 },
  { name: "Hasina", role: "Client Support (H/R)", image: avatar2 },
  { name: "Noella", role: "UI/UX Designer", image: avatar3 },
  { name: "Pricilla", role: "Community Manager", image: avatar1 },
  { name: "Harilala Louis", role: "SEO Expert", image: avatar3 },
  { name: "Edwino", role: "Developer", image: avatar1 },
  { name: "Ranto", role: "Developer", image: avatar2 },
  { name: "Achina", role: "DevOps", image: avatar3 },
];

const Team = () => {
  return (
    <section id="team" className="section-area">
      <div className="container">
        <div className="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
          <motion.h6
            initial={{ opacity: 0, y: -110 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="mb-2 block text-lg font-semibold text-primary"
          >
            Team
          </motion.h6>
          <motion.h2
            initial={{ opacity: 0, y: -110 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            className="mb-6"
          >
            Our Creative Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -110 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
          >
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {teamMembers.map((member, index) => (
            <motion.div
              initial={{ opacity: 0, x: Math.random() > 0.5 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: index / 5 }}
              key={index}
              className="scroll-revealed"
            >
              <figure className="group rounded-xl bg-body-light-1 dark:bg-body-dark-12/10 px-5 pb-10 pt-12 shadow-card-2 hover:shadow-lg hover:-translate-y-1 duration-200 ease-in">
                <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
                  <img
                    src={member.image}
                    alt="Team picture"
                    className="h-full w-full rounded-full object-cover"
                  />
                  <span className="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-red-500 opacity-0 group-hover:opacity-100"></span>
                  <span className="absolute top-0 right-0 -z-10 h-10 w-10 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100"></span>
                </div>
                <figcaption className="text-center block">
                  <h4 className="mb-1 text-lg font-semibold text-body-light-12 dark:text-body-dark-12">
                    {member.name}
                  </h4>
                  <p className="mb-5 text-sm text-body-light-11 dark:text-body-dark-11">
                    {member.role}
                  </p>
                  <div className="flex items-center justify-center gap-5">
                    <a
                      href="javascript:void(0)"
                      className="text-body-light-10 dark:text-body-dark-10 hover:text-primary"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="text-body-light-10 dark:text-body-dark-10 hover:text-primary"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="text-body-light-10 dark:text-body-dark-10 hover:text-primary"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </figcaption>
              </figure>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
