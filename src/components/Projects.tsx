import { ArrowRight } from "lucide-react"
import { projects } from "../data/projects"

function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-7xl px-6 py-24"
    >
      <div className="mb-14 min-w-0">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#BFA2FF]">
          Ecosistemas creados
        </p>

        <h2 className="max-w-3xl text-3xl font-semibold md:text-5xl">
          Proyectos reales convertidos en experiencias digitales.
        </h2>

        <p className="mt-6 max-w-2xl text-[#A1A1AA]">
          Landings, sitios institucionales, mantenimiento y desarrollos más
          complejos con usuarios, dashboards y lógica de negocio.
        </p>
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <article
            key={project.name}
            className="
              group
              flex
              min-h-[410px]
              min-w-0
              w-full
              max-w-full
              flex-col
              justify-between
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-5
              transition
              hover:-translate-y-2
              hover:border-[#BFA2FF]/40
              hover:bg-white/10
            "
          >
            <div className="min-w-0">
              {/* Preview real */}
              <div
                className="
                  relative
                  mb-5
                  h-40
                  w-full
                  max-w-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#0F0F14]
                "
              >
                <iframe
                  src={project.link}
                  title={project.name}
                  loading="lazy"
                  className="
                    pointer-events-none
                    absolute
                    left-0
                    top-0
                    h-[700px]
                    w-[1200px]
                    origin-top-left
                    scale-[0.20]
                    border-0
                  "
                />
              </div>

              <div className="flex min-w-0 flex-wrap items-center gap-2">
                <p className="text-xs text-[#BFA2FF]">
                  {project.category}
                </p>

                <span
                  className="
                    rounded-full
                    border
                    border-[#BFA2FF]/30
                    bg-[#BFA2FF]/10
                    px-3
                    py-1
                    text-[10px]
                    text-[#F5F1EA]
                  "
                >
                  {project.plan}
                </span>
              </div>

              <h3 className="mt-3 text-xl font-semibold">
                {project.name}
              </h3>

              <p
                className="
                  mt-4
                  max-w-full
                  text-sm
                  leading-6
                  text-[#A1A1AA]
                "
              >
                {project.description}
              </p>
            </div>

            <div className="min-w-0">
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full
                      border
                      border-white/10
                      px-2.5
                      py-1
                      text-[11px]
                      text-[#A1A1AA]
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-5
                  flex
                  w-fit
                  items-center
                  gap-2
                  text-sm
                  text-[#BFA2FF]
                  transition
                  group-hover:text-[#F5F1EA]
                "
              >
                Ver proyecto
                <ArrowRight size={15} />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <a
          href="#"
          className="
            max-w-full
            rounded-full
            border
            border-[#BFA2FF]/40
            px-6
            py-4
            text-center
            text-sm
            font-medium
            text-[#BFA2FF]
            transition
            hover:bg-[#BFA2FF]
            hover:text-[#0F0F14]
            sm:px-8
          "
        >
          Ver todos los proyectos en los que hemos trabajado →
        </a>
      </div>
    </section>
  )
}

export default Projects