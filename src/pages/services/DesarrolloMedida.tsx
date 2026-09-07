import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CalendarDays,
  Check,
  CircleCheck,
  Code2,
  Database,
  Plug,
  ShoppingCart,
  Users,
} from "lucide-react"

import { Link } from "react-router-dom"

import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

import "./DesarrolloMedida.css"

const developmentTypes = [
  {
    icon: ShoppingCart,
    title: "E-commerce y tiendas online",
    description:
      "Tiendas digitales con herramientas para administrar productos, clientes y ventas.",
    items: [
      "Catálogo de productos",
      "Carrito de compras",
      "Gestión de pedidos",
      "Control de stock",
      "Integración con medios de pago",
      "Cuentas de clientes",
      "Panel de administración",
    ],
  },

  {
    icon: BarChart3,
    title: "Sistemas de gestión",
    description:
      "Herramientas internas para organizar y administrar diferentes áreas de un negocio.",
    items: [
      "Dashboards personalizados",
      "Gestión de productos o servicios",
      "Gestión de clientes",
      "Gestión de pedidos",
      "Administración de usuarios",
      "Control de stock",
      "Estadísticas y métricas",
      "Diferentes niveles de acceso",
    ],
  },

  {
    icon: Users,
    title: "Plataformas con usuarios",
    description:
      "Plataformas que necesitan cuentas, perfiles, áreas privadas y diferentes permisos.",
    items: [
      "Registro e inicio de sesión",
      "Perfiles de usuario",
      "Recuperación de contraseña",
      "Roles y permisos",
      "Áreas privadas",
      "Gestión de información y contenido",
    ],
  },

  {
    icon: CalendarDays,
    title: "Reservas y turnos",
    description:
      "Sistemas para gestionar disponibilidad, solicitudes, reservas o turnos.",
    items: [
      "Solicitud y gestión de reservas",
      "Calendarios",
      "Disponibilidad",
      "Administración de turnos",
      "Confirmaciones y notificaciones",
      "Panel de gestión",
    ],
  },
]

const integrations = [
  "APIs y servicios externos",
  "Pasarelas de pago",
  "Envío automático de emails",
  "Almacenamiento de imágenes y archivos",
  "Formularios avanzados",
  "Bases de datos",
  "Automatización de determinadas tareas",
]

const process = [
  {
    number: "01",
    title: "Analizamos la necesidad",
    text: "Primero entendemos qué problema necesita resolver el proyecto y cuáles son sus objetivos.",
  },
  {
    number: "02",
    title: "Definimos funcionalidades",
    text: "Determinamos qué módulos, usuarios, integraciones y herramientas debe incluir el sistema.",
  },
  {
    number: "03",
    title: "Evaluamos complejidad",
    text: "Analizamos arquitectura, tecnologías, tiempos estimados y alcance real del desarrollo.",
  },
  {
    number: "04",
    title: "Armamos el presupuesto",
    text: "Con el alcance definido se presenta una propuesta personalizada para el proyecto.",
  },
]

const projectExamples = [
  "Tiendas online",
  "Sistemas internos para empresas",
  "Paneles administrativos",
  "Portales para clientes",
  "Plataformas de reservas",
  "Sistemas de stock y pedidos",
  "Aplicaciones web",
  "Herramientas administrativas",
]

function DesarrolloMedida() {
  return (
    <div className="development-page">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="development-hero">
          <Link to="/#services" className="development-back-link">
            <ArrowLeft size={16} />
            Volver a servicios
          </Link>

          <div className="development-hero-grid">
            <div className="development-hero-content">
              <div className="development-badge">
                <Code2 size={16} />
                Proyectos personalizados
              </div>

              <h1 className="development-title">
                Desarrollo a medida
              </h1>

              <p className="development-description">
                ¿Tu proyecto necesita más que una página web? Desarrollamos
                soluciones digitales personalizadas para negocios y proyectos
                que requieren funcionalidades específicas, sistemas de gestión
                o aplicaciones web.
              </p>

              <p className="development-description-secondary">
                Cada desarrollo se analiza individualmente para definir
                funcionalidades, tecnologías, tiempos de desarrollo y
                presupuesto.
              </p>

              <div className="development-price-wrapper">
                <div>
                  <p className="development-price-label">
                    Presupuesto
                  </p>

                  <p className="development-price">
                    Personalizado
                  </p>
                </div>

                <div className="development-price-detail">
                  <p>Según alcance</p>
                  <span>y complejidad del proyecto</span>
                </div>
              </div>

              <div className="development-actions">
                <a
                  href="#contacto-desarrollo"
                  className="development-button development-button-primary"
                >
                  Consultar mi proyecto
                  <ArrowRight size={17} />
                </a>

                <a
                  href="#soluciones"
                  className="development-button development-button-secondary"
                >
                  Ver qué podemos desarrollar
                </a>
              </div>
            </div>

            <aside className="development-summary">
              <p className="development-eyebrow">
                Pensado para proyectos que necesitan
              </p>

              <div className="development-summary-list">
                <div className="development-summary-item">
                  <Database size={20} />

                  <div>
                    <h3>Datos y gestión</h3>
                    <p>
                      Bases de datos, stock, clientes, pedidos y administración.
                    </p>
                  </div>
                </div>

                <div className="development-summary-item">
                  <Users size={20} />

                  <div>
                    <h3>Usuarios y permisos</h3>
                    <p>
                      Registro, perfiles, roles, accesos y áreas privadas.
                    </p>
                  </div>
                </div>

                <div className="development-summary-item">
                  <Plug size={20} />

                  <div>
                    <h3>Integraciones</h3>
                    <p>
                      Pagos, APIs, emails, almacenamiento y servicios externos.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* QUÉ PODEMOS DESARROLLAR */}
        <section
          id="soluciones"
          className="development-section development-section-alt"
        >
          <div className="development-container">
            <div className="development-heading">
              <p className="development-eyebrow">
                Qué podemos desarrollar
              </p>

              <h2>
                Soluciones pensadas alrededor de las necesidades de cada
                proyecto.
              </h2>

              <p className="development-heading-description">
                No trabajamos con una estructura cerrada. Las funcionalidades
                se seleccionan y combinan según lo que realmente necesita el
                negocio.
              </p>
            </div>

            <div className="development-types-grid">
              {developmentTypes.map((type) => {
                const Icon = type.icon

                return (
                  <article
                    key={type.title}
                    className="development-type-card"
                  >
                    <div className="development-type-header">
                      <div className="development-type-icon">
                        <Icon size={22} />
                      </div>

                      <div>
                        <h3>{type.title}</h3>
                        <p>{type.description}</p>
                      </div>
                    </div>

                    <div className="development-type-list">
                      {type.items.map((item) => (
                        <div
                          key={item}
                          className="development-type-list-item"
                        >
                          <Check size={15} />
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* APLICACIONES WEB */}
        <section className="development-section">
          <div className="development-container development-app-grid">
            <div className="development-heading">
              <p className="development-eyebrow">
                Aplicaciones web
              </p>

              <h2>
                Herramientas creadas específicamente para tu negocio.
              </h2>

              <p className="development-heading-description">
                Podemos desarrollar plataformas internas, sistemas
                administrativos, herramientas empresariales, portales para
                clientes y otras soluciones digitales adaptadas a una necesidad
                concreta.
              </p>
            </div>

            <div className="development-project-examples">
              {projectExamples.map((item) => (
                <div
                  key={item}
                  className="development-small-card"
                >
                  <CircleCheck size={17} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTEGRACIONES */}
        <section className="development-section development-section-alt">
          <div className="development-container">
            <div className="development-heading">
              <p className="development-eyebrow">
                Integraciones
              </p>

              <h2>
                Conectamos tu aplicación con las herramientas que necesita.
              </h2>

              <p className="development-heading-description">
                Según el proyecto podemos integrar servicios externos,
                automatizaciones y herramientas que permitan ampliar las
                funcionalidades del sistema.
              </p>
            </div>

            <div className="development-integrations-grid">
              {integrations.map((item) => (
                <div
                  key={item}
                  className="development-integration-card"
                >
                  <Plug size={17} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESO */}
        <section className="development-section">
          <div className="development-container">
            <div className="development-heading">
              <p className="development-eyebrow">
                Cómo trabajamos
              </p>

              <h2>
                Primero entendemos el proyecto. Después definimos la solución.
              </h2>

              <p className="development-heading-description">
                A diferencia de los planes web tradicionales, un desarrollo a
                medida necesita definir su alcance antes de poder establecer un
                precio y un tiempo de entrega.
              </p>
            </div>

            <div className="development-process-grid">
              {process.map((step) => (
                <article
                  key={step.number}
                  className="development-process-card"
                >
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* DIFERENCIA CON LOS PLANES */}
        <section className="development-section development-section-alt">
          <div className="development-container">
            <div className="development-difference">
              <p className="development-eyebrow">
                Un proyecto pensado para tu negocio
              </p>

              <h2>
                No todos los proyectos pueden resolverse con un plan cerrado.
              </h2>

              <p>
                A diferencia de Launch Orbit, Brand Orbit y Custom Orbit, los
                desarrollos a medida no tienen un precio fijo. Primero
                analizamos qué necesita el proyecto, qué funcionalidades debe
                incluir y cuál es su complejidad.
              </p>

              <strong>
                El presupuesto se define individualmente para cada desarrollo.
              </strong>
            </div>
          </div>
        </section>

        {/* PLANES ALTERNATIVOS */}
        <section className="development-section">
          <div className="development-container">
            <div className="development-alternative">
              <div>
                <p className="development-eyebrow">
                  ¿Necesitás algo más simple?
                </p>

                <h2>
                  Quizás uno de nuestros planes web sea suficiente.
                </h2>

                <p>
                  Si tu proyecto no necesita usuarios, bases de datos, paneles o
                  funcionalidades complejas, podemos ayudarte con Launch, Brand
                  o Custom Orbit.
                </p>
              </div>

              <Link
                to="/#services"
                className="development-button development-button-secondary"
              >
                Ver planes web
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="contacto-desarrollo"
          className="development-cta-section"
        >
          <div className="development-cta">
            <p className="development-eyebrow">
              Desarrollo a medida
            </p>

            <h2>
              Contanos qué necesitás construir.
            </h2>

            <p>
              Analizamos la idea, las funcionalidades necesarias y el alcance
              del proyecto para preparar una propuesta personalizada.
            </p>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="development-button development-button-primary"
            >
              Consultar mi proyecto
              <ArrowRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default DesarrolloMedida