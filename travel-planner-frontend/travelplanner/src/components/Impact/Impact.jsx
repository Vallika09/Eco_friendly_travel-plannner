import "./Impact.css"

const Impact = () => {
  const stats = [
    {
      id: 1,
      number: "30%",
      description: "Average Carbon Reduction",
    },
    {
      id: 2,
      number: "10k+",
      description: "Trees Planted",
    },
    {
      id: 3,
      number: "50k+",
      description: "Eco-Friendly Trips",
    },
    {
      id: 4,
      number: "100+",
      description: "Sustainable Partners",
    },
  ]

  return (
    <section className="impact" id="impact">
      <div className="container">
        <h2>Our Environmental Impact</h2>
        <div className="stats">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.id}>
              <div className="stat-number">{stat.number}</div>
              <p>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Impact

