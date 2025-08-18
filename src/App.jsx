import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorElement } from "./components/ErrorElement";
import Spinner from "./components/Spinner";

const HomePage = lazy(() => import("./pages/HomePage"));
const Projects = lazy(() => import("./pages/Projects"));

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorElement />,
    loader: Spinner,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="select-none scroll-smooth">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
