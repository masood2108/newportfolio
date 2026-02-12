import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Cursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [cursorVariant, setCursorVariant] = useState("default")

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove", mouseMove)

        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    }, [])

    useEffect(() => {
        const handleHoverStart = () => setCursorVariant("text")
        const handleHoverEnd = () => setCursorVariant("default")

        const textElements = document.querySelectorAll("h1, h2, h3, p, a, button")

        textElements.forEach(el => {
            el.addEventListener("mouseenter", handleHoverStart)
            el.addEventListener("mouseleave", handleHoverEnd)
        })

        return () => {
            textElements.forEach(el => {
                el.removeEventListener("mouseenter", handleHoverStart)
                el.removeEventListener("mouseleave", handleHoverEnd)
            })
        }
    })

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            height: 32,
            width: 32,
            backgroundColor: "#fff",
            mixBlendMode: "difference"
        },
        text: {
            x: mousePosition.x - 48,
            y: mousePosition.y - 48,
            height: 96,
            width: 96,
            backgroundColor: "#fff",
            mixBlendMode: "difference"
        }
    }

    return (
        <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block" // Hidden on mobile
            variants={variants}
            animate={cursorVariant}
            transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.1
            }}
        />
    )
}
