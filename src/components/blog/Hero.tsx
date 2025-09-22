const HeroBlog = () => {
  return (
    <section className="relative overflow-hidden bg-primary text-white pt-[140px] pb-[100px]">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Explore Our Blog
          </h1>
          <p className="mb-8 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
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
    </section>
  );
};

export default HeroBlog;
