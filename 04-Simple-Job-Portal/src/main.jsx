import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs.jsx";
import Blogs from "./Components/Blogs/Blogs.jsx";
import Jobs from "./Components/Jobs/Jobs.jsx";
import Statistics from "./Components/Statistics/Statistics.jsx";
import JobDetails from "./Components/JobDetails/JobDetails.jsx";
import ApplySuccess from "./Components/ApplySuccess/ApplySuccess.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },

      {
        path: "/job/:id",
        loader: () => fetch("../Jobs.json"),
        element: <JobDetails></JobDetails>,
      },
      {
        path: "/success",
        element: <ApplySuccess></ApplySuccess>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
