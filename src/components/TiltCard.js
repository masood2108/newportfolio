import { useRef } from "react"

export default function TiltCard({ children }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const rotateX = ((y / rect.height) - 0.5) * -12
    const rotateY = ((x / rect.width) - 0.5) * 12

    ref.current.style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const reset = () => {
    ref.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)"
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="transition-transform duration-300 will-change-transform"
    >
      {children}
    </div>
  )
}
