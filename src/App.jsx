// src/App.jsx
import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import IndividualStockInfo from "./pages/IndividualStockInfo";
import Navbar from "./components/Navbar";
import { ScrollBar } from "./components/ScrollBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stock/:symbol" element={<IndividualStockInfo />} />
      </Routes>
    </div>
  );
}

export default App;
