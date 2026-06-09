import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const questions = [
    {
        question: "¿Necesito saber algo de tecnología para tener mi web?",
        answer:
            "No. Te acompaño durante todo el proceso, desde ordenar tus ideas hasta tener tu página publicada y lista para compartir.",
    },
    {
        question: "¿Qué necesito tener antes de empezar?",
        answer:
            "Principalmente tu idea. Podemos trabajar con tus textos, imágenes, referencias o ayudarte a organizar el contenido si todavía no está definido.",
    },
    {
        question: "¿Cuánto tarda crear una página?",
        answer:
            "Depende del proyecto. Una landing simple puede estar lista en pocos días, mientras que una web más personalizada requiere más planificación.",
    },
    {
        question: "¿También hacés proyectos más complejos?",
        answer:
            "Sí. Además de landings, desarrollamos soluciones como catálogos, e-commerce, usuarios, paneles administrativos, dashboards e integraciones.",
    },
    {
        question: "¿Puedo pedir cambios después?",
        answer:
            "Sí. También existe la posibilidad de contratar mantenimiento mensual para actualizar textos, imágenes o sumar mejoras.",
    },
]

function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className="mx-auto max-w-4xl px-6 py-24">
            <div className="mb-16 text-center">
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#BFA2FF]">
                    Preguntas frecuentes
                </p>

                <h2 className="text-3xl font-semibold md:text-5xl">
                    Antes de crear tu web
                </h2>
            </div>


            <div className="space-y-5">
                {questions.map((item, index) => {
                    const isOpen = openIndex === index

                    return (
                        <article
                            key={item.question}
                            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur transition hover:border-[#BFA2FF]/40"
                        >

                            <button
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className="flex w-full items-center justify-between gap-6 p-6 text-left"
                            >

                                <h3 className="text-lg font-semibold">
                                    {item.question}
                                </h3>


                                <motion.div
                                    animate={{
                                        rotate: isOpen ? 180 : 0,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                    }}
                                    className="text-[#BFA2FF]"
                                >
                                    <ChevronDown size={24} />
                                </motion.div>


                            </button>


                            <AnimatePresence>
                                {isOpen && (

                                    <motion.div
                                        initial={{
                                            height: 0,
                                            opacity: 0,
                                        }}

                                        animate={{
                                            height: "auto",
                                            opacity: 1,
                                        }}

                                        exit={{
                                            height: 0,
                                            opacity: 0,
                                        }}

                                        transition={{
                                            duration: 0.3,
                                        }}
                                    >

                                        <p className="px-6 pb-6 leading-7 text-[#A1A1AA]">
                                            {item.answer}
                                        </p>

                                    </motion.div>

                                )}
                            </AnimatePresence>

                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default FAQ