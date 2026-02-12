import { motion } from 'framer-motion'
import { FiLayout, FiSmartphone, FiCode, FiCpu } from 'react-icons/fi'

const Feature = ({ icon: Icon, title, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-violet-500/30 hover:bg-white/10 transition-all duration-300 group"
    >
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Icon className="text-2xl text-cyan-300 group-hover:text-cyan-200" />
        </div>
        <h3 className="text-xl font-heading font-bold text-white mb-3">{title}</h3>
        <p className="text-white/60 text-sm leading-relaxed font-light">{desc}</p>
    </motion.div>
)

export default function About() {
    const features = [
        {
            icon: FiLayout,
            title: "Intentional Design",
            desc: "Every pixel serves a purpose. I create interfaces that guide users naturally toward their goals."
        },
        {
            icon: FiSmartphone,
            title: "Mobile-First",
            desc: "Responsive isn't an afterthought. Your site will feel native on every device, from mobile to desktop."
        },
        {
            icon: FiCode,
            title: "Clean Code",
            desc: "Maintainable, scalable, and performant code that future developers (and you) will thank me for."
        },
        {
            icon: FiCpu,
            title: "Performance",
            desc: "Blazing fast load times and smooth 60fps animations. Performance is a key feature, not a bug."
        }
    ]

    return (
        <section className="py-32 px-6 md:px-20 relative z-10">
            <div className="max-w-7xl mx-auto">

                {/* Why Me Section */}
                <div className="mb-32">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-16"
                    >
                        Why collaborate?
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((f, i) => (
                            <Feature key={i} {...f} delay={i * 0.1} />
                        ))}
                    </div>
                </div>

                {/* Process Section - Simplified horizontal timeline or steps */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-16"
                    >
                        My Process
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            "Discovery & Strategy",
                            "Wireframing & UI",
                            "Development",
                            "Launch & Scale"
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="relative"
                            >
                                <div className="text-6xl font-bold text-white/5 absolute -top-8 -left-4 select-none">
                                    0{i + 1}
                                </div>
                                <div className="relative z-10">
                                    <div className="h-1 w-12 bg-gradient-to-r from-violet-500 to-cyan-500 mb-6" />
                                    <h3 className="text-2xl font-bold text-white mb-2">{step}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
