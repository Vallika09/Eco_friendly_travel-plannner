"use client"

import { useState } from "react"
import "./SearchForm.css"

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
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target
    setFormData({
      ...formData,
      ecoOptions: {
        ...formData.ecoOptions,
        [name]: checked,
      },
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formData)
    alert(`Searching for eco-friendly routes from ${formData.from} to ${formData.to}`)
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="from">From</label>
          <div className="input-icon">
            <i className="fas fa-search"></i>
            <input
              type="text"
              id="from"
              name="from"
              placeholder="City or Airport"
              value={formData.from}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="to">To</label>
          <div className="input-icon">
            <i className="fas fa-search"></i>
            <input
              type="text"
              id="to"
              name="to"
              placeholder="City or Airport"
              value={formData.to}
              onChange={handleInputChange}
              required
            />
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
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="ecoRoute"
              name="ecoRoute"
              checked={formData.ecoOptions.ecoRoute}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="ecoRoute">Eco-Friendly Route</label>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="carbonOffset"
              name="carbonOffset"
              checked={formData.ecoOptions.carbonOffset}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="carbonOffset">Carbon Offset</label>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="publicTransport"
              name="publicTransport"
              checked={formData.ecoOptions.publicTransport}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="publicTransport">Public Transport Only</label>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="ecoHotels"
              name="ecoHotels"
              checked={formData.ecoOptions.ecoHotels}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="ecoHotels">Eco-Certified Hotels</label>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="bikeFriendly"
              name="bikeFriendly"
              checked={formData.ecoOptions.bikeFriendly}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="bikeFriendly">Bike-Friendly</label>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="localExperiences"
              name="localExperiences"
              checked={formData.ecoOptions.localExperiences}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="localExperiences">Local Experiences</label>
          </div>
        </div>
      </div>

      <div className="form-submit">
        <button type="submit" className="btn btn-primary btn-large">
          Search Eco-Friendly Routes
        </button>
      </div>
    </form>
  )
}

export default SearchForm