import React from "react"
import { motion } from "framer-motion"
import {
  FiCheckCircle,
  FiSmartphone,
  FiLayout,
  FiMessageSquare,
  FiArrowUpRight,
} from "react-icons/fi"

export default function Portfolio() {
  const projects = [
    {
      title: "Neuro-Inclusive Education Platform",
      image: "/image.png",
      link: "https://masood2108.github.io/neuro-inclusive/",
      tag: "Accessibility • Education",
      result: "Accessibility-first redesign for neurodiverse learners",
    },
    {
      title: "Wellness & Lifestyle Website",
      image: "/image2.png",
      link: "https://thewomenslife.com/",
      tag: "Marketing • Wellness",
      result: "Brand-focused site to improve engagement & trust",
    },
    {
      title: "99DX – Luxury Fragrance Brand",
      image: "/image3.png",
      link: "https://em5-virid.vercel.app/",
      tag: "Luxury • Client Work",
      result: "Premium visual identity for a fragrance brand",
    },
    {
      title: "VOIDEX – SaaS Dashboard",
      image: "/image4.png",
      link: "https://voidex-eight.vercel.app",
      tag: "SaaS • Product",
      result: "Clean dashboard UX for faster user decisions",
    },
  ]

  return (
    <div className="bg-[#0b0d10] text-white overflow-x-hidden scroll-smooth">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center px-6 md:px-20">
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-violet-600/25 blur-[200px]" />
        <div className="absolute top-1/2 right-[-120px] w-[420px] h-[420px] bg-cyan-500/20 blur-[180px]" />

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative max-w-4xl"
        >
          <p className="uppercase tracking-[0.35em] text-xs text-white/50 mb-6">
            Freelance Web Developer
          </p>

          <h1 className="font-heading text-[clamp(2.8rem,7vw,6.2rem)]
                         leading-[1.02] tracking-[-0.04em]">
            I design & build
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              modern web experiences
            </span>
            <br />
            that feel intentional.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-white/65 max-w-2xl">
            Helping startups and brands turn ideas into clean,
            high-performance websites that users trust.
          </p>

          {/* credibility */}
          <div className="mt-6 flex items-center gap-2 text-sm text-white/50">
            <FiCheckCircle className="text-violet-400" />
            <span>End-to-end design → development delivery</span>
          </div>

          <div className="mt-12 flex gap-5 flex-wrap">
            <a
              href="#projects"
              className="px-9 py-5 bg-white text-black rounded-2xl
                         hover:scale-105 transition"
            >
              View Selected Work
            </a>
            <a
              href="mailto:masoodhussainr8@gmail.com"
              className="px-9 py-5 border border-white/20 rounded-2xl
                         hover:border-violet-400 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= WHY ME ================= */}
      <section className="px-6 md:px-20 py-28 border-t border-white/10">
        <h2 className="font-heading text-3xl md:text-4xl mb-16">
          Why clients work with me
        </h2>

        <div className="grid md:grid-cols-3 gap-14 text-white/70">
          <div>
            <FiLayout className="text-2xl text-violet-400 mb-4" />
            <h3 className="font-heading text-xl text-white mb-3">
              Intentional design
            </h3>
            <p>
              Clear hierarchy and structure that helps users
              understand your product quickly.
            </p>
          </div>

          <div>
            <FiSmartphone className="text-2xl text-violet-400 mb-4" />
            <h3 className="font-heading text-xl text-white mb-3">
              Mobile-first UX
            </h3>
            <p>
              Designed for real users on real devices —
              not just desktop screenshots.
            </p>
          </div>

          <div>
            <FiMessageSquare className="text-2xl text-violet-400 mb-4" />
            <h3 className="font-heading text-xl text-white mb-3">
              Clear communication
            </h3>
            <p>
              Straightforward timelines, honest feedback,
              and zero unnecessary friction.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="px-6 md:px-20 py-28 md:py-36">
        <h2 className="font-heading text-4xl md:text-5xl mb-24">
          Selected Case Studies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`group block ${i % 2 === 1 ? "md:mt-24" : ""}`}
            >
              <div
                className="relative rounded-[2.5rem] overflow-hidden
                           bg-white/5 border border-white/10
                           transition"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-[240px] sm:h-[300px] md:h-[380px]
                             object-cover transition duration-[700ms]
                             group-hover:scale-[1.05]"
                />

                <div className="absolute inset-0 bg-black/0
                                group-hover:bg-black/10 transition" />

                <div className="absolute bottom-6 right-6 opacity-0
                                group-hover:opacity-100 transition">
                  <FiArrowUpRight className="text-xl" />
                </div>
              </div>

              <div className="mt-7">
                <h3 className="font-heading text-[1.35rem] md:text-[1.75rem]
                               tracking-[-0.02em]">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-white/50">{p.tag}</p>
                <p className="mt-1 text-xs text-white/40">{p.result}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="px-6 md:px-20 py-28 border-t border-white/10">
        <h2 className="font-heading text-3xl md:text-4xl mb-16">
          My working process
        </h2>

        <div className="grid md:grid-cols-4 gap-12 text-white/70">
          {[
            "Understand goals & brand",
            "Design high-fidelity UI",
            "Build clean, scalable code",
            "Test, launch & support",
          ].map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border border-white/10 rounded-2xl p-6"
            >
              <span className="block text-violet-400 font-heading mb-3">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p>{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 md:px-20 py-32">
        <h2 className="font-heading text-[clamp(2.6rem,5vw,4.4rem)]
                       max-w-3xl leading-tight">
          Ready to invest in a website
          that feels as good as it performs?
        </h2>

        <a
          href="mailto:masoodhussainr8@gmail.com"
          className="inline-block mt-12 px-12 py-6 bg-white text-black
                     rounded-2xl hover:scale-105 transition"
        >
          Book a Free Discovery Call
        </a>
      </section>

      <footer className="px-6 md:px-20 py-10 text-white/40 text-sm">
        Designed & built by Masood Hussain
      </footer>
    </div>
  )
}
