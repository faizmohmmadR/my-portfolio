import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skils";
import CV from "./components/CV/CV";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import "./index.css";
import CombineHome from "./components/Home/CombineHome";
import Detail from "./components/Projects/Detail";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<CombineHome />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
