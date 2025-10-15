import React, {useRef, useState} from 'react'
import { useGLTF } from '@react-three/drei'
import {useFrame} from "@react-three/fiber";

export function BlenderIcon(props) {
    const { scene } = useGLTF('./models/blender.glb')
    return <primitive object={scene} {...props} />
}

export function FigmaIcon(props) {
    const { scene } = useGLTF('./models/figma.glb')
    return <primitive object={scene} {...props} />
}

export function AiIcon(props) {
    const { scene } = useGLTF('./models/illustrator.glb')
    return <primitive object={scene} {...props} />
}

export function PsIcon(props) {
    const { scene } = useGLTF('./models/photoshop.glb')
    return <primitive object={scene} {...props} />
}

export function ReactIcon(props) {
    const { scene } = useGLTF('./models/react.glb')
    useFrame((state, delta) => (scene.rotation.z = scene.rotation.y += delta))
    return <primitive object={scene} {...props} />
}

export function RiveIcon(props) {
    const { scene } = useGLTF('./models/rive.glb')
    useFrame((state, delta) => (scene.rotation.y += delta))
    return <primitive object={scene} {...props} />
}

export function ThreeIcon(props) {
    const ref = useRef()
    const [hovered, spread] = useHover()
    const { nodes, materials } = useGLTF('./models/three.glb')
    useFrame((state, delta) => (ref.current.rotation.y += delta))
    return (
        <group ref={ref} {...props} {...spread} dispose={null}>
            <mesh geometry={nodes.Curve008.geometry}>
                <meshStandardMaterial color={hovered ? 'silver' : 'white'} roughness={0.33} metalness={1}
                                      envMapIntensity={2} />
            </mesh>
        </group>
    )
}

function useHover() {
    const [hovered, hover] = useState(false)
    return [hovered, { onPointerOver: (e) => hover(true), onPointerOut: () => hover(false) }]
}






