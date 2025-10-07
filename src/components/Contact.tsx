import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    const response = await fetch("http://localhost:3001/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Email envoyé avec succès !");
      form.reset();
    } else {
      alert("Erreur lors de l’envoi.");
    }
  };

  return (
    <section id="contact" className="section-area overflow-hidden">
      <div className="container">
        <div className="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
          <motion.h6
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.2,
            }}
            className="mb-2 block text-lg font-semibold text-primary"
          >
            Contact
          </motion.h6>
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.4,
            }}
            className="mb-6"
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.6,
            }}
          >
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </motion.p>
        </div>

        <div className="scroll-revealed row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Formulaire de contact */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="rounded-xl bg-body-light-1 dark:bg-body-dark-12/10 p-8 shadow-card-1 hover:shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      className="w-full rounded-md border border-body-light-6 dark:border-body-dark-6 bg-transparent px-4 py-3 text-body-light-11 dark:text-body-dark-11 text-base outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      className="w-full rounded-md border border-body-light-6 dark:border-body-dark-6 bg-transparent px-4 py-3 text-body-light-11 dark:text-body-dark-11 text-base outline-none focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Your Subject"
                    className="w-full rounded-md border border-body-light-6 dark:border-body-dark-6 bg-transparent px-4 py-3 text-body-light-11 dark:text-body-dark-11 text-base outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    placeholder="Your Message"
                    className="w-full resize-none rounded-md border border-body-light-6 dark:border-body-dark-6 bg-transparent px-4 py-3 text-body-light-11 dark:text-body-dark-11 text-base outline-none focus:border-primary"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-block font-medium px-6 py-3 rounded-md bg-primary text-primary-color hover:bg-primary-light-10 dark:hover:bg-primary-dark-10 focus:bg-primary-light-10 dark:focus:bg-primary-dark-10"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.2,
            }}
            className="col-span-1 md:col-span-2 lg:col-span-1"
          >
            <div className="rounded-xl bg-body-light-1 dark:bg-body-dark-12/10 p-8 shadow-card-1 hover:shadow-lg">
              <motion.h4
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: 0.4,
                }}
                className="text-xl font-semibold text-body-light-12 dark:text-body-dark-12 mb-4"
              >
                Our Information
              </motion.h4>
              <motion.p
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: 0.6,
                }}
                className="text-body-light-11 dark:text-body-dark-11 mb-6"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </motion.p>
              <motion.ul
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: 0.8,
                }}
                className="space-y-4"
              >
                <li className="flex items-start gap-4">
                  <FaLocationDot />
                  <p className="text-body-light-11 dark:text-body-dark-11">
                    Lot 1111-G305 Tsivatrinikamo, Antsirabe 110, Madagascar
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <FaEnvelope />
                  <p className="text-body-light-11 dark:text-body-dark-11">
                    sk.yitro-consulting@gmail.com
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <FaPhone />
                  <p className="text-body-light-11 dark:text-body-dark-11">
                    +261 34 92 510 45 / +261 34 53 313 87
                  </p>
                </li>
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
