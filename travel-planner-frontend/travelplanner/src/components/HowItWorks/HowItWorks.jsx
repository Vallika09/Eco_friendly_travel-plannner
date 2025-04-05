import "./HowItWorks.css"

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      number: 1,
      title: "Enter Your Journey",
      description: "Input your starting point and destination in our search form.",
    },
    {
      id: 2,
      number: 2,
      title: "Select Eco Options",
      description: "Choose from eco-friendly transportation methods and sustainable accommodations.",
    },
    {
      id: 3,
      number: 3,
      title: "Travel Sustainably",
      description: "Enjoy your journey knowing you've made choices that help protect our planet.",
    },
  ]

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <h2>How It Works</h2>
        <div className="steps">
          {steps.map((step) => (
            <div className="step-card" key={step.id}>
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

