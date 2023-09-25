import { createBrowserRouter, RouterProvider } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";

import Login from "./pages/Login/Login";
import Redirect from "./pages/Redirect/Redirect";
import Home from "./pages/Home/Home";
import Artist from "./pages/Artist/Artist";
import Album from "./pages/Album/Album";
import Playlist from "./pages/Playlist/Playlist";
import Search from "./pages/Search/Search";
import Layout from "./pages/Layout/Layout";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },

  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/artist/:id",
        element: <Artist />,
      },
      {
        path: "/album/:id",
        element: <Album />,
      },
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
  </React.StrictMode>
);
