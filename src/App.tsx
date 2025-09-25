import { useState } from "react";
import AllBlogs from "./pages/client/Blog";
import Home from "./pages/client/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
  const [lang, setLang] = useState("eng");

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
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
