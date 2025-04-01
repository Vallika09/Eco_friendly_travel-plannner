import SearchForm from "../SearchForm/SearchForm"
import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Travel Sustainably, Explore Responsibly</h1>
          <p>
            Plan your eco-friendly journey with routes that minimize your carbon footprint and maximize your positive
            impact on the planet.
          </p>
        </div>

        <div className="search-form-container" id="search">
          <SearchForm />
        </div>
      </div>
    </section>
  )
}

export default Hero