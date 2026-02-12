import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'

export default function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
            {/* Subtle Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/10 to-transparent pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10"
            >
                <h2 className="text-violet-300 font-medium tracking-[0.3em] mb-6 text-sm md:text-base uppercase mix-blend-plus-lighter">
                    Masood Hussain
                </h2>

                <h1 className="font-heading text-6xl md:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
                    DIGITAL <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 animate-gradient-x">
                        EXPERIENCES
                    </span>
                </h1>

                <p className="text-white/70 max-w-lg mx-auto text-lg md:text-xl leading-relaxed font-light">
                    I build immersive web applications that blend
                    <span className="text-white font-medium"> aesthetic design</span> with
                    <span className="text-white font-medium"> robust engineering</span>.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40"
            >
                <div className="flex flex-col items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to Explore</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        <FiArrowDown className="text-xl" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
