import React from "react"
import { motion } from "framer-motion"

export default function Portfolio() {
  const projects = [
    {
      title: "Neuro-Inclusive Education Platform",
      image: "/image.png",
      link: "https://masood2108.github.io/neuro-inclusive/",
      tag: "Accessibility • Education",
    },
    {
      title: "Wellness & Lifestyle Website",
      image: "/image2.png",
      link: "https://thewomenslife.com/",
      tag: "Marketing • Wellness",
    },
    {
      title: "99DX – Luxury Fragrance Brand",
      image: "/image3.png",
      link: "https://em5-virid.vercel.app/",
      tag: "Luxury • Client Work",
    },
    {
      title: "VOIDEX – SaaS Dashboard",
      image: "/image4.png",
      link: "https://voidex-eight.vercel.app",
      tag: "SaaS • Product",
    },
  ]

  return (
    <div className="bg-[#0b0d10] text-white font-body overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center px-6 md:px-20 overflow-hidden">

        {/* layered glow background */}
        <div className="absolute inset-0">
          <div className="absolute -top-48 -left-48 w-[520px] h-[520px] bg-violet-600/30 blur-[200px]" />
          <div className="absolute top-1/2 right-[-120px] w-[420px] h-[420px] bg-cyan-500/25 blur-[180px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="relative max-w-4xl"
        >
          <h1
            className="font-heading text-[clamp(2.8rem,7vw,6.2rem)]
                       leading-[1.02] tracking-[-0.04em]"
          >
            I design & build
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              modern web experiences
            </span>
            <br />
            that feel premium.
          </h1>

          <p className="mt-10 text-lg md:text-xl text-white/65 max-w-2xl leading-relaxed">
            Freelance frontend developer crafting visually strong,
            high-performance websites for startups, brands, and
            real-world products.
          </p>

          <div className="mt-14 flex flex-wrap gap-5">
            <a
              href="#projects"
              className="px-9 py-5 rounded-2xl bg-white text-black
                         font-medium hover:scale-105 transition"
            >
              View Work
            </a>

            <a
              href="mailto:masoodhussainr8@gmail.com"
              className="px-9 py-5 rounded-2xl border border-white/20
                         hover:border-violet-400 hover:text-violet-300 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="px-6 md:px-20 py-36">
        <h2 className="font-heading text-4xl md:text-5xl tracking-tight mb-24">
          Selected Projects
        </h2>

        <div className="grid gap-20 md:gap-28">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="group block"
            >
              <div
                className="relative rounded-[2.5rem] overflow-hidden
                           bg-white/5 border border-white/10"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-[260px] sm:h-[340px] md:h-[440px]
                             object-cover group-hover:scale-[1.06]
                             transition duration-[900ms] ease-out"
                />

                {/* cinematic overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t
                             from-black/70 via-black/20 to-transparent"
                />
              </div>

              <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <h3 className="font-heading text-2xl md:text-3xl tracking-tight">
                  {p.title}
                </h3>
                <span className="text-sm text-white/50">
                  {p.tag}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 md:px-20 py-36 border-t border-white/10">
        <h2
          className="font-heading text-[clamp(2.6rem,5vw,4.4rem)]
                     leading-[1.05] tracking-tight max-w-3xl"
        >
          Want a website that actually feels
          modern, premium, and intentional?
        </h2>

        <a
          href="mailto:masoodhussainr8@gmail.com"
          className="inline-block mt-12 px-12 py-6 bg-white text-black
                     rounded-2xl font-medium hover:scale-105 transition"
        >
          Let’s Work Together
        </a>
      </section>

      <footer className="px-6 md:px-20 py-10 text-white/40 text-sm">
        © {new Date().getFullYear()} Masood Hussain
      </footer>
    </div>
  )
}
