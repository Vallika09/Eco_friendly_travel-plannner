"use client"

import { useState } from "react";
import "./SearchForm.css";

const cities = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", "Pune",
  "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam",
  "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Meerut", "Faridabad",
  "Rajkot", "Varanasi", "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Allahabad",
  "Ranchi", "Coimbatore", "Jodhpur", "Guwahati", "Gwalior", "Chandigarh", "Solapur",
  "Hubli", "Tiruchirappalli", "Kota", "Salem", "Bhubaneswar", "Mysore", "Jalandhar",
  "Guntur", "Bikaner", "Jamshedpur", "Warangal", "Cuttack", "Ujjain", "Belgaum", "Ajmer",
  "Jhansi", "Ulhasnagar", "Dehradun", "Nellore", "Tirunelveli", "Muzaffarpur", "Hosur",
  "Moradabad", "Gaya", "Udaipur", "Mathura", "Ambala", "Siliguri", "Nanded", "Imphal",
  "Shillong", "Noida", "Thrissur"
];

const SearchForm = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    travelers: "1",
    ecoOptions: {
      ecoRoute: false,
      carbonOffset: false,
      publicTransport: false,
      ecoHotels: false,
      bikeFriendly: false,
      localExperiences: false,
    },
  });

  const [apiResponse, setApiResponse] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      ecoOptions: {
        ...formData.ecoOptions,
        [name]: checked,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/routes/shortest-path?start=${formData.from}&end=${formData.to}`);
      const data = await response.json();
      console.log("API Response:", data);
      setApiResponse(data);
      alert(`Shortest route from ${formData.from} to ${formData.to} fetched successfully.`);
    } catch (error) {
      console.error("Error fetching route:", error);
      alert("Failed to fetch route. Please try again.");
    }
  };

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="from">From</label>
            <div className="input-icon">
              <i className="fas fa-search"></i>
              <select id="from" name="from" value={formData.from} onChange={handleInputChange} required>
                <option value="">Select City</option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="to">To</label>
            <div className="input-icon">
              <i className="fas fa-search"></i>
              <select id="to" name="to" value={formData.to} onChange={handleInputChange} required>
                <option value="">Select City</option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="date">Departure Date</label>
            <div className="input-icon">
              <i className="fas fa-calendar"></i>
              <input type="date" id="date" name="date" value={formData.date} onChange={handleInputChange} required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="travelers">Travelers</label>
            <div className="input-icon">
              <i className="fas fa-users"></i>
              <select id="travelers" name="travelers" value={formData.travelers} onChange={handleInputChange}>
                <option value="1">1 Traveler</option>
                <option value="2">2 Travelers</option>
                <option value="3">3 Travelers</option>
                <option value="4">4 Travelers</option>
                <option value="5+">5+ Travelers</option>
              </select>
            </div>
          </div>
        </div>

        <div className="eco-options">
          <h3>Eco-Friendly Options</h3>
          <div className="checkbox-grid">
            {Object.entries(formData.ecoOptions).map(([key, value]) => (
              <div key={key} className="checkbox-item">
                <input
                  type="checkbox"
                  id={key}
                  name={key}
                  checked={value}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={key}>{key.replace(/([A-Z])/g, ' $1')}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="form-submit">
          <button type="submit" className="btn btn-primary btn-large">
            Search Eco-Friendly Routes
          </button>
        </div>
      </form>

      {/* Display the API response */}
      {apiResponse.length > 0 ? (
        <div className="api-response">
          <h3>Shortest Route:</h3>
          <ul>
            {apiResponse.map((city, index) => (
              <li key={index}>{city}</li>
            ))}
          </ul>
        </div>
      ) : (
        apiResponse.length === 0 && <div className="api-response">No path found.</div>
      )}
    </div>
  );
};

export default SearchForm;
