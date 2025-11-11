
import { Canvas } from '@react-three/fiber'
import { Display } from '../components/display.jsx'
import {Environment, OrbitControls} from "@react-three/drei";
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

                {activeModal === 'three' && (
                    <Modal
                        title="Three.js"
                        experience="Experience: 1 year"
                        description="Three.js is a JavaScript library for rendering and animating 3D graphics in
                        the browser. I began using it in order to create immersive web-based experiences that allow me
                        to use 3D models."
                        image="./assets/three.png"
                        onClose={() => setActiveModal(null)}
                    />
                )}
                {activeModal === 'rive' && (
                    <Modal
                        title="Rive"
                        experience="Experience: 1 year"
                        description="Rive is a vector animation editor that allows me to create and animate interactive
                        2D vector graphics."
                        image="./assets/rive.png"
                        onClose={() => setActiveModal(null)}
                    />
                )}
                {activeModal === 'blender' && (
                    <Modal
                        title="Blender"
                        experience="Experience: 4 years"
                        description="Blender is a software for creating 3D models, animations, and visual effects. I
                        began learning it because I wanted to create and render my own 3D models."
                        image="./assets/blender.png"
                        onClose={() => setActiveModal(null)}
                    />
                )}
                {activeModal === 'react' && (
                    <Modal
                        title="React"
                        experience="Experience: 1 year"
                        description="React is a JavaScript library for building user interfaces. I began learning it
                        because I wanted to create interactive web-based experiences beyond what is possible with just
                        vanilla Three.js."
                        image="./assets/react.png"
                        onClose={() => setActiveModal(null)}
                    />
                )}
                {activeModal === 'ps' && (
                    <Modal
                        title="Photoshop"
                        experience="Experience: 10+ years"
                        description="Photoshop is a software for editing and manipulating images. I have been using it
                        to create and edit my own art and images since I was a child in photography summer camp."
                        image="./assets/ps.png"
                        onClose={() => setActiveModal(null)}
                    />
                )}
                {activeModal === 'ai' && (
                    <Modal
                        title="Illustrator"
                        description="Illustrator is a software for creating and editing vector graphics. I use vector
                        graphics when I need artwork that can look clean and crisp at different sizes without
                        sacrificing quality."
                        image="./assets/ai.png"
                        onClose={() => setActiveModal(null)}
                    />
                )}
                {activeModal === 'figma' && (
                    <Modal
                        title="Figma"
                        experience="Experience: 1 year"
                        description="Figma is a software that is used for creating website wireframes and prototypes."
                        image="./assets/figma.png"
                        onClose={() => setActiveModal(null)}
                    />
                )}

            </div>
        </section>
    );
};


    function Modal({title, experience, description, image, onClose}) {
        return (
            <div
                className="modal-overlay" onClick={onClose} // close when clicking outside
            >
                <div className="modal-content" style={{boxShadow: "0 10px 40px rgba(0,0,0,0.3)"}}
                    onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                >
                    <button onClick={onClose}>Close</button>
                    <h2 className={"font-universbold_condensed text-4xl"}>{title}</h2>
                    <div className="modal-line" />
                    <p>{experience}</p>
                    <div className="modal-line" />
                    <p>{description}</p>
                    <div className="modal-line" />
                    <img src={image} alt={title} />
                </div>
            </div>
        );

}

export default About;
