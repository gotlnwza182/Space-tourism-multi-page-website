import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Destination from "./pages/Destination.tsx";
import Crew from "./pages/Crew.tsx";
import Technology from "./pages/Technology.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "destination",
    element: <Destination />,
  },
  {
    path: "crew",
    element: <Crew />,
  },
  {
    path: "technology",
    element: <Technology />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
