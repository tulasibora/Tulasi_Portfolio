import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./Component/About/About";
import { Tulasi } from "./Component/Home/Tulasi";
import Contact from "./Component/Contact/Contact";
import PortFolio from "./Component/PortFolio/PortFolio";
import Skills from "./Component/Skills/Skills";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Tulasi />} />
      <Route path="about" element={<About />} />
      <Route path="portfolio" element={<PortFolio />} />
      <Route path="Skills" element={<Skills />} />
      <Route path="contactme" element={<Contact />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
