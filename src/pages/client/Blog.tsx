import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import type { BlogPost } from "../../types/BlogPost";
import blog1 from "../../assets/img/thumbnail/thumbnail-1.jpg";
import blog2 from "../../assets/img/thumbnail/thumbnail-2.jpg";
import blog3 from "../../assets/img/thumbnail/thumbnail-3.jpg";
import NavbarBlog from "../../components/blog/NavbarBlog";
import HeroBlog from "../../components/blog/HeroBlog";
import Content from "../../components/blog/Content";

const AllBlogs: React.FC = () => {
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
    <>
      <NavbarBlog />
      <HeroBlog />
      <Content />
    </>
  );
};

export default AllBlogs;
