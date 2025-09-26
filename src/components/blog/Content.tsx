import React, { useState } from "react";
import type { BlogPost } from "../../types/BlogPost";
import blog1 from "../../assets/img/thumbnail/thumbnail-1.jpg";
import blog2 from "../../assets/img/thumbnail/thumbnail-2.jpg";
import blog3 from "../../assets/img/thumbnail/thumbnail-3.jpg";
import { FaSearch, FaTimes } from "react-icons/fa";
import BlogDetails from "./BlogDetails";

const Content: React.FC = () => {
  const [blogPosts] = useState<BlogPost[]>([
    {
      id: 1,
      image: blog1,
      category: "Consulting",
      title: "Business Consulting Is Important for Every Business.",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "Jan 28, 2025",
    },
    {
      id: 2,
      image: blog2,
      category: "Finance",
      title: "Top 5 Tips for Better Financial Planning.",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "Jan 28, 2025",
    },
    {
      id: 3,
      image: blog3,
      category: "Business",
      title: "How to Grow Your Business with Digital Marketing.",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "Jan 28, 2025",
    },
    {
      id: 4,
      image: blog1,
      category: "Consulting",
      title: "Business Consulting Is Important for Every Business.",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "Jan 28, 2025",
    },
    {
      id: 5,
      image: blog2,
      category: "Finance",
      title: "Top 5 Tips for Better Financial Planning.",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "Jan 28, 2025",
    },
    {
      id: 6,
      image: blog3,
      category: "Business",
      title: "How to Grow Your Business with Digital Marketing.",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "Jan 28, 2025",
    },
  ]);

  const [display, setDisplay] = useState<boolean>(false);

  const handleModal = () => {
    setDisplay(!display);
  };

  return (
    <div>
      <div className="flex justify-between text-md p-4">
        <div className="flex">
          <input
            type="text"
            className="w-full border rounded-full p-4"
            placeholder="Search ..."
          />
          <button className="relative right-10">
            <FaSearch className="text-2xl" />
          </button>
        </div>
        <div>
          <label htmlFor="">Filter : </label>
          <select id="filter" className="border rounded-full p-4 text-lg">
            <option value="all">All</option>
            <option value="consulting">Consulting</option>
            <option value="finance">Finance</option>
            <option value="business">Business</option>
          </select>
        </div>
      </div>
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {blogPosts.map((post) => (
          <>
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 ease-in-out"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-gray-500 uppercase font-semibold">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold my-2">{post.title}</h2>
                <p className="text-gray-600 text-sm">{post.excerpt}</p>
                <div className="flex justify-end items-center mt-4 text-sm text-gray-400">
                  <span>{post.date}</span>
                </div>
                <div className="mt-4">
                  <button
                    onClick={handleModal}
                    className="inline-block text-indigo-600 hover:text-indigo-800 transition font-medium"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`absolute z-50 bg-primary p-8 m-auto ${
                display === true ? "block" : "hidden"
              } `}
            >
              <div className="modal-content w-[100%]">
                <div className="flex justify-end">
                  <button onClick={handleModal}>
                    <FaTimes />
                  </button>
                </div>
                <div className="modal-body">
                  <BlogDetails post={post} />
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Content;
