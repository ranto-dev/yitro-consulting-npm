import Blog from "./pages/client/Blog";
import Home from "./pages/client/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home />
        </>
      ),
    },
    {
      path: "/blog",
      element: (
        <>
          <Blog />
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
