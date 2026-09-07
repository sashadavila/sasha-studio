import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleCheck,
  Clock3,
  Globe2,
  Rocket,
  X,
} from "lucide-react"

import { Link } from "react-router-dom"

import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

import "./LaunchOrbit.css"

const includes = [
  "Landing page de una sola página",
  "Hasta 4 secciones de contenido",
  "Navbar y footer incluidos",
  "Diseño responsive para celular, tablet y computadora",
  "Personalización de colores y tipografías",
  "Adaptación visual a la identidad del cliente",
  "Botón flotante de WhatsApp",
  "Enlaces a redes sociales",
  "Botones de llamada a la acción",
  "Adaptación de textos e imágenes proporcionados por el cliente",
  "Dominio .com.ar incluido durante el primer año",
  "Publicación y puesta online",
  "SEO básico",
  "Título del sitio y meta description",
  "Favicon",
  "1 ronda de modificaciones",
]

const structureExample = [
  {
    number: "01",
    title: "Inicio / Hero",
    text: "Logo, mensaje principal, propuesta de valor y botón de contacto.",
  },
  {
    number: "02",
    title: "Servicios",
    text: "Presentación clara de los principales servicios o productos del negocio.",
  },
  {
    number: "03",
    title: "Sobre nosotros",
    text: "Una presentación breve de la marca, profesional o emprendimiento.",
  },
  {
    number: "04",
    title: "Contacto",
    text: "Ubicación, formas de contacto y llamada a la acción.",
  },
]

const idealFor = [
  "Profesionales independientes",
  "Emprendimientos",
  "Comercios locales",
  "Prestadores de servicios",
  "Marcas que todavía no tienen página web",
  "Negocios que necesitan una web sencilla para compartir",
]

const notIncluded = [
  "Páginas o rutas internas",
  "Tienda online y carrito de compras",
  "Sistema de usuarios o inicio de sesión",
  "Panel administrativo",
  "Reservas automatizadas",
  "Blog",
  "Bases de datos",
  "Catálogos extensos",
  "Integraciones complejas",
  "Carga continua de contenido",
  "Fotografía o producción audiovisual",
  "Branding completo",
  "Diseño de logo",
  "Copywriting completo desde cero",
]

const requiredMaterial = [
  "Logo de la marca, si ya cuenta con uno",
  "Textos o información del negocio",
  "Imágenes que quieran utilizar",
  "Datos de contacto",
  "WhatsApp",
  "Redes sociales",
  "Ubicación, si corresponde",
  "Colores o referencias visuales, si existen",
]

const conditions = [
  "El plan contempla hasta 4 secciones de contenido.",
  "Navbar y footer no cuentan como secciones.",
  "La ronda de modificaciones contempla ajustes sobre el diseño realizado, no un rediseño completo.",
  "Funcionalidades o contenidos adicionales pueden presupuestarse por separado.",
  "El dominio .com.ar está incluido durante el primer año.",
  "La renovación posterior del dominio queda a cargo del cliente.",
  "Servicios externos pagos, en caso de ser necesarios, se presupuestan aparte.",
  "El plazo comienza una vez recibido todo el material necesario.",
]

function LaunchOrbit() {
  return (
    <div className="launch-page">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="launch-hero">
          <Link to="/#services" className="launch-back-link">
            <ArrowLeft size={16} />
            Volver a servicios
          </Link>

          <div className="launch-hero-grid">
            <div className="launch-hero-content">
              <div className="launch-badge">
                <Rocket size={16} />
                Tu primera presencia profesional online
              </div>

              <h1 className="launch-title">Launch Orbit</h1>

              <p className="launch-description">
                Una landing profesional para emprendimientos, marcas y
                profesionales que necesitan una presencia online simple, clara
                y lista para compartir.
              </p>

              <div className="launch-price-wrapper">
                <div>
                  <p className="launch-price-label">Precio lanzamiento</p>
                  <p className="launch-price">$80.000</p>
                  <p className="launch-currency">ARS</p>
                </div>

                <div className="launch-domain">
                  <p>Dominio .com.ar</p>
                  <span>incluido por 1 año</span>
                </div>
              </div>

              <div className="launch-actions">
                <a
                  href="#contacto-launch"
                  className="launch-button launch-button-primary"
                >
                  Quiero mi Launch Orbit
                  <ArrowRight size={17} />
                </a>

                <a
                  href="#incluye"
                  className="launch-button launch-button-secondary"
                >
                  Ver qué incluye
                </a>
              </div>
            </div>

            <aside className="launch-summary">
              <p className="launch-eyebrow">En resumen</p>

              <div className="launch-summary-list">
                <div className="launch-summary-item">
                  <Globe2 size={20} />

                  <div>
                    <h3>Una sola página</h3>
                    <p>Hasta 4 secciones de contenido + navbar + footer.</p>
                  </div>
                </div>

                <div className="launch-summary-item">
                  <CircleCheck size={20} />

                  <div>
                    <h3>Lista para publicar</h3>
                    <p>
                      Responsive, dominio, SEO básico y puesta online incluidos.
                    </p>
                  </div>
                </div>

                <div className="launch-summary-item">
                  <Clock3 size={20} />

                  <div>
                    <h3>Entrega estimada</h3>
                    <p>
                      3 a 5 días hábiles desde la recepción del material.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* QUÉ INCLUYE */}
        <section id="incluye" className="launch-section launch-section-alt">
          <div className="launch-container">
            <div className="launch-heading">
              <p className="launch-eyebrow">Qué incluye</p>

              <h2>
                Todo lo necesario para lanzar tu presencia digital.
              </h2>
            </div>

            <div className="launch-features-grid">
              {includes.map((item) => (
                <div key={item} className="launch-feature-card">
                  <Check size={17} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ESTRUCTURA POSIBLE */}
        <section className="launch-section">
          <div className="launch-container">
            <div className="launch-heading">
              <p className="launch-eyebrow">Una estructura posible</p>

              <h2>Cuatro secciones bien aprovechadas.</h2>

              <p className="launch-heading-description">
                La estructura puede adaptarse según las necesidades del
                proyecto, respetando el límite de hasta 4 secciones.
              </p>
            </div>

            <div className="launch-structure-grid">
              {structureExample.map((section) => (
                <article
                  key={section.number}
                  className="launch-structure-card"
                >
                  <span>{section.number}</span>
                  <h3>{section.title}</h3>
                  <p>{section.text}</p>
                </article>
              ))}
            </div>

            <div className="launch-navbar-footer">
              <h3>+ Navbar y footer</h3>

              <p>
                Logo, navegación, redes sociales, WhatsApp, datos de contacto y
                copyright. No cuentan dentro de las 4 secciones.
              </p>
            </div>
          </div>
        </section>

        {/* IDEAL PARA */}
        <section className="launch-section launch-section-alt">
          <div className="launch-container launch-two-columns">
            <div className="launch-heading">
              <p className="launch-eyebrow">Ideal para</p>

              <h2>
                Si necesitás una web simple y profesional, este puede ser tu
                punto de partida.
              </h2>
            </div>

            <div className="launch-ideal-grid">
              {idealFor.map((item) => (
                <div key={item} className="launch-small-card">
                  <CircleCheck size={17} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NO INCLUYE */}
        <section className="launch-section">
          <div className="launch-container">
            <div className="launch-scope-grid">
              <div className="launch-heading">
                <p className="launch-eyebrow">Alcance del plan</p>

                <h2>Qué no incluye Launch Orbit.</h2>

                <p className="launch-heading-description">
                  Launch está pensado para proyectos simples. Si necesitás
                  funcionalidades más avanzadas, podemos recomendarte otro plan
                  o realizar un presupuesto personalizado.
                </p>
              </div>

              <div className="launch-not-included-grid">
                {notIncluded.map((item) => (
                  <div key={item} className="launch-small-card muted">
                    <X size={16} />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="launch-additional-services">
              <p>
                ¿Necesitás redacción profesional, diseño de logo u otros
                elementos de identidad? Podés sumarlos como servicios
                adicionales.
              </p>

              <Link to="/servicios/adicionales">
                Ver servicios adicionales
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* MATERIAL Y CONDICIONES */}
        <section className="launch-section launch-section-alt">
          <div className="launch-container launch-info-grid">
            <article className="launch-info-card">
              <p className="launch-eyebrow">Para comenzar</p>
              <h2>Qué necesitamos de vos</h2>

              <div className="launch-list">
                {requiredMaterial.map((item) => (
                  <div key={item} className="launch-list-item">
                    <Check size={16} />
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <p className="launch-important-text">
                El plazo de entrega comienza una vez recibido todo el material
                necesario para desarrollar la página.
              </p>
            </article>

            <article className="launch-info-card">
              <p className="launch-eyebrow">Condiciones</p>
              <h2>Antes de comenzar</h2>

              <div className="launch-list">
                {conditions.map((item) => (
                  <div key={item} className="launch-list-item">
                    <CircleCheck size={16} />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* ACLARACIÓN */}
        <section className="launch-note-section">
          <div className="launch-note">
            <p className="launch-eyebrow">Una aclaración importante</p>

            <p>
              Una corrección implica solucionar un funcionamiento incorrecto
              respecto de lo acordado. Una nueva funcionalidad o cambio de
              alcance se presupuesta por separado.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section id="contacto-launch" className="launch-cta-section">
          <div className="launch-cta">
            <p className="launch-eyebrow">Launch Orbit</p>

            <h2>¿Listo para poner tu marca en órbita?</h2>

            <p>
              Contanos qué necesitás y vemos si Launch Orbit es el plan indicado
              para tu proyecto.
            </p>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="launch-button launch-button-primary"
            >
              Consultar por Launch Orbit
              <ArrowRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default LaunchOrbit