
import { Canvas } from '@react-three/fiber'
import { Display } from '../components/display.jsx'
import {Environment, OrbitControls} from "@react-three/drei";
import {useControls} from "leva";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";


const About = () => {

    {/*
        const controls = useControls({
            camPosX: {
                value: 0,
                min: -10,
                max: 10,
            },

            camPosY: {
                value: -10.5,
                min: -20,
                max: 20,
            },

            camPosZ: {
                value: 0,
                min: -10,
                max: 10,
            },
        })
    */}

    const isSmall = useMediaQuery({minWidth: 375, maxWidth: 767})
    const isMobile = useMediaQuery({minWidth: 768, maxWidth: 895})
    const isTablet = useMediaQuery({minWidth: 897, maxWidth: 1024})

    const sizes = calculateSizes(isSmall, isMobile, isTablet)

    return (
        <section className={"section-bg"}>
            <div className={"aboutBg"}>
                <Canvas gl={{ localClippingEnabled: true }} camera={{fov: 60, position: [0, -10.5, 0],
                    rotation: [83.6, 0, 0] }} shadows>
                    <Environment background={false} preset={"apartment"} intensity={0.75}/>
                    <ambientLight />
                    <Display position={sizes.zPos} rotation={[90, 0, 0]} scale={sizes.displayScale}/>
                    <OrbitControls minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 2} minAzimuthAngle={-Math.PI / 4} maxAzimuthAngle={Math.PI / 4}/>
                </Canvas>
            </div>
        </section>
    );
};
export default About;
