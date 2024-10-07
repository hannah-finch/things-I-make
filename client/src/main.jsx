import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";

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
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
