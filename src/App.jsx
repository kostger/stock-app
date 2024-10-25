// src/App.jsx
import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import IndividualStockInfo from "./pages/IndividualStockInfo";
import Navbar from "./components/Navbar";
import { ScrollBar } from "./components/ScrollBar";
import AboutScreen from "./pages/AboutScreen";
import Footer from "./components/Footer";
import WatchlistScreen from "./pages/WatchlistScreen";
import { ContactScreen } from "./pages/ContactScreen";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollBar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stock/:symbol" element={<IndividualStockInfo />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/watchlist" element={<WatchlistScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
