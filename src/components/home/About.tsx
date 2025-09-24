import { useState } from "react";
import aboutImage from "../../assets/img/about-img.jpg";
import traduction from "../../traduction/about.json";


interface lang {
  lang: string;
}

const About = ({ lang }: lang) => {
  const [tabsData, _] = useState([
    {
      id: "tabs-panel-profile",
      label: <>
        {lang == "eng" && traduction['eng']['our_profile']}
        {lang == "fr" && traduction['fr']['our_profile']}
      </>,
      content: (
        <>
          <p>
            {lang == "eng" && traduction['eng']['our_profile_1']}
            {lang == "fr" && traduction['fr']['our_profile_1']}
          </p>
          <p>
            {lang == "eng" && traduction['eng']['our_profile_2']}
            {lang == "fr" && traduction['fr']['our_profile_2']}
          </p>
        </>
      ),
    },
    {
      id: "tabs-panel-vision",
      label: <>
      {lang == "eng" && traduction['eng']['our_vision']}
      {lang == "fr" && traduction['fr']['our_vision']}
    </>,
      content: (
        <>
          <p>
            {lang == "eng" && traduction['eng']['our_vision_1']}
            {lang == "fr" && traduction['fr']['our_vision_1']}
          </p>
          <p>
            {lang == "eng" && traduction['eng']['our_vision_2']}
            {lang == "fr" && traduction['fr']['our_vision_2']}
          </p>
        </>
      ),
    },
    {
      id: "tabs-panel-history",
      label: <>
      {lang == "eng" && traduction['eng']['our_history']}
      {lang == "fr" && traduction['fr']['our_history']}
    </>,
      content: (
        <>
          <p>
            {lang == "eng" && traduction['eng']['our_history_1']}
            {lang == "fr" && traduction['fr']['our_history_1']}
          </p>
          <p>
            {lang == "eng" && traduction['eng']['our_history_2']}
            {lang == "fr" && traduction['fr']['our_history_2']}
          </p>
        </>
      ),
    },
  ])
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
              {lang == "eng" && traduction['eng']['about_us']}
              {lang == "fr" && traduction['fr']['about_us']}
              </h6>
              <h2 className="mb-6">
              {lang == "eng" && traduction['eng']['about_paragraphe']}
              {lang == "fr" && traduction['fr']['about_paragraphe']}
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
                    className={`tabs-link inline-block py-2 px-4 rounded-md text-body-light-12 dark:text-body-dark-12 bg-body-light-12/10 dark:bg-body-dark-12/10 text-inherit font-medium hover:bg-primary hover:text-primary-color focus:bg-primary focus:text-primary-color ${activeTab === tab.id ? "active" : ""
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
