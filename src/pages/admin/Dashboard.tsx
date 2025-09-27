import { FaPlusCircle } from "react-icons/fa";
import Content from "../../components/blog/Content";

export default function Dashboard() {
  return (
    <div className="w-full">
      <div
        className="flex justify-between items-center bg-primary p-4 sticky top-0 shadow-[2rem]"
        style={{ borderBottom: "1rem" }}
      >
        <div>
          <h1 className="text-sm text-white">Blog Admin</h1>
        </div>
        <div>
          <button className="flex justify-center items-center gap-2 border border-white rounded-full p-4 text-white text-sm">
            <FaPlusCircle />
            New Post
          </button>
        </div>
      </div>
      <div>
        <div className="text-center my-10">
          <h1>All Posts</h1>
          <Content />
        </div>
      </div>
    </div>
  );
}
