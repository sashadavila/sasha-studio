import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleCheck,
  Palette,
  PenLine,
  Sparkles,
} from "lucide-react"

import { Link } from "react-router-dom"

import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

import "./ServiciosAdicionales.css"

const services = [
  {
    icon: Sparkles,
    title: "Diseño de logo",
    price: "$35.000",
    description:
      "Diseño de un logo profesional para marcas o emprendimientos que necesitan una identidad visual básica para comenzar.",
    items: [
      "1 propuesta inicial",
      "Hasta 2 rondas de modificaciones",
      "Versión principal del logo",
      "Versión alternativa",
      "Archivos PNG",
      "Versión con fondo transparente",
      "Adaptación para foto de perfil",
    ],
    note:
      "Este servicio incluye diseño de logo, pero no contempla el desarrollo de una identidad visual completa.",
  },

  {
    icon: Palette,
    title: "Identidad visual esencial",
    price: "$65.000",
    description:
      "Una base visual más completa para construir una marca coherente y reconocible en web y redes sociales.",
    items: [
      "Logo principal",
      "Variantes del logo",
      "Paleta de colores",
      "Selección tipográfica",
      "Estilo visual de la marca",
      "Aplicaciones básicas para redes",
      "Adaptación para página web",
      "Guía breve de uso",
    ],
    note:
      "Pensado como una identidad visual esencial. Proyectos de branding más amplios pueden presupuestarse por separado.",
  },

  {
    icon: PenLine,
    title: "Copywriting / Redacción web",
    price: "Desde $30.000",
    description:
      "Creación y optimización de los textos de tu web para comunicar mejor tu propuesta y guiar al visitante hacia una acción.",
    items: [
      "Titulares principales",
      "Subtítulos",
      "Presentación de la marca",
      "Descripción de servicios",
      "Llamadas a la acción",
      "Textos para secciones",
      "Corrección y optimización final",
    ],
    note:
      "Landing de hasta 6 secciones: $30.000. Sitios multipágina: desde $45.000 según extensión y cantidad de contenido.",
  },
]

const combinations = [
  {
    name: "Launch + Logo",
    price: "$115.000",
    services: [
      "Launch Orbit",
      "Diseño de logo",
    ],
    description:
      "Una opción simple para emprendimientos que necesitan una web profesional y una identidad mínima para comenzar.",
  },

  {
    name: "Launch Completo",
    price: "$145.000",
    services: [
      "Launch Orbit",
      "Diseño de logo",
      "Copywriting para landing",
    ],
    description:
      "Una solución inicial más completa para una marca que todavía necesita tanto su web como su comunicación visual y textual.",
  },

  {
    name: "Brand + Identidad",
    price: "$185.000",
    services: [
      "Brand Orbit",
      "Identidad visual esencial",
    ],
    description:
      "Ideal para marcas que quieren desarrollar al mismo tiempo una presencia web más sólida y una identidad visual coherente.",
  },

  {
    name: "Brand Integral",
    price: "$215.000",
    services: [
      "Brand Orbit",
      "Identidad visual esencial",
      "Copywriting para landing",
    ],
    description:
      "Una propuesta integral para construir identidad, comunicación y presencia digital dentro de un mismo proyecto.",
  },

  {
    name: "Custom + Identidad",
    price: "$215.000",
    services: [
      "Custom Orbit",
      "Identidad visual esencial",
    ],
    description:
      "Para negocios que necesitan un sitio multipágina y al mismo tiempo quieren desarrollar una identidad visual profesional.",
  },

  {
    name: "Custom Integral",
    price: "Desde $260.000",
    services: [
      "Custom Orbit",
      "Identidad visual esencial",
      "Copywriting para sitio completo",
    ],
    description:
      "La opción más completa para marcas que necesitan desarrollar sitio, identidad y comunicación en conjunto.",
  },
]

const importantNotes = [
  "Los servicios adicionales pueden contratarse de forma individual.",
  "También pueden sumarse a Launch Orbit, Brand Orbit o Custom Orbit.",
  "Los valores de Copywriting para sitios multipágina pueden variar según la extensión del proyecto.",
  "Solicitudes que excedan el alcance definido pueden presupuestarse por separado.",
  "Las combinaciones son sugerencias y pueden adaptarse según las necesidades de cada cliente.",
]

function ServiciosAdicionales() {
  return (
    <div className="extras-page">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="extras-hero">
          <Link to="/#services" className="extras-back-link">
            <ArrowLeft size={16} />
            Volver a servicios
          </Link>

          <div className="extras-hero-grid">
            <div className="extras-hero-content">
              <div className="extras-badge">
                <Sparkles size={16} />
                Complementos para potenciar tu marca
              </div>

              <h1 className="extras-title">
                Servicios adicionales
              </h1>

              <p className="extras-description">
                Sumá identidad visual y comunicación profesional a tu proyecto
                web. Podés contratar estos servicios individualmente o
                combinarlos con cualquiera de nuestros planes Orbit.
              </p>

              <div className="extras-price-wrapper">
                <div>
                  <p className="extras-price-label">
                    Servicios desde
                  </p>

                  <p className="extras-price">
                    $30.000
                  </p>

                  <p className="extras-currency">
                    ARS
                  </p>
                </div>

                <div className="extras-price-detail">
                  <p>Contratación flexible</p>
                  <span>individual o combinada</span>
                </div>
              </div>

              <div className="extras-actions">
                <a
                  href="#servicios-adicionales"
                  className="extras-button extras-button-primary"
                >
                  Ver servicios
                  <ArrowRight size={17} />
                </a>

                <a
                  href="#combinaciones"
                  className="extras-button extras-button-secondary"
                >
                  Ver combinaciones
                </a>
              </div>
            </div>

            <aside className="extras-summary">
              <p className="extras-eyebrow">
                Podés sumar
              </p>

              <div className="extras-summary-list">
                <div className="extras-summary-item">
                  <Sparkles size={20} />

                  <div>
                    <h3>Logo</h3>
                    <p>
                      Una identidad gráfica inicial para comenzar a comunicar tu
                      marca.
                    </p>
                  </div>
                </div>

                <div className="extras-summary-item">
                  <Palette size={20} />

                  <div>
                    <h3>Identidad visual</h3>
                    <p>
                      Logo, colores, tipografías y lineamientos visuales
                      esenciales.
                    </p>
                  </div>
                </div>

                <div className="extras-summary-item">
                  <PenLine size={20} />

                  <div>
                    <h3>Copywriting</h3>
                    <p>
                      Textos profesionales pensados para comunicar y convertir.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* SERVICIOS */}
        <section
          id="servicios-adicionales"
          className="extras-section extras-section-alt"
        >
          <div className="extras-container">
            <div className="extras-heading">
              <p className="extras-eyebrow">
                Servicios disponibles
              </p>

              <h2>
                Elegí solamente lo que tu proyecto necesita.
              </h2>

              <p className="extras-heading-description">
                Estos servicios funcionan como complementos de nuestros planes
                web, pero también pueden contratarse de manera independiente.
              </p>
            </div>

            <div className="extras-services-grid">
              {services.map((service) => {
                const Icon = service.icon

                return (
                  <article
                    key={service.title}
                    className="extras-service-card"
                  >
                    <div className="extras-service-header">
                      <div className="extras-service-icon">
                        <Icon size={22} />
                      </div>

                      <div>
                        <h3>{service.title}</h3>
                        <p className="extras-service-price">
                          {service.price}
                        </p>
                      </div>
                    </div>

                    <p className="extras-service-description">
                      {service.description}
                    </p>

                    <div className="extras-service-list">
                      {service.items.map((item) => (
                        <div
                          key={item}
                          className="extras-service-list-item"
                        >
                          <Check size={15} />
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>

                    <p className="extras-service-note">
                      {service.note}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* DIFERENCIA LOGO / IDENTIDAD */}
        <section className="extras-section">
          <div className="extras-container">
            <div className="extras-heading">
              <p className="extras-eyebrow">
                Logo o identidad visual
              </p>

              <h2>
                Dos soluciones diferentes según el momento de tu marca.
              </h2>
            </div>

            <div className="extras-comparison-grid">
              <article className="extras-comparison-card">
                <Sparkles size={22} />

                <h3>Solo necesito un logo</h3>

                <p>
                  Si estás comenzando y necesitás una pieza gráfica para
                  identificar tu marca en redes y web, el servicio de logo puede
                  ser suficiente.
                </p>

                <strong>$35.000</strong>
              </article>

              <article className="extras-comparison-card featured">
                <Palette size={22} />

                <h3>Quiero construir una identidad</h3>

                <p>
                  Si necesitás que logo, colores, tipografías y estilo visual
                  trabajen juntos, la Identidad Visual Esencial es una opción
                  mucho más completa.
                </p>

                <strong>$65.000</strong>
              </article>
            </div>
          </div>
        </section>

        {/* COMBINACIONES */}
        <section
          id="combinaciones"
          className="extras-section extras-section-alt"
        >
          <div className="extras-container">
            <div className="extras-heading">
              <p className="extras-eyebrow">
                Combinaciones recomendadas
              </p>

              <h2>
                Armá un ecosistema más completo desde el comienzo.
              </h2>

              <p className="extras-heading-description">
                Estas son algunas combinaciones posibles. Los servicios pueden
                adaptarse según las necesidades de cada proyecto.
              </p>
            </div>

            <div className="extras-combinations-grid">
              {combinations.map((combo) => (
                <article
                  key={combo.name}
                  className="extras-combination-card"
                >
                  <div className="extras-combination-top">
                    <div>
                      <h3>{combo.name}</h3>
                      <p className="extras-combination-price">
                        {combo.price}
                      </p>
                    </div>

                    <Sparkles size={19} />
                  </div>

                  <p className="extras-combination-description">
                    {combo.description}
                  </p>

                  <div className="extras-combination-list">
                    {combo.services.map((item) => (
                      <div
                        key={item}
                        className="extras-combination-list-item"
                      >
                        <CircleCheck size={15} />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ACLARACIONES */}
        <section className="extras-section">
          <div className="extras-container">
            <div className="extras-notes">
              <div className="extras-heading">
                <p className="extras-eyebrow">
                  Antes de contratar
                </p>

                <h2>
                  Algunas aclaraciones importantes.
                </h2>
              </div>

              <div className="extras-notes-list">
                {importantNotes.map((item) => (
                  <div
                    key={item}
                    className="extras-note-item"
                  >
                    <CircleCheck size={16} />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PLANES WEB */}
        <section className="extras-section extras-section-alt">
          <div className="extras-container">
            <div className="extras-web-plans">
              <div>
                <p className="extras-eyebrow">
                  ¿También necesitás una web?
                </p>

                <h2>
                  Combiná estos servicios con nuestros planes Orbit.
                </h2>

                <p>
                  Launch, Brand y Custom pueden complementarse con diseño de
                  logo, identidad visual o copywriting según las necesidades de
                  tu proyecto.
                </p>
              </div>

              <Link
                to="/#services"
                className="extras-button extras-button-secondary"
              >
                Ver planes web
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="extras-cta-section">
          <div className="extras-cta">
            <p className="extras-eyebrow">
              Servicios adicionales
            </p>

            <h2>
              Construyamos una marca que se vea y comunique mejor.
            </h2>

            <p>
              Contanos qué necesitás y te ayudamos a elegir la combinación más
              adecuada para tu proyecto.
            </p>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="extras-button extras-button-primary"
            >
              Consultar servicios
              <ArrowRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ServiciosAdicionales