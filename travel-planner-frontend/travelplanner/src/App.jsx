import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Features from "./components/Features/Features"
import HowItWorks from "./components/HowItWorks/HowItWorks"
import Impact from "./components/Impact/Impact"
import Cta from "./components/Cta/Cta"
import Footer from "./components/Footer/Footer"
import "./App.css"

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Impact />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}

export default App

