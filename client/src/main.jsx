import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./reset.css";
import "./index.css";

import App from "./App";


// Import pages:
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import MilestonePage from "./pages/MilestonePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>error</h1>,
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: "/:section",
        element: <HomePage/>
      },
      {
        path: "/contact",
        element: <ContactPage/>
      },
      {
        path: "/milestones",
        element: <MilestonePage/>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

      <RouterProvider router={router} />

  </React.StrictMode>
);
