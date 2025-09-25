import { useState } from "react";
import AllBlogs from "./pages/client/Blog";
import Home from "./pages/client/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogDetails from "./pages/client/BlogDetails";

export default function App() {
  const [lang, setLang] = useState("eng");

  const handleChangeLang = (): void => {
    setLang(lang === "eng" ? "fr" : "eng");
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home lang={lang} />
        </>
      ),
    },
    {
      path: "/blog",
      element: (
        <>
          <AllBlogs lang={lang} />
        </>
      ),
    },
    {
      path: "/blog/details",
      element: (
        <>
          <BlogDetails lang={lang} />
        </>
      ),
    },
  ]);

  return (
    <>
      <div>
        <button
             onClick={handleChangeLang}
             className={`fixed bottom-8 left-8 z-[99] w-12 h-12 rounded-full bg-primary border border-white text-white flex items-center justify-center transition-all duration-30`}
             data-web-trigger="scroll-top"
             aria-label="Scroll to top"
           >
             { lang }
           </button>
      </div>
      <RouterProvider router={router}></RouterProvider>{" "}
    </>
  );
}
