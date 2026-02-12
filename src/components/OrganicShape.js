import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'

export default function OrganicShape({ position, color, scale = 1, speed = 1 }) {
    const mesh = useRef()
    const [hovered, setHover] = useState(false)

    // Subtle rotation
    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.x += delta * 0.1
            mesh.current.rotation.y += delta * 0.1
        }
    })

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh
                ref={mesh}
                position={position}
                scale={hovered ? scale * 1.2 : scale}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <sphereGeometry args={[1, 64, 64]} />

                {/* PREMIUM LIQUID METAL MATERIAL */}
                <MeshDistortMaterial
                    color={color}
                    envMapIntensity={1.5}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    metalness={0.9}
                    roughness={0.2}
                    distort={0.5} // Increased distortion
                    speed={speed * 3} // Faster movement for "alive" feel
                />
            </mesh>
        </Float>
    )
}
