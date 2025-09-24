import { Link } from "react-router-dom";
import blog1 from "../../assets/img/thumbnail/thumbnail-1.jpg";
import blog2 from "../../assets/img/thumbnail/thumbnail-2.jpg";
import blog3 from "../../assets/img/thumbnail/thumbnail-3.jpg";
import { useState } from "react";
import type { BlogPost } from "../../types/BlogPost";
import { FaCalendarDay, FaUser } from "react-icons/fa6";

const Blog = () => {
  const [blogPosts] = useState<BlogPost[]>([
    {
      id: 1,
      image: blog1,
      category: "Consulting",
      title: "Business Consulting Is Important for Every Business.",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "Jan 28, 2025",
      link: "blog-details.html",
    },
    {
      id: 2,
      image: blog2,
      category: "Finance",
      title: "Top 5 Tips for Better Financial Planning.",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "Jan 28, 2025",
      link: "blog-details.html",
    },
    {
      id: 3,
      image: blog3,
      category: "Business",
      title: "How to Grow Your Business with Digital Marketing.",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "Jan 28, 2025",
      link: "blog-details.html",
    },
  ]);
  return (
    <section id="blog" className="section-area">
      <div className="container">
        <div className="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
          <h6 className="mb-2 block text-lg font-semibold text-primary">
            Blog
          </h6>
          <h2 className="mb-6">Latest News</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="scroll-revealed grid gap-8 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="rounded-xl bg-body-light-1 dark:bg-body-dark-12/10 p-6 shadow-card-1 hover:shadow-lg"
            >
              <div className="group relative mb-6 overflow-hidden rounded-xl">
                <a href={post.link} className="block">
                  <img
                    src={post.image}
                    alt="image du blog"
                    className="w-full h-auto transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                </a>
                <span className="absolute bottom-6 right-6 inline-block rounded-lg bg-primary-light-3 dark:bg-primary-dark-3 py-1 px-4 text-xs font-semibold uppercase text-primary">
                  {post.category}
                </span>
              </div>
              <div className="p-2">
                <h3 className="mb-2">
                  <a
                    href={post.link}
                    className="block text-xl font-bold text-body-light-12 dark:text-body-dark-12 hover:text-primary transition-colors duration-300"
                  >
                    {post.title}
                  </a>
                </h3>
                <p className="text-base text-body-light-11 dark:text-body-dark-11 mb-4">
                  {post.excerpt}
                </p>
                <ul className="flex flex-wrap items-center gap-4 text-base text-body-light-11 dark:text-body-dark-11">
                  <li className="flex items-center gap-2">
                    <FaCalendarDay className="text-primary text-xl" />
                    <span>{post.date}</span>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end py-8">
          <Link
            to="/blog"
            className="px-4 py-2 bg-primary text-white rounded-md shadow-lg
                   hover:scale-110 hover:text-white hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            See more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
