import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

import { services } from "../data/services"

function Services() {
    return (
        <section id="services" className="mx-auto max-w-7xl px-6 py-20">
            <div className="mb-12 text-center">
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#BFA2FF]">
                    Servicios
                </p>

                <h2 className="text-3xl font-semibold md:text-5xl">
                    Órbitas digitales para cada etapa de tu marca.
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-[#A1A1AA]">
                    Elegí el punto de partida ideal para construir tu ecosistema digital.
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                {services.map((service) => (
                    <article
                        key={service.title}
                        className={`relative flex min-h-[520px] flex-col justify-between rounded-3xl border bg-white/5 p-7 transition hover:-translate-y-2 hover:bg-white/10 ${service.popular
                                ? "border-[#BFA2FF]/60 shadow-[0_0_45px_rgba(191,162,255,0.16)]"
                                : "border-white/10 hover:border-[#BFA2FF]/40"
                            }`}
                    >
                        {service.popular && (
                            <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#BFA2FF] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0F0F14]">
                                Más elegido
                            </span>
                        )}

                        <div>
                            <div className="mb-5 flex items-start justify-between gap-6">
                                <div>
                                    <h3 className="text-2xl font-semibold">
                                        {service.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[#BFA2FF]">
                                        {service.subtitle}
                                    </p>
                                </div>

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#BFA2FF]/25 bg-[#BFA2FF]/10 text-2xl">
                                    {service.icon}
                                </div>
                            </div>

                            <p className="mt-5 text-sm leading-6 text-[#A1A1AA]">
                                {service.description}
                            </p>

                            <ul className="mt-7 space-y-2.5">
                                {service.items.map((item) => (
                                    <li key={item} className="text-sm text-[#A1A1AA]">
                                        ✦ {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-8 border-t border-white/10 pt-5">
                            <p className="text-[11px] uppercase tracking-[0.35em] text-[#A1A1AA]">
                                Desde
                            </p>

                            <div className="mt-2 flex items-end gap-3">
                                <p className="text-2xl font-semibold">
                                    {service.promoPrice}
                                </p>

                                {service.realPrice && (
                                    <p className="pb-0.5 text-sm text-[#A1A1AA] line-through">
                                        {service.realPrice}
                                    </p>
                                )}
                            </div>

                            {service.realPrice && (
                                <p className="mt-1 text-xs text-[#BFA2FF]">
                                    Precio lanzamiento
                                </p>
                            )}

                            <Link
                                to={service.detailLink}
                                className="mt-5 flex w-full items-center justify-center gap-3 rounded-full border border-[#BFA2FF]/40 px-5 py-3 text-sm font-medium text-[#BFA2FF] transition hover:bg-[#BFA2FF] hover:text-[#0F0F14]"
                            >
                                Conocer todo lo que incluye
                                <ArrowRight size={17} />
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Services