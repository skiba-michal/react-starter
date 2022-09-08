import React from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "@components";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<PrivateRoute />}>
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
