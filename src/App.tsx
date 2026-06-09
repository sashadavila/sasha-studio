import { useEffect } from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Projects from "./components/Projects"
import Process from "./components/Process"
import About from "./components/About"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"

function App() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    })
  }, [])


  return (
    <main className="min-h-screen overflow-hidden bg-[#0F0F14] text-[#F5F1EA]">

      <div className="pointer-events-none fixed inset-0 -z-10">

        <div
          className="
          absolute
          left-[-10%]
          top-[-10%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#BFA2FF]/20
          blur-[120px]"
        />

        <div
          className="
          absolute
          bottom-[10%]
          right-[-10%]
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#D8B4FE]/10
          blur-[110px]"
        />

      </div>


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