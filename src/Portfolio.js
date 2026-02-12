import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { ScrollControls, Scroll, Loader } from "@react-three/drei"

import Scene from "./components/Scene" // The 3D background
import Hero from "./components/Hero"
import Work from "./components/Work"
import About from "./components/About"
import Contact from "./components/Contact"
import Cursor from "./components/Cursor"

export default function Portfolio() {
  const projects = [
    {
      title: "Neuro-Inclusive Education",
      image: "/image.png",
      link: "https://masood2108.github.io/neuro-inclusive/",
      tag: "Accessibility • Education",
      result: "Accessibility-first redesign for neurodiverse learners",
    },
    {
      title: "The Women's Life",
      image: "/image2.png",
      link: "https://thewomenslife.com/",
      tag: "Marketing • Wellness",
      result: "Brand-focused site to improve engagement & trust",
    },
    {
      title: "99DX Fragrance",
      image: "/image3.png",
      link: "https://em5-virid.vercel.app/",
      tag: "Luxury • E-Commerce",
      result: "Premium visual identity for a fragrance brand",
    },
    {
      title: "VOIDEX Dashboard",
      image: "/image4.png",
      link: "https://voidex-eight.vercel.app",
      tag: "SaaS • Product",
      result: "Clean dashboard UX for faster user decisions",
    },
  ]

  return (
    <>
      <Cursor />
      <Canvas
        camera={{ position: [0, 0, 20], fov: 35 }}
        style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "#050505" }}
      >
        <Suspense fallback={null}>
          <ScrollControls pages={5} damping={0.2} style={{ scrollbarWidth: "none" }}>

            {/* 3D SCENE CONTENT THAT MOVES WITH SCROLL */}
            <Scene />

            {/* HTML CONTENT OVERLAY */}
            <Scroll html style={{ width: "100%" }}>
              <main className="w-full text-white selection:bg-violet-500/30">
                <Hero />
                <Work projects={projects} />
                <About />
                <Contact />
              </main>
            </Scroll>

          </ScrollControls>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  )
}
