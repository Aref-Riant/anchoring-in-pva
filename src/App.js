import React, { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Greet from "./pages/greet";
import RegForm from "./pages/regform";
import Demo from "./pages/demo";
import Test from "./pages/test";
import Thanks from "./pages/thanks";
import Training from "./pages/training";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greet />} />
        <Route path="/form" element={<RegForm />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/demotraining" element={<Training />} />
        <Route path="/test" element={<Test />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
