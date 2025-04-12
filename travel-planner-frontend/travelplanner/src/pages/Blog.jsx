// Blog.jsx
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "../components/Blog.css";

const Blog = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="blog container">
        <h1>Our Blog</h1>
        <p>Tips, stories, and insights about sustainable travel.</p>
        <div className="blog-posts">
          {/* Example blog cards */}
          <div className="blog-card">
            <h3>10 Ways to Travel Greener</h3>
            <p>
              Discover simple ways to reduce your carbon footprint while exploring the world.
            </p>
            <a href="#">Read More →</a>
          </div>
          <div className="blog-card">
            <h3>Local Voices: Why Community Matters</h3>
            <p>
              Hear from locals about how responsible tourism is helping their regions grow.
            </p>
            <a href="#">Read More →</a>
          </div>
          {/* You can later map through blog data */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
