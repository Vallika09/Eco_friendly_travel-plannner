// Contact.jsx
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "../components/Contact.css";

const Contact = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="contact container">
        <h1>Contact Us</h1>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
