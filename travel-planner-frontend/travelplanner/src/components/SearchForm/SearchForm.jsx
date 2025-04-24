import React, { useState } from "react";
import "./SearchForm.css";
import RouteResult from "./RouteResult";

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

const cityCoordinates = {
  Mumbai: { lat: 19.076, lng: 72.8777 },
  Delhi: { lat: 28.6139, lng: 77.209 },
  Bangalore: { lat: 12.9716, lng: 77.5946 },
  Hyderabad: { lat: 17.385, lng: 78.4867 },
  Ahmedabad: { lat: 23.0225, lng: 72.5714 },
  Chennai: { lat: 13.0827, lng: 80.2707 },
  Kolkata: { lat: 22.5726, lng: 88.3639 },
  Pune: { lat: 18.5204, lng: 73.8567 },
  Jaipur: { lat: 26.9124, lng: 75.7873 },
  Lucknow: { lat: 26.8467, lng: 80.9462 },
  Kanpur: { lat: 26.4499, lng: 80.3319 },
  Nagpur: { lat: 21.1458, lng: 79.0882 },
  Indore: { lat: 22.7196, lng: 75.8577 },
  Thane: { lat: 19.2183, lng: 72.9781 },
  Bhopal: { lat: 23.2599, lng: 77.4126 },
  Visakhapatnam: { lat: 17.6868, lng: 83.2185 },
  Patna: { lat: 25.5941, lng: 85.1376 },
  Vadodara: { lat: 22.3072, lng: 73.1812 },
  Ghaziabad: { lat: 28.6692, lng: 77.4538 },
  Ludhiana: { lat: 30.9005, lng: 75.8573 },
  Agra: { lat: 27.1767, lng: 78.0081 },
  Nashik: { lat: 19.9975, lng: 73.7898 },
  Meerut: { lat: 28.9845, lng: 77.7064 },
  Faridabad: { lat: 28.4089, lng: 77.3178 },
  Rajkot: { lat: 22.3039, lng: 70.8022 },
  Varanasi: { lat: 25.3176, lng: 82.9739 },
  Srinagar: { lat: 34.0837, lng: 74.7973 },
  Aurangabad: { lat: 19.8762, lng: 75.3433 },
  Dhanbad: { lat: 23.7957, lng: 86.4304 },
  Amritsar: { lat: 31.634, lng: 74.8723 },
  Allahabad: { lat: 25.4358, lng: 81.8463 },
  Ranchi: { lat: 23.3441, lng: 85.3096 },
  Coimbatore: { lat: 11.0168, lng: 76.9558 },
  Jodhpur: { lat: 26.2389, lng: 73.0243 },
  Guwahati: { lat: 26.1445, lng: 91.7362 },
  Gwalior: { lat: 26.2183, lng: 78.1828 },
  Chandigarh: { lat: 30.7333, lng: 76.7794 },
  Solapur: { lat: 17.6599, lng: 75.9064 },
  Hubli: { lat: 15.3647, lng: 75.124 },
  Tiruchirappalli: { lat: 10.7905, lng: 78.7047 },
  Kota: { lat: 25.2138, lng: 75.8648 },
  Salem: { lat: 11.6643, lng: 78.146 },
  Bhubaneswar: { lat: 20.2961, lng: 85.8245 },
  Mysore: { lat: 12.2958, lng: 76.6394 },
  Jalandhar: { lat: 31.326, lng: 75.5762 },
  Guntur: { lat: 16.3067, lng: 80.4365 },
  Bikaner: { lat: 28.0229, lng: 73.3119 },
  Jamshedpur: { lat: 22.8046, lng: 86.2029 },
  Warangal: { lat: 17.9784, lng: 79.5911 },
  Cuttack: { lat: 20.4625, lng: 85.8828 },
  Ujjain: { lat: 23.1793, lng: 75.7849 },
  Belgaum: { lat: 15.8497, lng: 74.4977 },
  Ajmer: { lat: 26.4499, lng: 74.6399 },
  Jhansi: { lat: 25.4484, lng: 78.5685 },
  Ulhasnagar: { lat: 19.2167, lng: 73.15 },
  Dehradun: { lat: 30.3165, lng: 78.0322 },
  Nellore: { lat: 14.4426, lng: 79.9865 },
  Tirunelveli: { lat: 8.7139, lng: 77.7567 },
  Muzaffarpur: { lat: 26.1225, lng: 85.3906 },
  Hosur: { lat: 12.7409, lng: 77.8253 },
  Moradabad: { lat: 28.8386, lng: 78.7733 },
  Gaya: { lat: 24.7969, lng: 85.0002 },
  Udaipur: { lat: 24.5854, lng: 73.7125 },
  Mathura: { lat: 27.4924, lng: 77.6737 },
  Ambala: { lat: 30.3782, lng: 76.7767 },
  Siliguri: { lat: 26.7271, lng: 88.3953 },
  Nanded: { lat: 19.1383, lng: 77.321 },
  Imphal: { lat: 24.817, lng: 93.9368 },
  Shillong: { lat: 25.5788, lng: 91.8933 },
  Noida: { lat: 28.5355, lng: 77.391 },
  Thrissur: { lat: 10.5276, lng: 76.2144 },
};

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
  const [routePoints, setRoutePoints] = useState([]);
  const [stops, setStops] = useState([]); // optional - for any stop markers


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
      const response = await fetch(
        `http://localhost:8080/api/routes/shortest-path?start=${formData.from}&end=${formData.to}`
      );
      const data = await response.json();
      console.log("API Response:", data);
      setApiResponse(data);
      // alert(Shortest route from ${formData.from} to ${formData.to} fetched successfully.);

      const points = data.map((city) => ({
        name: city,
        lat: cityCoordinates[city]?.lat || 0,
        lng: cityCoordinates[city]?.lng || 0,
      }));
      setRoutePoints(points);

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
        <>
          <div className="api-response">
            <h3>Shortest Route:</h3>
            <div className="route-steps">
              {apiResponse.map((city, index) => (
                <span key={index}>
                  {city} {index < apiResponse.length - 1 && <i className="fas fa-arrow-right"></i>}
                </span>
              ))}
            </div>
          </div>
          <RouteResult path={apiResponse} routePoints={routePoints} stops={stops} />
        </>
      ) : (
        apiResponse.length === 0 && <div className="api-response">No path found.</div>
      )}

    </div>
  );
};

export default SearchForm;