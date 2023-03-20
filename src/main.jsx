import { createBrowserRouter, RouterProvider } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login/Login";
import Redirect from "./pages/Redirect/Redirect";
import Home from "./pages/Home/Home";
import "./index.css";
import Layout from "./components/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    element: <Layout />,
    children: [
      {
        element: <Home />,
      },
    ],
  },

  {
    path: "/redirect",
    element: <Redirect />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// Refresh Token
// when entering Layout in URL is written: http://127.0.0.1:5173/redirect#
