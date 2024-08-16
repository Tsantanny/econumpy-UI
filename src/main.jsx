import React from "react";
import Home from "./pages/Home";
import ReactDOM from "react-dom/client";
import { LoginPage } from "./pages/LoginPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<LoginPage />}/>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);