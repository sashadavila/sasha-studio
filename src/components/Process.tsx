const steps = [
    {
        number: "01",
        title: "Descubrimos tu idea",
        description:
            "Conversamos sobre tu proyecto, objetivos y la identidad que querés transmitir.",
    },
    {
        number: "02",
        title: "Diseñamos la experiencia",
        description:
            "Organizo tus ideas en una estructura clara, atractiva y pensada para tus clientes.",
    },
    {
        number: "03",
        title: "Desarrollo tu web",
        description:
            "Construyo una página moderna, responsive y lista para funcionar online.",
    },
    {
        number: "04",
        title: "Lanzamiento",
        description:
            "Publicamos tu sitio para que puedas compartirlo con tus clientes.",
    },
]

function Process() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-24">

            <div className="mb-16 text-center">

                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-violet-300">
                    Proceso
                </p>

                <h2 className="text-3xl font-semibold md:text-5xl">
                    Crear tu web puede ser simple.
                </h2>

            </div>


            <div className="grid gap-6 md:grid-cols-4">

                {steps.map((step) => (

                    <article
                        key={step.number}
                        className="rounded-3xl border border-white/10 bg-white/5 p-8"
                    >

                        <p className="text-4xl font-bold text-violet-300">
                            {step.number}
                        </p>

                        <h3 className="mt-8 text-xl font-semibold">
                            {step.title}
                        </h3>

                        <p className="mt-4 text-sm text-neutral-300">
                            {step.description}
                        </p>

                    </article>

                ))}

            </div>

        </section>
    )
}

export default Process