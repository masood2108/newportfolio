// Cleaned up unused imports
import { useScroll, Stars, Sparkles } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import OrganicShape from './OrganicShape'
import { Environment } from '@react-three/drei'

export default function Scene() {
    const scroll = useScroll()
    const group = useRef()
    const { viewport } = useThree()

    // Simple mobile check based on viewport width
    const isMobile = viewport.width < 5

    useFrame((state, delta) => {
        if (group.current) {
            // Rotate the entire scene constellation based on scroll progress
            group.current.rotation.y = -scroll.offset * (Math.PI * 0.5)

            // Move scene UP as we scroll DOWN to reveal objects placed lower in Y-axis
            // Objects go down to roughly -20, so we move up by roughly 20-22 units
            // On mobile, the scroll might be longer, so we adjust accordingly
            group.current.position.y = scroll.offset * (isMobile ? 24 : 22)
        }
    })

    return (
        <group ref={group}>
            {/* ATMOSPHERE */}
            <color attach="background" args={['#050505']} />
            <fog attach="fog" args={['#050505', 10, 40]} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Sparkles count={50} scale={10} size={4} speed={0.4} opacity={0.5} noise={0.2} color="#ffffff" />

            {/* LIGHTING */}
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} intensity={2} castShadow color="#ffffff" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" />
            <Environment preset="city" />

            {/* HERO SECTION - Big Liquid Main Object */}
            {/* On mobile: Center the main object. On Desktop: Keep it to the side */}
            <OrganicShape
                position={isMobile ? [0, 0, 0] : [3.5, 0, 0]}
                scale={isMobile ? 1.5 : 2}
                color="#8b5cf6"
                speed={1}
            />
            {/* Secondary Hero Shape */}
            <OrganicShape
                position={isMobile ? [-1.5, -2, -2] : [-4, -2, -2]}
                scale={isMobile ? 1 : 1.5}
                color="#06b6d4"
                speed={1.5}
            />

            {/* Work Section Area */}
            <OrganicShape
                position={isMobile ? [1.5, -8, 0] : [-3, -8, 2]}
                scale={isMobile ? 1 : 1.2}
                color="#ec4899"
                speed={0.8}
            />
            <OrganicShape
                position={isMobile ? [-1, -11, 0] : [3, -10, 0]}
                scale={isMobile ? 1.2 : 1.8}
                color="#10b981"
                speed={1.2}
            />

            {/* About Section Area */}
            <OrganicShape
                position={[0, -18, -2]}
                scale={isMobile ? 1.8 : 2.5}
                color="#f59e0b"
                speed={0.5}
            />

            {/* Contact Section Area - Moved items out to avoid text overlap */}
            {/* On mobile: Push them vertical or very far to sides to not block "Start a Conversation" */}
            <OrganicShape
                position={isMobile ? [-2, -22, 0] : [-6, -19, 2]}
                scale={isMobile ? 1.2 : 1.5}
                color="#6366f1"
                speed={1}
            />
            <OrganicShape
                position={isMobile ? [2, -24, 0] : [6, -20, 0]}
                scale={isMobile ? 1.5 : 2}
                color="#ec4899"
                speed={1.5}
            />

        </group>
    )
}
