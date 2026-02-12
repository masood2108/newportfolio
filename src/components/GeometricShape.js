import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'

export default function GeometricShape({ position, color, geometry: Geometry = 'box', scale = 1 }) {
    const mesh = useRef()
    const [hovered, setHover] = useState(false)

    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.x += delta * 0.2
            mesh.current.rotation.y += delta * 0.15
        }
    })

    const GeneratedGeometry = () => {
        switch (Geometry) {
            case 'torus':
                return <torusGeometry args={[0.8, 0.2, 16, 32]} />
            case 'octahedron':
                return <octahedronGeometry args={[1]} />
            case 'dodecahedron':
                return <dodecahedronGeometry args={[1]} />
            case 'icosahedron':
                return <icosahedronGeometry args={[1]} />
            case 'box':
            default:
                return <boxGeometry args={[1, 1, 1]} />
        }
    }

    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <mesh
                ref={mesh}
                position={position}
                scale={hovered ? scale * 1.1 : scale}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <GeneratedGeometry />

                {/* PREMIUM GLASS MATERIAL */}
                <MeshTransmissionMaterial
                    backside={false}
                    samples={16}
                    resolution={1024}
                    transmission={0.95}
                    roughness={0.1}
                    thickness={1.5}
                    ior={1.5}
                    chromaticAberration={0.06}
                    anisotropy={0.1}
                    distortion={0.5}
                    distortionScale={0.5}
                    temporalDistortion={0.2}
                    color={hovered ? '#ffffff' : color}
                    attenuationDistance={0.5}
                    attenuationColor={color}
                />
            </mesh>
        </Float>
    )
}
