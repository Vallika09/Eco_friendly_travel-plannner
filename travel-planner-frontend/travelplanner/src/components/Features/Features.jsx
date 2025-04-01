import FeatureCard from "./FeatureCard"
import "./Features.css"

const Features = () => {
  const features = [
    {
      id: 1,
      icon: "leaf",
      title: "Reduce Carbon Footprint",
      description:
        "Our routes are optimized to minimize emissions and environmental impact while still getting you to your destination.",
    },
    {
      id: 2,
      icon: "globe",
      title: "Support Local Communities",
      description:
        "We highlight stops and accommodations that prioritize sustainability and give back to local communities.",
    },
    {
      id: 3,
      icon: "heart",
      title: "Travel with Purpose",
      description: "Feel good about your travel choices knowing you're making a positive difference for the planet.",
    },
  ]

  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Why Choose Eco-Friendly Travel?</h2>
        <div className="feature-cards">
          {features.map((feature) => (
            <FeatureCard key={feature.id} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

