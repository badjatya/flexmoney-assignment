import React from "react";
import { Routes, Route } from "react-router-dom";

// Importing Pages
import { Home, Enroll } from "./App/pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/enroll" element={<Enroll />} />
    </Routes>
  );
};

export default App;
