const pricingPlans = [
  {
    title: "Starter",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, similique ea.",
    price: "0",
    features: [
      { text: "Cras justo odio.", included: true },
      { text: "Dapibus ac facilisis in.", included: true },
      { text: "Morbi leo risus.", included: false },
      { text: "Excepteur sint occaecat velit.", included: false },
    ],
    buttonText: "Start Free Trial",
    isExclusive: false,
  },
  {
    title: "Exclusive",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, similique ea.",
    price: "99",
    features: [
      { text: "Cras justo odio.", included: true },
      { text: "Dapibus ac facilisis in.", included: true },
      { text: "Morbi leo risus.", included: true },
      { text: "Excepteur sint occaecat velit.", included: false },
    ],
    buttonText: "Purchase Now",
    isExclusive: true,
  },
  {
    title: "Premium",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, similique ea.",
    price: "150",
    features: [
      { text: "Cras justo odio.", included: true },
      { text: "Dapibus ac facilisis in.", included: true },
      { text: "Morbi leo risus.", included: true },
      { text: "Excepteur sint occaecat velit.", included: true },
    ],
    buttonText: "Purchase Now",
    isExclusive: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-area">
      <div className="container">
        <div className="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
          <h6 className="mb-2 block text-lg font-semibold text-primary">
            Pricing
          </h6>
          <h2 className="mb-6">Pricing & Plans</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="scroll-revealed">
              <div
                className={`rounded-xl py-12 px-9 text-center shadow-card-1 hover:shadow-lg
                  ${
                    plan.isExclusive
                      ? "bg-body-light-1 dark:bg-body-dark-12/10 shadow-lg"
                      : "bg-body-light-1 dark:bg-body-dark-12/10"
                  }`}
              >
                <div>
                  <h6
                    className={`inline-block font-medium text-base mb-6 rounded-md py-2 px-8 pricing-title
                      ${
                        plan.isExclusive
                          ? "bg-primary text-primary-color"
                          : "bg-primary/10 text-primary"
                      }`}
                  >
                    {plan.title}
                  </h6>
                  <p>{plan.description}</p>
                  <div className="pt-8">
                    <h2 className="font-semibold inline-block relative pl-4 text-[55px]">
                      <span className="font-normal text-body-light-11 dark:text-body-dark-11 text-[1.25rem] absolute left-0 top-1.5">
                        $
                      </span>
                      {plan.price}
                      <span className="text-[1.125rem] inline-block text-body-light-11 dark:text-body-dark-11 font-normal">
                        /mo
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="pt-8 pb-10">
                  <a
                    href="javascript:void(0)"
                    className={`inline-block font-medium px-6 py-3 rounded-md
                      ${
                        plan.isExclusive
                          ? "bg-primary text-primary-color hover:bg-primary-light-10 dark:hover:bg-primary-dark-10 hover:text-primary-color"
                          : "bg-primary/10 text-primary hover:bg-primary hover:text-primary-color"
                      }
                      focus:bg-primary focus:text-primary-color`}
                  >
                    {plan.buttonText}
                  </a>
                </div>
                <div>
                  <ul>
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-left relative mb-3 inline-flex gap-3 w-full"
                      >
                        <i
                          className={`lni lni-checkmark-circle text-base leading-[24px] ${
                            feature.included
                              ? "text-primary"
                              : "text-body-light-11 dark:text-body-dark-11"
                          }`}
                        ></i>
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
