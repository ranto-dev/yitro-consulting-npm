//import type { BlogPost } from "../../types/BlogPost";

export default function BlogDetails({ post }) {
  return (
    <div className="w-full">
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
      </div>
    </div>
  );
}
