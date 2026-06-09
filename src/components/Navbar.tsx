import orbitIcon from "../assets/orbit/orbit-icon.png"

function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0F0F14]/80 backdrop-blur-md">

            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">


                {/* LOGO */}
                <a
                    href="#"
                    className="flex items-center gap-5"
                >

                    <div
                        className="
            flex
            h-14 w-14
            items-center
            justify-center
            overflow-hidden"
                    >

                        <img
                            src={orbitIcon}
                            alt="Orbit Digital Studio"
                            className="
              h-32 w-32
              max-w-none
              object-cover
              drop-shadow-[0_0_25px_rgba(191,162,255,0.7)]
              "
                        />

                    </div>


                    <div className="leading-none">

                        <p
                            className="
              text-lg
              font-semibold
              tracking-[0.25em]
              text-[#F5F1EA]"
                        >
                            ORBIT
                        </p>


                        <p
                            className="
              mt-1
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-[#A1A1AA]"
                        >
                            DIGITAL STUDIO
                        </p>

                    </div>

                </a>



                {/* LINKS */}
                <div className="hidden items-center gap-8 text-sm text-[#A1A1AA] md:flex">

                    <a
                        href="#services"
                        className="transition hover:text-[#BFA2FF]"
                    >
                        Servicios
                    </a>


                    <a
                        href="#projects"
                        className="transition hover:text-[#BFA2FF]"
                    >
                        Proyectos
                    </a>


                    <a
                        href="#about"
                        className="transition hover:text-[#BFA2FF]"
                    >
                        Sobre mí
                    </a>


                    <a
                        href="#contact"
                        className="transition hover:text-[#BFA2FF]"
                    >
                        Contacto
                    </a>

                </div>



                {/* BOTÓN */}
                <a
                    href="#contact"
                    className="
          hidden
          rounded-full
          border border-[#BFA2FF]/40
          px-6 py-2
          text-sm
          font-medium
          text-[#F5F1EA]
          transition
          hover:bg-[#BFA2FF]
          hover:text-[#0F0F14]
          md:block"
                >

                    Empecemos

                </a>


            </nav>

        </header>
    )
}

export default Navbar