function Footer() {
    return (
        <footer
            id="contact"
            className="border-t border-white/10 px-6 py-20"
        >

            <div className="mx-auto max-w-7xl text-center">

                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-violet-300">
                    Sasha Studio
                </p>


                <h2 className="mx-auto max-w-3xl text-3xl font-semibold md:text-5xl">
                    Tu idea ya existe. Ahora creemos el lugar donde pueda crecer.
                </h2>


                <p className="mx-auto mt-6 max-w-xl text-neutral-300">
                    Si tenés un proyecto, emprendimiento o marca que querés llevar al mundo digital,
                    podemos construirlo juntos.
                </p>


                <a
                    href="https://wa.me/"
                    target="_blank"
                    className="mt-10 inline-block rounded-full bg-white px-8 py-4 font-semibold text-neutral-950 transition hover:scale-105"
                >
                    Hablemos de tu proyecto
                </a>


                <div className="mt-16 flex justify-center gap-8 text-sm text-neutral-400">

                    <a href="#">
                        Instagram
                    </a>

                    <a href="#">
                        LinkedIn
                    </a>

                    <a href="#">
                        GitHub
                    </a>

                </div>


                <p className="mt-12 text-sm text-neutral-500">
                    © 2026 Sasha Studio — Diseño & Desarrollo Web
                </p>


            </div>

        </footer>
    )
}

export default Footer