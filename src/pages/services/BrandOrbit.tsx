import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleCheck,
  Clock3,
  GalleryHorizontalEnd,
  Moon,
  X,
} from "lucide-react"

import { Link } from "react-router-dom"

import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

import "./BrandOrbit.css"

const includes = [
  "Landing page de una sola página",
  "Hasta 6 secciones de contenido",
  "Navbar y footer incluidos",
  "1 carrusel o galería de imágenes",
  "Diseño responsive para celular, tablet y computadora",
  "Personalización de colores, tipografías y estética",
  "Adaptación visual según la identidad de la marca",
  "Adaptación de textos e imágenes proporcionados por el cliente",
  "Botón flotante de WhatsApp",
  "Enlaces a redes sociales",
  "Botones de llamada a la acción",
  "Dominio .com.ar incluido durante el primer año",
  "Configuración y publicación de la web",
  "SEO básico",
  "Favicon",
  "2 rondas de modificaciones",
  "7 días posteriores para corrección de errores",
]

const structureExample = [
  {
    number: "01",
    title: "Inicio / Hero",
    text: "Presentación visual de la marca, propuesta principal y llamada a la acción.",
  },
  {
    number: "02",
    title: "Servicios",
    text: "Explicación clara y organizada de los servicios o propuestas principales.",
  },
  {
    number: "03",
    title: "Sobre la marca",
    text: "Historia, filosofía, valores o presentación profesional.",
  },
  {
    number: "04",
    title: "Galería / Experiencia",
    text: "Carrusel o galería para mostrar trabajos, espacios, productos o imágenes destacadas.",
  },
  {
    number: "05",
    title: "Testimonios / Diferenciales",
    text: "Reseñas, beneficios, metodología o razones para elegir la marca.",
  },
  {
    number: "06",
    title: "Contacto",
    text: "WhatsApp, redes, ubicación, datos de contacto y llamada a la acción final.",
  },
]

const idealFor = [
  "Marcas personales",
  "Profesionales",
  "Negocios consolidados",
  "Emprendimientos en crecimiento",
  "Servicios que necesitan explicar mejor su propuesta",
  "Marcas que quieren una presencia digital más sólida",
]

const notIncluded = [
  "Tienda online",
  "Carrito de compras",
  "Registro o login de usuarios",
  "Bases de datos",
  "Panel administrativo",
  "Sistemas de reservas automatizadas",
  "Sistemas de turnos",
  "Desarrollo backend",
  "Creación completa de identidad de marca",
  "Diseño de logo",
  "Producción profesional de fotografías",
  "Producción audiovisual profesional",
]

const requiredMaterial = [
  "Logo de la marca, si ya cuenta con uno",
  "Textos o información del negocio",
  "Imágenes que quieran utilizar",
  "Servicios o productos a destacar",
  "Datos de contacto",
  "WhatsApp",
  "Redes sociales",
  "Ubicación, si corresponde",
  "Paleta de colores o referencias visuales, si existen",
]

const conditions = [
  "El plan contempla hasta 6 secciones de contenido.",
  "Navbar y footer no cuentan como secciones.",
  "Incluye hasta 1 carrusel o galería de imágenes.",
  "Incluye 2 rondas de modificaciones antes de finalizar el proyecto.",
  "Las modificaciones contemplan ajustes sobre el diseño desarrollado, no rediseños completos.",
  "El dominio .com.ar está incluido durante el primer año.",
  "La renovación posterior del dominio queda a cargo del cliente.",
  "El plazo comienza una vez recibido todo el material necesario.",
  "Funcionalidades o contenidos adicionales pueden presupuestarse por separado.",
  "Se incluyen 7 días posteriores a la publicación para corregir errores relacionados con el desarrollo acordado.",
]

function BrandOrbit() {
  return (
    <div className="brand-page">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="brand-hero">
          <Link to="/#services" className="brand-back-link">
            <ArrowLeft size={16} />
            Volver a servicios
          </Link>

          <div className="brand-hero-grid">
            <div className="brand-hero-content">
              <div className="brand-badge">
                <Moon size={16} />
                Una presencia digital más completa
              </div>

              <h1 className="brand-title">Brand Orbit</h1>

              <p className="brand-description">
                Una landing profesional y personalizada para negocios, marcas y
                profesionales que necesitan desarrollar mejor su propuesta,
                mostrar más contenido y construir una presencia digital más
                sólida.
              </p>

              <div className="brand-price-wrapper">
                <div>
                  <p className="brand-price-label">Precio lanzamiento</p>
                  <p className="brand-price">$120.000</p>
                  <p className="brand-currency">ARS</p>
                </div>

                <div className="brand-domain">
                  <p>Dominio .com.ar</p>
                  <span>incluido por 1 año</span>
                </div>
              </div>

              <div className="brand-actions">
                <a
                  href="#contacto-brand"
                  className="brand-button brand-button-primary"
                >
                  Quiero mi Brand Orbit
                  <ArrowRight size={17} />
                </a>

                <a
                  href="#incluye"
                  className="brand-button brand-button-secondary"
                >
                  Ver qué incluye
                </a>
              </div>
            </div>

            <aside className="brand-summary">
              <p className="brand-eyebrow">En resumen</p>

              <div className="brand-summary-list">
                <div className="brand-summary-item">
                  <GalleryHorizontalEnd size={20} />

                  <div>
                    <h3>Más contenido</h3>
                    <p>
                      Hasta 6 secciones + navbar + footer + carrusel o galería.
                    </p>
                  </div>
                </div>

                <div className="brand-summary-item">
                  <CircleCheck size={20} />

                  <div>
                    <h3>Diseño personalizado</h3>
                    <p>
                      Adaptado a colores, tipografías, estética e identidad de
                      tu marca.
                    </p>
                  </div>
                </div>

                <div className="brand-summary-item">
                  <Clock3 size={20} />

                  <div>
                    <h3>Entrega estimada</h3>
                    <p>
                      3 a 5 días hábiles desde la recepción de todo el material.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* QUÉ INCLUYE */}
        <section id="incluye" className="brand-section brand-section-alt">
          <div className="brand-container">
            <div className="brand-heading">
              <p className="brand-eyebrow">Qué incluye</p>

              <h2>
                Más espacio para desarrollar la identidad y propuesta de tu
                marca.
              </h2>

              <p className="brand-heading-description">
                Brand Orbit amplía las posibilidades de una landing tradicional
                para construir una experiencia visual más completa y
                personalizada.
              </p>
            </div>

            <div className="brand-features-grid">
              {includes.map((item) => (
                <div key={item} className="brand-feature-card">
                  <Check size={17} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ESTRUCTURA POSIBLE */}
        <section className="brand-section">
          <div className="brand-container">
            <div className="brand-heading">
              <p className="brand-eyebrow">Una estructura posible</p>

              <h2>Hasta seis secciones para contar mejor tu propuesta.</h2>

              <p className="brand-heading-description">
                Esta es solo una estructura de ejemplo. Las secciones pueden
                adaptarse según las necesidades y objetivos de cada marca.
              </p>
            </div>

            <div className="brand-structure-grid">
              {structureExample.map((section) => (
                <article
                  key={section.number}
                  className="brand-structure-card"
                >
                  <span>{section.number}</span>
                  <h3>{section.title}</h3>
                  <p>{section.text}</p>
                </article>
              ))}
            </div>

            <div className="brand-navbar-footer">
              <h3>+ Navbar y footer</h3>

              <p>
                Navegación, logo, enlaces internos, redes sociales, WhatsApp,
                información de contacto y copyright. No cuentan dentro de las 6
                secciones.
              </p>
            </div>
          </div>
        </section>

        {/* IDEAL PARA */}
        <section className="brand-section brand-section-alt">
          <div className="brand-container brand-two-columns">
            <div className="brand-heading">
              <p className="brand-eyebrow">Ideal para</p>

              <h2>
                Para marcas que necesitan algo más que una presentación básica.
              </h2>

              <p className="brand-heading-description">
                Si necesitás desarrollar mejor tu propuesta, transmitir
                confianza y mostrar más contenido, Brand Orbit puede ser el
                punto indicado.
              </p>
            </div>

            <div className="brand-ideal-grid">
              {idealFor.map((item) => (
                <div key={item} className="brand-small-card">
                  <CircleCheck size={17} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NO INCLUYE */}
        <section className="brand-section">
          <div className="brand-container">
            <div className="brand-scope-grid">
              <div className="brand-heading">
                <p className="brand-eyebrow">Alcance del plan</p>

                <h2>Qué no incluye Brand Orbit.</h2>

                <p className="brand-heading-description">
                  Brand Orbit sigue siendo una landing de una sola página. Si
                  tu proyecto necesita múltiples páginas, sistemas o
                  funcionalidades avanzadas, podemos recomendarte Custom Orbit o
                  Desarrollo a medida.
                </p>
              </div>

              <div className="brand-not-included-grid">
                {notIncluded.map((item) => (
                  <div key={item} className="brand-small-card muted">
                    <X size={16} />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="brand-additional-services">
              <p>
                ¿Todavía no contás con logo, identidad visual o textos
                profesionales? Estos servicios pueden contratarse por separado.
              </p>

              <Link to="/servicios/adicionales">
                Ver servicios adicionales
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* MATERIAL Y CONDICIONES */}
        <section className="brand-section brand-section-alt">
          <div className="brand-container brand-info-grid">
            <article className="brand-info-card">
              <p className="brand-eyebrow">Para comenzar</p>
              <h2>Qué necesitamos de vos</h2>

              <div className="brand-list">
                {requiredMaterial.map((item) => (
                  <div key={item} className="brand-list-item">
                    <Check size={16} />
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <p className="brand-important-text">
                El plazo de entrega comienza una vez recibido todo el material
                necesario para desarrollar la página.
              </p>
            </article>

            <article className="brand-info-card">
              <p className="brand-eyebrow">Condiciones</p>
              <h2>Antes de comenzar</h2>

              <div className="brand-list">
                {conditions.map((item) => (
                  <div key={item} className="brand-list-item">
                    <CircleCheck size={16} />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* ACLARACIÓN */}
        <section className="brand-note-section">
          <div className="brand-note">
            <p className="brand-eyebrow">Correcciones posteriores</p>

            <p>
              Durante los 7 días posteriores a la publicación se realizan
              correcciones de errores relacionados con el desarrollo acordado.
              Nuevas secciones, funcionalidades o cambios de alcance se
              presupuestan por separado.
            </p>
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="contacto-brand" className="brand-cta-section">
          <div className="brand-cta">
            <p className="brand-eyebrow">Brand Orbit</p>

            <h2>Construí una presencia digital que represente mejor tu marca.</h2>

            <p>
              Contanos qué necesitás y vemos si Brand Orbit es el plan indicado
              para desarrollar tu proyecto.
            </p>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="brand-button brand-button-primary"
            >
              Consultar por Brand Orbit
              <ArrowRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default BrandOrbit