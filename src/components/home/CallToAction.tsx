import traduction from "../../traduction/calltoaction.json";
interface lang {
  lang: string
}
const CallToAction = ({lang}: lang) => {
  return (
    <section
      id="call-action"
      className="section-area !bg-primary !text-primary-color"
    >
      <div className="container">
        <div className="scroll-revealed text-center max-w-[550px] mx-auto">
          <h2 className="mb-8 text-inherit">
            <>
              {lang == "eng" && traduction['eng']['call_to_action_title']}
              {lang == "fr" && traduction['fr']['call_to_action_title']}
            </>
          </h2>
          <p>
          <>
              {lang == "eng" && traduction['eng']['call_to_action_paragraphe']}
              {lang == "fr" && traduction['fr']['call_to_action_paragraphe']}
            </>
          </p>
          <a
            href="#contact"
            className="inline-block px-5 py-3 rounded-md mt-11 bg-green-400 text-white hover:bg-green-500 hover:text-white focus:bg-green-500 focus:text-white"
            role="button"
          >
            <>
              {lang == "eng" && traduction['eng']['call_to_action_btn']}
              {lang == "fr" && traduction['fr']['call_to_action_btn']}
            </>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
