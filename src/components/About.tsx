import { useState } from "react";
import aboutImage from "../assets/img/about-img.jpg";

const tabsData = [
  {
    id: "tabs-panel-profile",
    label: "Our Profile",
    content: (
      <>
        <p>
          Yitro-Consulting is a multidisciplinary consulting firm specializing
          in digital marketing, change management, and web development. We offer
          end-to-end support to help organizations grow, transform, and stand
          out in a competitive digital landscape. Our services range from
          strategic audits and branding to e-learning and custom application
          development.
        </p>
        <p>
          Our strength lies in our ability to merge strategy, creativity, and
          technology into impactful, measurable solutions. Backed by a team of
          passionate experts, we deliver tailor-made strategies that align with
          your goals and generate long-term results. From startups to NGOs, we
          create real digital value.
        </p>
      </>
    ),
  },
  {
    id: "tabs-panel-vision",
    label: "Our Vision",
    content: (
      <>
        <p>
          IWe believe digital transformation is not just about technology—it’s
          about people, purpose, and progress. Our vision is to build a more
          inclusive and sustainable digital future by helping organizations grow
          with intention and impact.
        </p>
        <p>
          At Yitro-Consulting, we envision a world where innovation serves
          humanity. Through our integrated approach, we empower clients to lead
          change, embrace agility, and make bold decisions that shape tomorrow's
          digital economy.
        </p>
      </>
    ),
  },
  {
    id: "tabs-panel-history",
    label: "Our History",
    content: (
      <>
        <p>
          Founded by passionate changemakers, Yitro-Consulting began as a bold
          idea: to create a consulting firm that blends tech, learning, and
          strategy to drive meaningful impact. What started as a small team has
          grown into a full-fledged digital ecosystem, serving clients across
          Africa, Europe, and North America.
        </p>
        <p>
          Over the years, we’ve evolved alongside the digital world, expanding
          our services to meet the challenges of a constantly shifting
          landscape. Today, our journey continues—guided by innovation,
          strengthened by our values, and inspired by every client we serve.
        </p>
      </>
    ),
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState("tabs-panel-profile");

  return (
    <section id="about" className="section-area">
      <div className="container">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div className="w-full">
            <figure className="scroll-revealed max-w-[480px] mx-auto">
              <img src={aboutImage} alt="About image" className="rounded-xl" />
            </figure>
          </div>
          <div className="w-full">
            <div className="scroll-revealed">
              <h6 className="mb-2 block text-lg font-semibold text-primary">
                About Us
              </h6>
              <h2 className="mb-6">
                Our team comes with the experience and knowledge
              </h2>
            </div>
            <div className="tabs scroll-revealed">
              <nav
                className="tabs-nav flex flex-wrap gap-4 my-8"
                role="tablist"
                aria-label="About us tabs"
              >
                {tabsData.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    className={`tabs-link inline-block py-2 px-4 rounded-md text-body-light-12 dark:text-body-dark-12 bg-body-light-12/10 dark:bg-body-dark-12/10 text-inherit font-medium hover:bg-primary hover:text-primary-color focus:bg-primary focus:text-primary-color ${
                      activeTab === tab.id ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                    role="tab"
                    aria-controls={tab.id}
                    aria-selected={activeTab === tab.id}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
              <div className="tabs-content mt-4">
                {tabsData.find((tab) => tab.id === activeTab)?.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
