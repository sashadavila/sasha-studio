function About() {
    return (
        <section
            id="about"
            className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2"
        >
            <div>
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#BFA2FF]">
                    La visión detrás de Orbit
                </p>

                <h2 className="text-3xl font-semibold md:text-5xl">
                    No creamos solo páginas. Creamos espacios digitales con intención.
                </h2>
            </div>

            <div className="space-y-6 text-[#A1A1AA]">
                <p>
                    Orbit nace con la idea de acompañar a marcas, profesionales y
                    emprendimientos a construir una presencia digital clara, estética y
                    funcional.
                </p>

                <p>
                    Soy Sasha, desarrolladora web y fundadora de Orbit Studio. Mi trabajo
                    une tecnología, diseño y comunicación para transformar ideas en
                    experiencias digitales que transmitan confianza.
                </p>

                <p>
                    Cada proyecto se piensa como un pequeño ecosistema: identidad, contenido,
                    estructura, experiencia y desarrollo trabajando alrededor de una misma marca.
                </p>

                <div className="grid grid-cols-3 gap-4 pt-8">
                    <div>
                        <p className="text-3xl font-bold text-[#F5F1EA]">01</p>
                        <p className="text-sm">Identidad</p>
                    </div>

                    <div>
                        <p className="text-3xl font-bold text-[#F5F1EA]">02</p>
                        <p className="text-sm">Estrategia</p>
                    </div>

                    <div>
                        <p className="text-3xl font-bold text-[#F5F1EA]">03</p>
                        <p className="text-sm">Desarrollo</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About