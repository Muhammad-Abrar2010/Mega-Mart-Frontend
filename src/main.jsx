import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import Firebaseprovider from "./Pages/Firebase/Firebaseprovider";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Firebaseprovider>
      <RouterProvider router={Router}></RouterProvider>
    </Firebaseprovider>
  </StrictMode>
);
