import { FaPlusCircle } from "react-icons/fa";
import Content from "../../components/blog/Content";

export default function Dashboard() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center p-4">
        <div>
          <h1 className="text-sm">Blog Admin</h1>
        </div>
        <div>
          <button className="flex justify-center items-center gap-2 bg-primary overflow-hidden rounded-full p-4 text-white text-sm">
            <FaPlusCircle />
            New Post
          </button>
        </div>
      </div>
      <div>
        <div className="text-center">
          <h1>All Posts</h1>
          <Content />
        </div>
      </div>
    </div>
  );
}
