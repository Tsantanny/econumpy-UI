import React from "react";
import Home from "./pages/Home";
import ReactDOM from "react-dom/client";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/LoginPage";

import MapPage from "./pages/mapPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import RegisterPage from "./pages/Register";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/map" element={<MapPage/>}></Route>
      <Route path="/login" element={<LoginPage />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
