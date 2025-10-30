
import { Canvas } from '@react-three/fiber'
import { Display } from '../components/display.jsx'
import {Environment, PerspectiveCamera} from "@react-three/drei";
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

    const isSmall = useMediaQuery({minWidth: 375})
    const isMobile = useMediaQuery({minWidth: 768, maxWidth: 896})
    const isTablet = useMediaQuery({minWidth: 896, maxWidth: 1024})

    const sizes = calculateSizes(isSmall, isMobile, isTablet)

    return (
        <section className={"section-bg"}>
            <div className={"aboutBg"}>
                <Canvas gl={{ localClippingEnabled: true }} shadows={true}>
                    <PerspectiveCamera
                        makeDefault
                        fov={60}
                        position={sizes.camPos}
                        rotation={[83.6, 0, 0]}
                    />
                    <Environment background={false} preset={"apartment"} intensity={0.75}/>
                    <ambientLight />
                    <Display position={sizes.zPos} rotation={[90, 0, 0]} scale={sizes.displayScale}/>
                </Canvas>
            </div>
        </section>
    );
};
export default About;
