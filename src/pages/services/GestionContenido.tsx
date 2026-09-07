import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  CircleCheck,
  Clock3,
  Image,
  Megaphone,
  PenLine,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react"

import { Link } from "react-router-dom"

import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

import "./GestionContenido.css"

const plans = [
  {
    name: "Presencia",
    price: "$35.000",
    label: "Plan 1",
    description:
      "Para negocios que quieren mantener sus redes activas con contenido profesional sin necesidad de una gestión intensiva.",
    summary: "Aprox. 4 contenidos mensuales",
    items: [
      "1 publicación semanal",
      "Publicación en Instagram",
      "Adaptación de la publicación para Facebook",
      "Aproximadamente 4 contenidos mensuales",
      "Selección del producto o servicio a promocionar junto con el cliente",
      "Búsqueda de imágenes de referencia cuando sea necesario",
      "Edición y adaptación visual básica",
      "Redacción del texto de la publicación",
      "CTA y hashtags cuando corresponda",
      "Programación y publicación del contenido",
    ],
  },

  {
    name: "Activo",
    price: "$50.000",
    label: "Plan 2",
    description:
      "Para negocios que quieren mostrar sus productos con mayor frecuencia y sumar presencia en Facebook Marketplace.",
    summary: "8 contenidos + 4 Marketplace aprox.",
    items: [
      "2 publicaciones semanales en Instagram",
      "Adaptación de las publicaciones para Facebook",
      "Aproximadamente 8 contenidos mensuales para feed",
      "1 publicación semanal en Facebook Marketplace",
      "Aproximadamente 4 publicaciones mensuales en Marketplace",
      "Selección de productos o servicios a promocionar",
      "Búsqueda de imágenes de referencia cuando sea necesario",
      "Edición y adaptación visual",
      "Redacción de los textos",
      "CTA y hashtags cuando corresponda",
      "Programación y publicación del contenido",
    ],
  },

  {
    name: "Presencia Plus",
    price: "$80.000",
    label: "Plan 3",
    description:
      "Para negocios que buscan mantener una presencia más constante durante toda la semana combinando publicaciones, historias y Marketplace.",
    summary: "8 feed + 8 historias + 4 Marketplace aprox.",
    featured: true,
    items: [
      "2 publicaciones semanales en Instagram",
      "Adaptación de las publicaciones para Facebook",
      "2 historias semanales",
      "Historias publicadas en días diferentes al contenido del feed",
      "1 publicación semanal en Facebook Marketplace",
      "Aproximadamente 8 publicaciones de feed al mes",
      "Aproximadamente 8 historias al mes",
      "Aproximadamente 4 publicaciones mensuales en Marketplace",
      "Selección y planificación de productos o servicios",
      "Búsqueda de imágenes de referencia cuando sea necesario",
      "Diseño, edición y adaptación visual básica",
      "Redacción de textos",
      "CTA y hashtags cuando corresponda",
      "Programación y publicación del contenido",
    ],
  },
]

const weeklyExample = [
  {
    day: "Lunes",
    type: "Publicación",
  },
  {
    day: "Miércoles",
    type: "Historia",
  },
  {
    day: "Viernes",
    type: "Publicación",
  },
  {
    day: "Sábado",
    type: "Historia",
  },
]

const commonWork = [
  "Planificación del contenido",
  "Selección de productos o servicios a promocionar",
  "Adaptación visual básica",
  "Redacción de textos",
  "CTA cuando corresponda",
  "Hashtags cuando corresponda",
  "Programación del contenido",
  "Publicación en las plataformas incluidas",
]

const notIncluded = [
  "Visitas presenciales al negocio",
  "Fotografía presencial",
  "Filmación presencial",
  "Producción profesional de reels",
  "Fotografía profesional de productos",
  "Contratación de modelos",
  "Respuesta permanente de mensajes privados",
  "Moderación permanente de comentarios",
  "Atención al cliente",
  "Gestión de consultas",
  "Gestión de ventas o pedidos",
  "Gestión de campañas publicitarias pagas",
  "Inversión o presupuesto para Meta Ads",
]

const clientResponsibilities = [
  "Mantener actualizados los precios de productos o servicios",
  "Informar promociones vigentes",
  "Informar disponibilidad o stock cuando corresponda",
  "Proporcionar información correcta sobre productos y servicios",
  "Responder mensajes, consultas y comentarios de potenciales clientes",
  "Informar cambios relevantes que deban comunicarse en redes",
]

const combinations = [
  {
    title: "Presencia + Logo",
    price: "$60.000",
    regularPrice: "$70.000",
    description:
      "Para negocios que necesitan comenzar a publicar contenido y todavía no cuentan con un logo.",
    items: [
      "Plan Presencia por 1 mes",
      "Diseño de logo",
    ],
  },

  {
    title: "Activo + Logo",
    price: "$75.000",
    regularPrice: "$85.000",
    description:
      "Una opción para empezar con mayor frecuencia de publicaciones y una identidad gráfica básica.",
    items: [
      "Plan Activo por 1 mes",
      "Diseño de logo",
    ],
  },

  {
    title: "Presencia Plus + Logo",
    price: "$105.000",
    regularPrice: "$115.000",
    description:
      "Contenido constante durante el mes más el diseño inicial del logo de la marca.",
    items: [
      "Plan Presencia Plus por 1 mes",
      "Diseño de logo",
    ],
  },

  {
    title: "Presencia + Identidad",
    price: "$90.000",
    regularPrice: "$100.000",
    description:
      "Para negocios que quieren empezar sus redes con una imagen visual coherente desde el primer contenido.",
    items: [
      "Plan Presencia por 1 mes",
      "Identidad visual esencial",
    ],
  },

  {
    title: "Activo + Identidad",
    price: "$105.000",
    regularPrice: "$115.000",
    description:
      "Identidad visual y contenido frecuente para comenzar a desarrollar una presencia reconocible.",
    items: [
      "Plan Activo por 1 mes",
      "Identidad visual esencial",
    ],
  },

  {
    title: "Presencia Plus + Identidad",
    price: "$135.000",
    regularPrice: "$145.000",
    description:
      "Una combinación completa para marcas que necesitan identidad visual y presencia constante en redes.",
    items: [
      "Plan Presencia Plus por 1 mes",
      "Identidad visual esencial",
    ],
  },
]

function GestionContenido() {
  return (
    <div className="social-page">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="social-hero">
          <Link to="/#services" className="social-back-link">
            <ArrowLeft size={16} />
            Volver a servicios
          </Link>

          <div className="social-hero-grid">
            <div className="social-hero-content">
              <div className="social-badge">
                <Megaphone size={16} />
                Gestión de contenido para redes
              </div>

              <h1 className="social-title">
                Mantené tu marca activa y presente.
              </h1>

              <p className="social-description">
                Planificamos, diseñamos, redactamos y publicamos contenido para
                que tu negocio mantenga una presencia profesional en Instagram,
                Facebook y Marketplace.
              </p>

              <div className="social-price-wrapper">
                <div>
                  <p className="social-price-label">
                    Planes mensuales desde
                  </p>

                  <p className="social-price">
                    $35.000
                  </p>

                  <p className="social-currency">
                    ARS
                  </p>
                </div>

                <div className="social-price-detail">
                  <p>Contenido mensual</p>
                  <span>según el plan seleccionado</span>
                </div>
              </div>

              <div className="social-actions">
                <a
                  href="#planes-redes"
                  className="social-button social-button-primary"
                >
                  Ver planes
                  <ArrowRight size={17} />
                </a>

                <a
                  href="#combos-redes"
                  className="social-button social-button-secondary"
                >
                  Ver combinaciones
                </a>
              </div>
            </div>

            <aside className="social-summary">
              <p className="social-eyebrow">
                Nos ocupamos de
              </p>

              <div className="social-summary-list">
                <div className="social-summary-item">
                  <CalendarDays size={20} />

                  <div>
                    <h3>Planificación</h3>
                    <p>
                      Organizamos qué contenido publicar y cómo distribuirlo
                      durante el mes.
                    </p>
                  </div>
                </div>

                <div className="social-summary-item">
                  <Image size={20} />

                  <div>
                    <h3>Diseño y adaptación</h3>
                    <p>
                      Preparamos piezas visuales adaptadas a cada publicación.
                    </p>
                  </div>
                </div>

                <div className="social-summary-item">
                  <PenLine size={20} />

                  <div>
                    <h3>Textos y publicación</h3>
                    <p>
                      Redactamos los contenidos y programamos su publicación.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* PLANES */}
        <section
          id="planes-redes"
          className="social-section social-section-alt"
        >
          <div className="social-container">
            <div className="social-heading">
              <p className="social-eyebrow">
                Planes mensuales
              </p>

              <h2>
                Elegí cuánto querés que tu marca esté presente.
              </h2>

              <p className="social-heading-description">
                Cada plan aumenta la frecuencia de contenido y suma nuevos
                espacios de publicación según las necesidades del negocio.
              </p>
            </div>

            <div className="social-plans-grid">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`social-plan-card ${
                    plan.featured ? "featured" : ""
                  }`}
                >
                  {plan.featured && (
                    <span className="social-featured-label">
                      Mayor presencia
                    </span>
                  )}

                  <div className="social-plan-header">
                    <p>{plan.label}</p>
                    <h3>{plan.name}</h3>
                    <strong>{plan.price}</strong>
                    <span>por mes</span>
                  </div>

                  <p className="social-plan-description">
                    {plan.description}
                  </p>

                  <div className="social-plan-summary">
                    <Clock3 size={16} />
                    <p>{plan.summary}</p>
                  </div>

                  <div className="social-plan-list">
                    {plan.items.map((item) => (
                      <div
                        key={item}
                        className="social-plan-list-item"
                      >
                        <Check size={15} />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contacto-redes"
                    className="social-plan-button"
                  >
                    Consultar este plan
                    <ArrowRight size={15} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EJEMPLO SEMANAL */}
        <section className="social-section">
          <div className="social-container">
            <div className="social-heading">
              <p className="social-eyebrow">
                Presencia Plus
              </p>

              <h2>
                Un ejemplo de cómo podemos distribuir el contenido.
              </h2>

              <p className="social-heading-description">
                El objetivo es evitar concentrar todo el contenido en los mismos
                días y mantener la marca presente durante diferentes momentos
                de la semana.
              </p>
            </div>

            <div className="social-week-grid">
              {weeklyExample.map((item) => (
                <article
                  key={item.day}
                  className="social-week-card"
                >
                  <span>{item.day}</span>
                  <h3>{item.type}</h3>
                </article>
              ))}
            </div>

            <p className="social-week-note">
              La distribución puede modificarse según las necesidades,
              promociones y objetivos de cada negocio.
            </p>
          </div>
        </section>

        {/* QUÉ HACEMOS */}
        <section className="social-section social-section-alt">
          <div className="social-container social-two-columns">
            <div className="social-heading">
              <p className="social-eyebrow">
                Nuestro trabajo
              </p>

              <h2>
                No se trata solamente de subir una imagen.
              </h2>

              <p className="social-heading-description">
                Cada contenido requiere seleccionar qué comunicar, preparar la
                pieza, redactar el mensaje y organizar su publicación.
              </p>
            </div>

            <div className="social-common-grid">
              {commonWork.map((item) => (
                <div
                  key={item}
                  className="social-small-card"
                >
                  <CircleCheck size={17} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMBINACIONES */}
        <section id="combos-redes" className="social-section">
          <div className="social-container">
            <div className="social-heading">
              <p className="social-eyebrow">
                Combinaciones de inicio
              </p>

              <h2>
                Empezá tus redes con una imagen más completa.
              </h2>

              <p className="social-heading-description">
                Si tu negocio todavía no cuenta con logo o identidad visual,
                podés combinar el primer mes de gestión con nuestros servicios
                de diseño.
              </p>
            </div>

            <div className="social-combos-grid">
              {combinations.map((combo) => (
                <article
                  key={combo.title}
                  className="social-combo-card"
                >
                  <div className="social-combo-header">
                    <div>
                      <h3>{combo.title}</h3>

                      <p className="social-combo-price">
                        {combo.price}
                      </p>

                      <p className="social-combo-regular">
                        Valor individual {combo.regularPrice}
                      </p>
                    </div>

                    <Sparkles size={19} />
                  </div>

                  <p className="social-combo-description">
                    {combo.description}
                  </p>

                  <div className="social-combo-list">
                    {combo.items.map((item) => (
                      <div
                        key={item}
                        className="social-combo-list-item"
                      >
                        <CircleCheck size={15} />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="social-combo-note">
              <strong>
                Las combinaciones corresponden al primer mes.
              </strong>

              <p>
                A partir del segundo mes, la gestión continúa con el valor
                mensual del plan de contenido seleccionado.
              </p>
            </div>
          </div>
        </section>

        {/* NO INCLUYE */}
        <section className="social-section social-section-alt">
          <div className="social-container">
            <div className="social-scope-grid">
              <div className="social-heading">
                <p className="social-eyebrow">
                  Alcance del servicio
                </p>

                <h2>
                  Qué no incluye la gestión de contenido.
                </h2>

                <p className="social-heading-description">
                  El servicio está orientado a la creación, planificación y
                  publicación de contenido. No contempla la administración
                  integral de la atención al público del negocio.
                </p>
              </div>

              <div className="social-not-included-grid">
                {notIncluded.map((item) => (
                  <div
                    key={item}
                    className="social-small-card muted"
                  >
                    <X size={16} />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* RESPONSABILIDAD DEL CLIENTE */}
        <section className="social-section">
          <div className="social-container social-client-grid">
            <div className="social-heading">
              <p className="social-eyebrow">
                Información del negocio
              </p>

              <h2>
                Para comunicar correctamente necesitamos información actualizada.
              </h2>

              <p className="social-heading-description">
                El contenido se crea en base a la información proporcionada por
                cada negocio.
              </p>
            </div>

            <div className="social-client-list">
              {clientResponsibilities.map((item) => (
                <div
                  key={item}
                  className="social-client-item"
                >
                  <Check size={16} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MATERIAL VISUAL */}
        <section className="social-section social-section-alt">
          <div className="social-container">
            <div className="social-material-note">
              <Image size={25} />

              <div>
                <p className="social-eyebrow">
                  Material visual
                </p>

                <h2>
                  ¿Qué pasa si el negocio no tiene buenas imágenes?
                </h2>

                <p>
                  Cuando el cliente no cuente con material visual adecuado,
                  podemos trabajar con imágenes proporcionadas por el cliente,
                  recursos autorizados o imágenes de referencia apropiadas para
                  la pieza, según cada caso.
                </p>

                <strong>
                  La producción presencial de fotografías o videos no está
                  incluida dentro de estos planes.
                </strong>
              </div>
            </div>
          </div>
        </section>

        {/* ACLARACIÓN */}
        <section className="social-note-section">
          <div className="social-note">
            <ShoppingBag size={23} />

            <p className="social-eyebrow">
              Atención de clientes
            </p>

            <p>
              La respuesta de mensajes, consultas, comentarios, pedidos y
              potenciales clientes queda a cargo del responsable del negocio.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section
          id="contacto-redes"
          className="social-cta-section"
        >
          <div className="social-cta">
            <p className="social-eyebrow">
              Gestión de contenido
            </p>

            <h2>
              Mantené tus redes activas sin tener que ocuparte de cada publicación.
            </h2>

            <p>
              Contanos sobre tu negocio y vemos qué nivel de presencia se adapta
              mejor a tus objetivos.
            </p>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button social-button-primary"
            >
              Consultar gestión de redes
              <ArrowRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default GestionContenido