import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import type { BlogPost } from "../../types/BlogPost";
import blog1 from "../../assets/img/thumbnail/thumbnail-1.jpg";
import blog2 from "../../assets/img/thumbnail/thumbnail-2.jpg";
import blog3 from "../../assets/img/thumbnail/thumbnail-3.jpg";

const Content: React.FC = () => {
  const [blogPosts] = useState<BlogPost[]>([
    {
      id: 1,
      image: blog1,
      category: "Consulting",
      title: "Business Consulting Is Important for Every Business.",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Admin",
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
      author: "Admin",
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
      author: "Admin",
      date: "Jan 28, 2025",
      link: "blog-details.html",
    },
  ]);

  return (
    <div className="flex flex-row gap-4 justify-around items-start p-4">
      <div className="w-[45%]">
        <h1 className="text-xl">Filter</h1>
      </div>
      <div className="w-full flex flex-col gap-4">
        {blogPosts.map((post: BlogPost) => (
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
              <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
                <span>By {post.author}</span>
                <span>{post.date}</span>
              </div>
              <div className="mt-4">
                <Link
                  to={post.link}
                  className="inline-block text-indigo-600 hover:text-indigo-800 transition font-medium"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
