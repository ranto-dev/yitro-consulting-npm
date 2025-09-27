import { FaSignInAlt } from "react-icons/fa";
import type { lang } from "../../components/home/Portfolio";

export default function Login({ lang }: lang) {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <span className="hidden">{lang}</span>
      <form method="post" className="w-[35%] p-8 flex flex-col gap-4 border rounded-2xl shadow-2xl">
        <div>
          <h1 className="text-center">Login page</h1>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="username">username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="rounded-full border w-full p-4"
            />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input
              type="text"
              name="password"
              id="password"
              className="rounded-full border w-full p-4"
            />
          </div>
        </div>
        <div>
          <button type="submit" className="flex justify-center items-center gap-2 rounded-full p-4 bg-primary text-white text-sm">
            <FaSignInAlt />
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
