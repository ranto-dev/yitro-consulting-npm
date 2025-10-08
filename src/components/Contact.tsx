import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

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
      alert(t("contact.form.success"));
      form.reset();
    } else {
      alert(t("contact.form.error"));
    }
  };

  return (
    <section id="contact" className="section-area overflow-hidden">
      <div className="container">
        <div className="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
          <motion.h6
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="mb-2 block text-lg font-semibold text-primary"
          >
            {t("contact.sectionTitleSmall")}
          </motion.h6>
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            className="mb-6"
          >
            {t("contact.sectionTitleBig")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
          >
            {t("contact.sectionDescription")}
          </motion.p>
        </div>

        <div className="scroll-revealed row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="rounded-xl bg-body-light-1 dark:bg-body-dark-12/10 p-8 shadow-card-1 hover:shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder={t("contact.form.name")}
                    className="w-full rounded-md border border-body-light-6 dark:border-body-dark-6 bg-transparent px-4 py-3 text-base text-body-light-11 dark:text-body-dark-11 outline-none focus:border-primary"
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder={t("contact.form.email")}
                    className="w-full rounded-md border border-body-light-6 dark:border-body-dark-6 bg-transparent px-4 py-3 text-base text-body-light-11 dark:text-body-dark-11 outline-none focus:border-primary"
                  />
                </div>
                <div className="flex flex-col gap-6">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder={t("contact.form.subject")}
                    className="w-full rounded-md border border-body-light-6 dark:border-body-dark-6 bg-transparent px-4 py-3 text-base text-body-light-11 dark:text-body-dark-11 outline-none focus:border-primary"
                  />
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    placeholder={t("contact.form.message")}
                    className="w-full resize-none rounded-md border border-body-light-6 dark:border-body-dark-6 bg-transparent px-4 py-3 text-base text-body-light-11 dark:text-body-dark-11 outline-none focus:border-primary"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-block font-medium px-6 py-3 rounded-md bg-primary text-primary-color hover:bg-primary-light-10 dark:hover:bg-primary-dark-10 focus:bg-primary-light-10 dark:focus:bg-primary-dark-10"
                  >
                    {t("contact.form.send")}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="col-span-1 md:col-span-2 lg:col-span-1"
          >
            <div className="rounded-xl bg-body-light-1 dark:bg-body-dark-12/10 p-8 shadow-card-1 hover:shadow-lg">
              <motion.h4
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
                className="text-xl font-semibold text-body-light-12 dark:text-body-dark-12 mb-4"
              >
                {t("contact.info.title")}
              </motion.h4>
              <motion.p
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
                className="text-body-light-11 dark:text-body-dark-11 mb-6"
              >
                {t("contact.info.description")}
              </motion.p>
              <motion.ul
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
                className="space-y-4"
              >
                <li className="flex items-start gap-4">
                  <FaLocationDot />
                  <p className="text-body-light-11 dark:text-body-dark-11">
                    {t("contact.info.address")}
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <FaEnvelope />
                  <p className="text-body-light-11 dark:text-body-dark-11">
                    {t("contact.info.email")}
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <FaPhone />
                  <p className="text-body-light-11 dark:text-body-dark-11">
                    {t("contact.info.phone")}
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
