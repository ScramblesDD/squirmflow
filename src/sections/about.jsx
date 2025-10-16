
import { useRef } from 'react'
import { useLocation } from 'wouter'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import { MeshPortalMaterial, Gltf, ScrollControls, Scroll } from '@react-three/drei'
import { proxy, useSnapshot } from 'valtio'
import { usePrefersReducedMotion } from '../constants/index.js'
import {geometry} from "maath";

extend(geometry)
const GOLDENRATIO = 1.61803398875
const state = proxy({
    urls: [1, 2, 3, 4, 5, 6, 7].map((u) => `/icons/${u}.glb`)
})

function Frame({ index, url, name, width = 1, height = GOLDENRATIO, ...props }) {
    const [, setLocation] = useLocation()
    const portal = useRef()
    const modelRef = useRef()
    const colors = ['#D72AC0', '#4A3AD8', '#31E3E3', '#31D249', '#DDE327', '#E58A2F', '#EA2F2F']
    const backgroundColor = colors[index % colors.length]

    // Random offsets for more natural animation timing
    const offset = useRef(Math.random() * Math.PI * 2)

    //If user prefers reduced motion
    const prefersReducedMotion = usePrefersReducedMotion()

    //skip animation entirely, else run animation
    useFrame((state, delta) => {
        if (!modelRef.current || prefersReducedMotion) return

        const t = state.clock.getElapsedTime() + offset.current

        //individual animations
        switch (index % 7) {
            case 0: // spin
                modelRef.current.rotation.y += delta
                break
            case 1: // bounce
                modelRef.current.position.y = Math.sin(t * 2) * 0.2
                break
            case 2: // float up/down + slow rotate
                modelRef.current.rotation.y = modelRef.current.rotation.z += delta
                modelRef.current.position.y = Math.sin(t) * 0.15
                break
            case 3: // wobble
                modelRef.current.rotation.x = Math.sin(t * 2) * 0.2
                modelRef.current.rotation.z = Math.cos(t * 2) * 0.2
                break
            case 4: // rotate
                modelRef.current.rotation.z = modelRef.current.rotation.y += delta
                break
            case 5: // spin
                modelRef.current.rotation.y += delta
                break
            case 6: // drift diagonally
                modelRef.current.position.x = Math.sin(t * 1.5) * 0.2
                modelRef.current.position.y = Math.cos(t * 1.5) * 0.2
                break
        }
    })

    return (
        <group {...props}>
            <mesh name={name} onClick={() => setLocation('/item/' + name)}>
                <roundedPlaneGeometry args={[width, height, 0.1]} />
                <MeshPortalMaterial ref={portal} events={true}>
                    <ambientLight />
                    <color attach="background" args={[backgroundColor]} />
                    <Gltf ref={modelRef} src={url} scale={0.5} />
                </MeshPortalMaterial>
            </mesh>
        </group>
    )
}

function Items() {
    const { urls } = useSnapshot(state)
    const { width } = useThree((state) => state.viewport)
    const xW = 1.2

    return (
        <ScrollControls horizontal damping={0.1} pages={(width - xW + urls.length * xW) / width}>
            <Scroll>
                <group>
                    {urls.map((url, i) => (
                        <Frame key={i} index={i} name={`0${i + 1}`} url={url} position={[i * 1.2, 0, 0]} />
                    ))}
                </group>
            </Scroll>
        </ScrollControls>
    )
}


const About = () => {

  return (
    <section className={"section-bg"}>
      <div className={"BgContainer"}>
          <Canvas gl={{ localClippingEnabled: true }} camera={{ fov: 75, position: [0, 0, 2] }}>
              <color attach="background" args={['#E4C410']} />
              <Items />
          </Canvas>
      </div>
    </section>
  );
};
export default About;
