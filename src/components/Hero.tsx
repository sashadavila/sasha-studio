function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center px-6 pt-24 text-center">
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-32 h-[320px] w-[320px] -translate-x-1/2 rounded-full border border-[#BFA2FF]/10" />
                <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-[#BFA2FF]/5" />
            </div>

            <div>
                <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#BFA2FF]">
                    Orbit Digital Studio
                </p>

                <h1 className="mx-auto max-w-5xl text-4xl font-semibold leading-tight md:text-7xl">
                    Creamos ecosistemas digitales para marcas que quieren crecer.
                </h1>

                <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#A1A1AA]">
                    Diseño y desarrollo experiencias digitales que conectan tu historia,
                    tus servicios y tus objetivos con las personas correctas.
                </p>

                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                    <a
                        href="#contact"
                        className="rounded-full bg-[#F5F1EA] px-7 py-4 font-semibold text-[#0F0F14] transition hover:scale-105"
                    >
                        Crear mi proyecto
                    </a>

                    <a
                        href="#projects"
                        className="rounded-full border border-white/15 px-7 py-4 font-semibold text-[#F5F1EA] transition hover:border-[#BFA2FF]/60 hover:text-[#BFA2FF]"
                    >
                        Ver trabajos
                    </a>
                </div>

                <div className="mx-auto mt-16 grid max-w-3xl gap-4 text-sm text-[#A1A1AA] sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        Diseño con identidad
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        Desarrollo profesional
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        Web lista para lanzar
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero