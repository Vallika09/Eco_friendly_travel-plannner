import React from 'react';
import { Search, Calendar, Settings } from 'lucide-react';
import './App.css';

function SearchBar() {
  return (
    <div className="search-container">
      <div className="search-grid">
        <div className="search-input-wrapper">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Where to?"
            className="search-input"
          />
        </div>
        <div className="search-input-wrapper">
          <Calendar className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Travel Dates"
            className="search-input"
          />
        </div>
        <div className="search-input-wrapper">
          <Settings className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Preferences"
            className="search-input"
          />
        </div>
      </div>
      <button className="search-button">
        Search Eco-Friendly Trips
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <div 
        className="hero"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80")'
        }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">
            Explore the World,<br />Preserve Its Beauty
          </h1>
          <p className="hero-description">
            Plan your eco-friendly adventures with our sustainable travel platform.
          </p>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default App;