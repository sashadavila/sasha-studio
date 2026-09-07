import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Projects from "./components/Projects"
import Process from "./components/Process"
import About from "./components/About"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"

import LaunchOrbit from "./pages/services/LaunchOrbit"
import BrandOrbit from "./pages/services/BrandOrbit"
import CustomOrbit from "./pages/services/CustomOrbit"
import DesarrolloMedida from "./pages/services/DesarrolloMedida"
import ServiciosAdicionales from "./pages/services/ServiciosAdicionales"
import GestionContenido from "./pages/services/GestionContenido"

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Process />
      <About />
      <FAQ />
      <Footer />
    </>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    })
  }, [pathname])

  return null
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0F0F14] text-[#F5F1EA]">
      <ScrollToTop />

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
            blur-[120px]
          "
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
            blur-[110px]
          "
        />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/servicios/launch-orbit"
          element={<LaunchOrbit />}
        />

        <Route
          path="/servicios/brand-orbit"
          element={<BrandOrbit />}
        />

        <Route
          path="/servicios/custom-orbit"
          element={<CustomOrbit />}
        />

        <Route
          path="/servicios/desarrollo-a-medida"
          element={<DesarrolloMedida />}
        />

        <Route
          path="/servicios/adicionales"
          element={<ServiciosAdicionales />}
        />

        <Route
          path="/servicios/gestion-de-contenido"
          element={<GestionContenido />}
        />
      </Routes>
    </main>
  )
}

export default App