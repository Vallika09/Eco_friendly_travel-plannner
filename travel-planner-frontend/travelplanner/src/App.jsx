// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Destinations from "./pages/Destinations";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Login from "./pages/Login";       // ✅ Added Login page
import Register from "./pages/Register"; // ✅ Added Register page
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />         {/* ✅ Login Route */}
        <Route path="/register" element={<Register />} />   {/* ✅ Register Route */}
      </Routes>
    </Router>
  );
};

export default App;
