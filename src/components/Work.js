import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="group relative w-full"
        >
            <div className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-violet-500/50 hover:shadow-[0_0_50px_-12px_rgba(139,92,246,0.25)]">

                {/* Image Container */}
                <div className="relative h-[350px] md:h-[450px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 z-10 transition-opacity duration-500 group-hover:opacity-60" />
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-violet-300 text-xs font-bold tracking-widest uppercase mb-3 bg-violet-500/10 inline-block px-3 py-1 rounded-full border border-violet-500/20 backdrop-blur-md">
                                {project.tag}
                            </p>
                            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3 leading-tight group-hover:text-violet-200 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-white/70 text-sm md:text-base max-w-md line-clamp-2 font-light">
                                {project.result}
                            </p>
                        </div>

                        <div className="flex gap-4 opacity-0 transform translate-y-4 transition-all duration-300 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                            {/* Action Buttons */}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-white text-black rounded-full hover:scale-110 transition-transform hover:bg-violet-200"
                                title="View Live"
                            >
                                <FiExternalLink size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default function Work({ projects }) {
    return (
        <section id="work" className="py-32 px-6 md:px-20 relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Selected Work
                    </h2>
                    <div className="h-1 w-20 bg-violet-500 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
