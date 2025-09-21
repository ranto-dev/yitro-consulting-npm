import avatar4 from "../assets/img/avatar/avatar-4.jpg";
import avatar5 from "../assets/img/avatar/avatar-5.jpg";
import avatar6 from "../assets/img/avatar/avatar-6.jpg";

const testimonials = [
  {
    quote:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    name: "Ralf Nacht",
    role: "Web Entrepreneur",
    image: avatar4,
  },
  {
    quote:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    name: "Sebastian Toft",
    role: "Web Developer",
    image: avatar5,
  },
  {
    quote:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    name: "Bao Shen",
    role: "UI/UX Designer",
    image: avatar6,
  },
  {
    quote:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    name: "Achina",
    role: "DevOps",
    image: avatar4,
  },
  {
    quote:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    name: "Noella",
    role: "UI/UX Designer",
    image: avatar6,
  },
];

  return (
    <section id="testimonials" className="section-area">
      <div className="container">
        <div className="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
          <h6 className="mb-2 block text-lg font-semibold text-primary">
            Client Reviews
          </h6>
          <h2 className="mb-6">Our Testimonials</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="swiper testimonial-carousel common-carousel scroll-revealed">
          <div className="swiper-wrapper">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="swiper-slide">
                <div className="rounded-xl bg-body-light-1 dark:bg-body-dark-12/10 px-5 py-8 shadow-card-2 sm:px-8">
                  <p className="mb-6 text-base text-body-light-11 dark:text-body-dark-11">
                    "{testimonial.quote}"
                  </p>
                  <figure className="flex items-center gap-4">
                    <div className="h-[50px] w-[50px] overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt="Testimonial picture"
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>
                    <figcaption className="flex-grow">
                      <h3 className="text-sm font-semibold text-body-light-11 dark:text-body-dark-11">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs text-body-light-10 dark:text-body-dark-10">
                        {testimonial.role}
                      </p>
                    </figcaption>
                  </figure>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
