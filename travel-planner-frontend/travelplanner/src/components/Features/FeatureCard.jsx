const FeatureCard = ({ icon, title, description }) => {
    const getIconClass = () => {
      switch (icon) {
        case "leaf":
          return "fas fa-leaf"
        case "globe":
          return "fas fa-globe"
        case "heart":
          return "fas fa-heart"
        case "map-pin":
          return "fas fa-map-pin"
        case "bolt":
          return "fas fa-bolt"
        case "users":
          return "fas fa-users"
        default:
          return "fas fa-leaf"
      }
    }
  
    return (
      <div className="feature-card">
        <div className="feature-icon">
          <i className={getIconClass()}></i>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    )
  }
  
  export default FeatureCard
  
  