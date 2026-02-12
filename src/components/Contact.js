import { motion } from 'framer-motion'
import { FiMail, FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi'

export default function Contact() {
    return (
        <section className="py-32 px-6 md:px-20 relative z-10">
            <div className="max-w-5xl mx-auto text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
                        Ready to build something <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                            extraordinary?
                        </span>
                    </h2>

                    <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                        I'm currently available for freelance projects and open to new opportunities.
                        Let's discuss how we can elevate your digital presence.
                    </p>

                    <a
                        href="mailto:masoodhussainr8@gmail.com"
                        className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold rounded-full text-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                    >
                        <span className="relative z-10 group-hover:text-violet-900 transition-colors">Start a Conversation</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-200 to-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6"
                >
                    <div className="text-white/40 text-sm">
                        © {new Date().getFullYear()} Masood Hussain. All rights reserved.
                    </div>

                    <div className="flex gap-6">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><FiGithub size={20} /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><FiLinkedin size={20} /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><FiTwitter size={20} /></a>
                        <a href="mailto:masoodhussainr8@gmail.com" className="text-white/40 hover:text-white transition-colors"><FiMail size={20} /></a>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
