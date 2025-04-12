// About.jsx
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "../components/About.css";

const About = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="about container">
        <h1>About Us</h1>
        <div className="about-content">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Eco Travel"
          />
          <div className="text">
            <p>
              At EcoTravel, we’re passionate about sustainable travel. Our mission
              is to help you explore the world while preserving it for future
              generations.
            </p>
            <p>
              Whether it's finding green-certified stays or carbon-friendly
              routes, we’re building a community of conscious travelers. Join us
              in making travel more meaningful and impactful.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
