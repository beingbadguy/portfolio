import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutPage from "./layout/LayoutPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import ProjectPage from "./pages/ProjectPage.tsx";
import WorkPage from "./pages/WorkPage.tsx";
import BlogPage from "./pages/BlogPage.tsx";
import SocialPage from "./pages/SocialPage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import EducationPage from "./pages/EducationPage.tsx";
import { Analytics } from "@vercel/analytics/react";
// import ClickBurst from "./components/ClickBurst.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/projects", element: <ProjectPage /> },
      { path: "/education", element: <EducationPage /> },

      { path: "/work", element: <WorkPage /> },
      { path: "/blogs", element: <BlogPage /> },
      { path: "/socials", element: <SocialPage /> },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <ClickBurst /> */}
    <Analytics />
  </StrictMode>
);
