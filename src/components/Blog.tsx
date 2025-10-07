import { motion } from "framer-motion";
import { FaCalendar, FaEye } from "react-icons/fa6";
import { useState, useEffect } from "react";
import selectRandomObjects from "../utils/selectRandomObjects";

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  image_annexe: string[];
  category: string[];
  star: number;
  date: string;
}

const Blog = ({ blogs }) => {
  const [randomBlogs, setRandomBlogs] = useState([]);
  const NUMBER_OF_BLOGS = 3;

  useEffect(() => {
    if (blogs && blogs.length > 0) {
      const count = Math.min(NUMBER_OF_BLOGS, blogs.length);
      const selected = selectRandomObjects(blogs, count);
      setRandomBlogs(selected);
    }
  }, [blogs]);

  return (
    <section id="blog" className="section-area overflow-hidden">
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
            Blog
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
            Latest News
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
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

        <div className="scroll-revealed grid gap-8 lg:grid-cols-3">
          {randomBlogs.map((blog: Blog) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ translateY: -10 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: blog.id / 10,
                translateY: { duration: 0.2 },
              }}
              key={blog.id}
              className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl"
            >
              <div className="w-full h-48 relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition"
                />
              </div>

              <div className="flex flex-col gap-4 p-6">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:translate-y-2.5">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {blog.excerpt
                    ? `${blog.excerpt.slice(0, 120)}...`
                    : "Pas de contenu disponible..."}
                </p>
                <a
                  href={`/blog/${blog.id}`}
                  className="flex gap-1 items-center text-blue-600 font-medium hover:text-blue-800"
                >
                  <FaEye />
                  <span>Show</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-end py-8">
          <a
            href="#"
            className="px-4 py-2 bg-primary text-white rounded-md shadow-lg
                   hover:scale-110 hover:text-white hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            See more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
