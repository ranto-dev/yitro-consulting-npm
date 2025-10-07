import { motion } from "framer-motion";
import { FaCalendar, FaEye } from "react-icons/fa6";

interface BlogPost {
  id: number;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  link: string;
}

const Blog = ({ blogs }) => {
  return (
    <section>
      <div className="w-full grid md:grid-cols-2 gap-6 lg:grid-cols-3 p-6">
        {blogs.map((blog) => (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: blog.id / 100,
            }}
            whileHover={{ scale: 1.02 }}
            key={blog.id}
            className="flex flex-col gap-6 rounded-xl bg-blue-500/10 shadow-xl relative group overflow-hidden"
          >
            <div className="w-full relative">
              <div
                className={`p-1 rounded-lg absolute top-0 left-0 w-full h-full flex gap-2 justify-center items-center z-20 
                 opacity-0 group-hover:opacity-100 
                 transform translate-y-4 group-hover:translate-y-0
                 transition-all duration-300 ease-in-out`}
              >
                <a
                  href={`#`}
                  className={`bg-black/40 cursor-pointer text-blue-500 p-2 rounded-full text-lg 
                    transition duration-300 hover:bg-black/70 flex justify-center items-center gap-2`}
                >
                  <FaEye />
                  <span>Voir plus</span>
                </a>
              </div>
              <img
                src={blog.image}
                alt={"image du publication n°" + blog.id}
                className={`w-full h-[300px] rounded-t-xl object-cover border-none 
                  transition-all duration-300 ease-in-out 
                  group-hover:blur-xs`}
              />
            </div>
            <div className="space-y-4 p-4">
              <p className="text-2xl">{blog.title}</p>
              <p>
                {blog.excerpt.slice(0, 100)}
                {blog.excerpt.length <= 100 ? null : "..."}
              </p>
              <div className="flex justify-between items-center">
                <p>{"⭐".repeat(blog.star)}</p>
                <p className="flex gap-2 justify-center items-center text-gray-500">
                  <FaCalendar /> {blog.datePublication}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
