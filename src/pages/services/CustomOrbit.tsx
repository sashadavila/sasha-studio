import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleCheck,
  Clock3,
  FileStack,
  Layers3,
  MapPin,
  MessageSquareText,
  PanelsTopLeft,
  Orbit,
  X,
} from "lucide-react"

import { Link } from "react-router-dom"

import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

import "./CustomOrbit.css"

const includes = [
  "Sitio web de hasta 5 páginas o rutas",
  "Estructura personalizada según las necesidades del proyecto",
  "Navbar y footer incluidos",
  "Navegación entre páginas",
  "Galería de imágenes",
  "Carrusel de fotografías",
  "Diseño responsive para celular, tablet y computadora",
  "Personalización de colores y tipografías",
  "Adaptación visual según la identidad del cliente",
  "Adaptación de textos e imágenes proporcionados por el cliente",
  "Botón flotante de WhatsApp",
  "Integración con redes sociales",
  "Botones de llamada a la acción",
  "Formulario de contacto",
  "Integración con Google Maps o ubicación",
  "Sección de testimonios o reseñas",
  "FAQ desplegable",
  "Enlaces externos para reservas, turnos, Booking, Mercado Pago o catálogos",
  "Animaciones y transiciones sutiles",
  "Dominio .com.ar incluido durante el primer año",
  "Publicación y configuración",
  "SEO básico por página",
  "Favicon",
  "Optimización básica de imágenes",
  "3 rondas de modificaciones",
  "7 días posteriores para corrección de errores",
]

const pagesExample = [
  {
    number: "01",
    title: "Inicio",
    text: "Presentación principal de la marca, propuesta de valor, servicios destacados y llamados a la acción.",
  },
  {
    number: "02",
    title: "Nosotros",
    text: "Historia, identidad, filosofía, equipo o presentación profesional de la marca.",
  },
  {
    number: "03",
    title: "Servicios",
    text: "Información más detallada sobre los servicios, productos o propuestas del negocio.",
  },
  {
    number: "04",
    title: "Galería / Proyectos",
    text: "Trabajos realizados, imágenes, portfolio, espacios, propiedades o contenido visual.",
  },
  {
    number: "05",
    title: "Contacto",
    text: "Formulario, ubicación, WhatsApp, redes sociales, email y otras formas de contacto.",
  },
]

const extras = [
  {
    icon: MessageSquareText,
    title: "Formulario de contacto",
    text: "Un formulario para que potenciales clientes puedan enviar consultas directamente desde el sitio.",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    text: "Integración con Google Maps o información geográfica del negocio.",
  },
  {
    icon: PanelsTopLeft,
    title: "FAQ y testimonios",
    text: "Preguntas frecuentes, reseñas y contenido que ayude a transmitir confianza.",
  },
  {
    icon: Layers3,
    title: "Galerías y carruseles",
    text: "Espacios visuales para mostrar proyectos, productos, propiedades o imágenes destacadas.",
  },
]

const idealFor = [
  "Empresas y negocios con más información para mostrar",
  "Marcas con diferentes servicios",
  "Profesionales que necesitan varias páginas",
  "Proyectos con portfolio o galería",
  "Alojamientos, turismo y propiedades",
  "Negocios que necesitan una estructura web más desarrollada",
]

const notIncluded = [
  "Tienda online desarrollada dentro del sitio",
  "Carrito de compras",
  "Sistema de pagos propio",
  "Registro o login de usuarios",
  "Panel administrativo",
  "Bases de datos",
  "Sistema propio de reservas",
  "Sistema propio de turnos",
  "Gestión de stock",
  "Desarrollo backend",
  "Aplicaciones web complejas",
  "Automatizaciones avanzadas",
  "Creación completa de identidad de marca",
  "Diseño de logo",
  "Producción profesional de fotografías",
  "Copywriting completo desde cero",
]

const requiredMaterial = [
  "Logo de la marca, si ya cuenta con uno",
  "Información y textos de cada página",
  "Imágenes que quieran utilizar",
  "Servicios, productos o información a destacar",
  "Datos de contacto",
  "WhatsApp",
  "Redes sociales",
  "Ubicación, si corresponde",
  "Links externos que quieran integrar",
  "Colores o referencias visuales de la marca, si existen",
]

const conditions = [
  "El plan contempla un sitio de hasta 5 páginas o rutas.",
  "La estructura y cantidad de secciones de cada página se define según el modelo y alcance acordado.",
  "Navbar y footer están incluidos.",
  "Incluye galerías o carruseles cuando el proyecto lo requiera.",
  "Los sistemas externos de reservas, pagos o catálogos se integran mediante enlaces.",
  "No incluye el desarrollo interno de esos sistemas.",
  "Incluye 3 rondas de modificaciones.",
  "Las modificaciones contemplan ajustes sobre el diseño desarrollado, no rediseños completos.",
  "El dominio .com.ar está incluido durante el primer año.",
  "La renovación posterior del dominio queda a cargo del cliente.",
  "El plazo comienza una vez recibido todo el material necesario.",
  "Funcionalidades adicionales pueden presupuestarse por separado.",
  "Se incluyen 7 días posteriores a la publicación para corregir errores relacionados con el desarrollo acordado.",
]

function CustomOrbit() {
  return (
    <div className="custom-page">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="custom-hero">
          <Link to="/#services" className="custom-back-link">
            <ArrowLeft size={16} />
            Volver a servicios
          </Link>

          <div className="custom-hero-grid">
            <div className="custom-hero-content">
              <div className="custom-badge">
                <Orbit size={16} />
                Un sitio más completo para una marca que crece
              </div>

              <h1 className="custom-title">Custom Orbit</h1>

              <p className="custom-description">
                Un sitio web multipágina pensado para marcas y negocios que
                necesitan organizar mayor cantidad de información, desarrollar
                mejor su propuesta y construir una presencia digital más
                completa.
              </p>

              <div className="custom-price-wrapper">
                <div>
                  <p className="custom-price-label">Precio lanzamiento</p>
                  <p className="custom-price">$150.000</p>
                  <p className="custom-currency">ARS</p>
                </div>

                <div className="custom-domain">
                  <p>Dominio .com.ar</p>
                  <span>incluido por 1 año</span>
                </div>
              </div>

              <div className="custom-actions">
                <a
                  href="#contacto-custom"
                  className="custom-button custom-button-primary"
                >
                  Quiero mi Custom Orbit
                  <ArrowRight size={17} />
                </a>

                <a
                  href="#incluye"
                  className="custom-button custom-button-secondary"
                >
                  Ver qué incluye
                </a>
              </div>
            </div>

            <aside className="custom-summary">
              <p className="custom-eyebrow">En resumen</p>

              <div className="custom-summary-list">
                <div className="custom-summary-item">
                  <FileStack size={20} />

                  <div>
                    <h3>Hasta 5 páginas</h3>
                    <p>
                      Un sitio completo con navegación y contenido distribuido
                      en diferentes rutas.
                    </p>
                  </div>
                </div>

                <div className="custom-summary-item">
                  <CircleCheck size={20} />

                  <div>
                    <h3>Más herramientas</h3>
                    <p>
                      Formularios, galerías, FAQ, mapas, testimonios y enlaces a
                      sistemas externos.
                    </p>
                  </div>
                </div>

                <div className="custom-summary-item">
                  <Clock3 size={20} />

                  <div>
                    <h3>Entrega estimada</h3>
                    <p>
                      5 a 7 días hábiles desde la recepción de todo el material.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* QUÉ INCLUYE */}
        <section id="incluye" className="custom-section custom-section-alt">
          <div className="custom-container">
            <div className="custom-heading">
              <p className="custom-eyebrow">Qué incluye</p>

              <h2>
                Una estructura web más completa para organizar y desarrollar tu
                marca.
              </h2>

              <p className="custom-heading-description">
                Custom Orbit amplía las posibilidades de una landing y permite
                distribuir el contenido en distintas páginas para crear una
                navegación más clara y profesional.
              </p>
            </div>

            <div className="custom-features-grid">
              {includes.map((item) => (
                <div key={item} className="custom-feature-card">
                  <Check size={17} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PÁGINAS POSIBLES */}
        <section className="custom-section">
          <div className="custom-container">
            <div className="custom-heading">
              <p className="custom-eyebrow">Una estructura posible</p>

              <h2>Hasta cinco páginas para organizar mejor tu contenido.</h2>

              <p className="custom-heading-description">
                Esta estructura es solo un ejemplo. Las páginas pueden
                reemplazarse por otras según las necesidades de cada negocio.
              </p>
            </div>

            <div className="custom-pages-grid">
              {pagesExample.map((page) => (
                <article key={page.number} className="custom-page-card">
                  <span>{page.number}</span>
                  <h3>{page.title}</h3>
                  <p>{page.text}</p>
                </article>
              ))}
            </div>

            <div className="custom-navbar-footer">
              <h3>+ Navbar y footer</h3>

              <p>
                Navegación, logo, enlaces entre páginas, redes sociales,
                WhatsApp, información de contacto y copyright incluidos.
              </p>
            </div>
          </div>
        </section>

        {/* ELEMENTOS EXTRA */}
        <section className="custom-section custom-section-alt">
          <div className="custom-container">
            <div className="custom-heading">
              <p className="custom-eyebrow">Más posibilidades</p>

              <h2>Elementos que hacen el salto desde Brand Orbit.</h2>

              <p className="custom-heading-description">
                Custom permite sumar componentes y herramientas que ayudan a
                construir una experiencia más completa para tus visitantes.
              </p>
            </div>

            <div className="custom-extras-grid">
              {extras.map((item) => {
                const Icon = item.icon

                return (
                  <article key={item.title} className="custom-extra-card">
                    <div className="custom-extra-icon">
                      <Icon size={20} />
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                )
              })}
            </div>

            <div className="custom-external-note">
              <p>
                Reservas, turnos, Booking, Mercado Pago, catálogos u otras
                plataformas pueden enlazarse desde el sitio.
              </p>

              <strong>
                El desarrollo de esos sistemas dentro de la web no está
                incluido en Custom Orbit.
              </strong>
            </div>
          </div>
        </section>

        {/* IDEAL PARA */}
        <section className="custom-section">
          <div className="custom-container custom-two-columns">
            <div className="custom-heading">
              <p className="custom-eyebrow">Ideal para</p>

              <h2>
                Para proyectos que ya necesitan una estructura web más
                desarrollada.
              </h2>

              <p className="custom-heading-description">
                Si una sola página ya no alcanza para organizar todo lo que
                querés mostrar, Custom Orbit permite distribuir la información
                de una manera más clara.
              </p>
            </div>

            <div className="custom-ideal-grid">
              {idealFor.map((item) => (
                <div key={item} className="custom-small-card">
                  <CircleCheck size={17} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NO INCLUYE */}
        <section className="custom-section custom-section-alt">
          <div className="custom-container">
            <div className="custom-scope-grid">
              <div className="custom-heading">
                <p className="custom-eyebrow">Alcance del plan</p>

                <h2>Qué no incluye Custom Orbit.</h2>

                <p className="custom-heading-description">
                  Custom Orbit es un sitio web completo, pero no incluye
                  funcionalidades de aplicación o sistemas con lógica de
                  negocio. Para esos proyectos contamos con Desarrollo a medida.
                </p>

                <Link
                  to="/servicios/desarrollo-a-medida"
                  className="custom-inline-link"
                >
                  Ver Desarrollo a medida
                  <ArrowRight size={15} />
                </Link>
              </div>

              <div className="custom-not-included-grid">
                {notIncluded.map((item) => (
                  <div key={item} className="custom-small-card muted">
                    <X size={16} />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="custom-additional-services">
              <p>
                ¿Necesitás logo, identidad visual o redacción profesional?
                Podés sumarlos como servicios adicionales.
              </p>

              <Link to="/servicios/adicionales">
                Ver servicios adicionales
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* MATERIAL Y CONDICIONES */}
        <section className="custom-section">
          <div className="custom-container custom-info-grid">
            <article className="custom-info-card">
              <p className="custom-eyebrow">Para comenzar</p>

              <h2>Qué necesitamos de vos</h2>

              <div className="custom-list">
                {requiredMaterial.map((item) => (
                  <div key={item} className="custom-list-item">
                    <Check size={16} />
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <p className="custom-important-text">
                El plazo de entrega comienza una vez recibido todo el material
                necesario para desarrollar el sitio.
              </p>
            </article>

            <article className="custom-info-card">
              <p className="custom-eyebrow">Condiciones</p>

              <h2>Antes de comenzar</h2>

              <div className="custom-list">
                {conditions.map((item) => (
                  <div key={item} className="custom-list-item">
                    <CircleCheck size={16} />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* ACLARACIÓN */}
        <section className="custom-note-section">
          <div className="custom-note">
            <p className="custom-eyebrow">Una aclaración importante</p>

            <p>
              Integrar un enlace hacia una plataforma externa no significa
              desarrollar esa plataforma dentro del sitio. Sistemas de pagos,
              reservas, usuarios, administración o bases de datos forman parte
              de Desarrollo a medida.
            </p>
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="contacto-custom" className="custom-cta-section">
          <div className="custom-cta">
            <p className="custom-eyebrow">Custom Orbit</p>

            <h2>
              Dale a tu marca el espacio que necesita para seguir creciendo.
            </h2>

            <p>
              Contanos cómo imaginás tu sitio y diseñamos una estructura que
              permita organizar tu información de forma clara y profesional.
            </p>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-button custom-button-primary"
            >
              Consultar por Custom Orbit
              <ArrowRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default CustomOrbit