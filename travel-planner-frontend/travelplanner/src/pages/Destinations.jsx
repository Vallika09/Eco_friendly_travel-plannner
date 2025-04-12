// Destinations.jsx
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "../components/Destinations.css";

const cities = [
  {
    name: "Indore",
    description: "Cleanest city in India with growing green initiatives.",
    image: "https://media.istockphoto.com/id/668729904/photo/jahaz-mahal-ship-palace-in-mandu-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=fqmOft6hdIRLaghgP_tL4g0-i3ujU2bXKRKUK8KiIh0=",
  },
  {
    name: "Mumbai",
    description: "Experience coastal charm with sustainability projects in action.",
    image: "https://media.istockphoto.com/id/1390163309/photo/beautiful-gateway-of-india-near-taj-palace-hotel-on-the-mumbai-harbour-with-many-jetties-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=bEMo0pOTW9Ksg5ybFwQQmL6GhR3CQsBXty_nei4yImY=",
  },
  {
    name: "Delhi",
    description: "Blend of heritage and new eco-urban innovations.",
    image: "https://media.istockphoto.com/id/898467608/photo/the-india-gate-in-delhi.webp?a=1&b=1&s=612x612&w=0&k=20&c=WTnCHnh39Pc5mmkWsHr1Hv4QZcViyAIc2v7__YsPfAE=",
  },
  {
    name: "Kolkata",
    description: "Cultural capital leading green public transport shifts.",
    image: "https://media.istockphoto.com/id/1164306206/photo/the-calcutta-high-court-is-the-oldest-high-court-in-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=HDWc75UwCbJu6n1k-2s18wBfSsJSEpMFWEOxA06SoUM=",
  },
  
];

const Destinations = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="destinations container">
        <h1>Explore Destinations</h1>
        <p>Discover eco-friendly cities across India curated for conscious travelers.</p>
        <div className="destination-grid">
          {cities.map((city, index) => (
            <div className="destination-card" key={index}>
              <img src={city.image} alt={city.name} />
              <h3>{city.name}</h3>
              <p>{city.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Destinations;
