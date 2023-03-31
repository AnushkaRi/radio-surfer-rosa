import { createBrowserRouter, RouterProvider } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";

import Login from "./pages/Login/Login";
import Redirect from "./pages/Redirect/Redirect";
import Home from "./pages/Home/Home";
import Playlist from "./pages/Playlist/Playlist";
import Layout from "./pages/Layout/Layout";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      /* {
        path: "/search",
        element: <Search />,
      },*/
      {
        path: "/playlist/:id",
        element: <Playlist />,
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
