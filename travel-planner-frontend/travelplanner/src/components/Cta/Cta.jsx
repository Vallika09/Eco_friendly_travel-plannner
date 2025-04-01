"use client"
import "./Cta.css"

const Cta = () => {
  const scrollToSearch = (e) => {
    e.preventDefault()
    const searchElement = document.getElementById("search")
    if (searchElement) {
      searchElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="cta" id="cta">
      <div className="container">
        <h2>Ready to Travel Sustainably?</h2>
        <p>Join thousands of eco-conscious travelers making a difference with every journey.</p>
        <a href="#search" className="btn btn-primary btn-large" onClick={scrollToSearch}>
          Plan Your Eco-Trip Now
        </a>
      </div>
    </section>
  )
}

export default Cta

