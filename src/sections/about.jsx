
import { Canvas } from '@react-three/fiber'
import { Display } from '../components/display.jsx'
import {ContactShadows, Environment, OrbitControls, PerspectiveCamera} from "@react-three/drei";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import React, {useState} from "react";

const About = () => {

    const isSmall = useMediaQuery({minWidth: 375, maxWidth: 767})
    const isMobile = useMediaQuery({minWidth: 768, maxWidth: 895})
    const isTablet = useMediaQuery({minWidth: 897, maxWidth: 1024})

    const sizes = calculateSizes(isSmall, isMobile, isTablet)

    const [activeModal, setActiveModal] = useState(null);

    return (
        <section className={"section-bg"}>
            <div className={"aboutBg"}>
                <Canvas gl={{ localClippingEnabled: true }} camera={{fov: 60, position: [0, -10.5, 0] }} shadows>
                    <Environment background={false} preset={"sunset"} intensity={.25}/>
                    <Display position={sizes.zPos} scale={sizes.displayScale} setActiveModal={setActiveModal}/>
                    <OrbitControls
                        enableZoom={false}
                        target={sizes.camPos}
                        minPolarAngle={Math.PI / 3}
                        maxPolarAngle={Math.PI / 2}
                        minAzimuthAngle={-Math.PI / 4}
                        maxAzimuthAngle={Math.PI / 4}
                    />

                </Canvas>

                {activeModal === 'tri' && (
                    <Modal
                        title="Three.js"
                        description="This modal belongs to the blue cube."
                        onClose={() => setActiveModal(null)}
                    />
                )}
            </div>
        </section>
    );
};


    function Modal({title, description, onClose}) {
        return (
            <div
                className="modal-overlay"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0, 0, 0, 0.6)",
                    zIndex: 10,
                }}
                onClick={onClose} // close when clicking outside
            >
                <div
                    className="modal-content"
                    style={{
                        background: "white",
                        borderRadius: "16px",
                        padding: "24px 36px",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
                        cursor: "auto",
                        maxWidth: "400px",
                        textAlign: "center",
                    }}
                    onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                >
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        );

}

export default About;
