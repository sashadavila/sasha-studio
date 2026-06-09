import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Projects from "./components/Projects"
import Process from "./components/Process"
import About from "./components/About"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      <Navbar />

      <Hero />

      <Services />

      <Projects />

      <Process />

      <About />

      <FAQ />

      <Footer />

    </main>
  )
}

export default App