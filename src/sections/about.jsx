import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Wormpile from "../components/wormpile.jsx";
import * as THREE from "three";
import { Vector3 } from "three";
import gsap from "gsap";

function Rig() {
  const { camera, pointer } = useThree();
  const vec = new Vector3();

  return useFrame(() => {
    camera.position.lerp(
      vec.set(pointer.x, pointer.y, camera.position.z),
      0.05
    );
    camera.lookAt(0, 0, 0);
  });
}

/*Icon Array*/
/*calls icons for array*/
const iconData = [
  { id: 7, image: "/assets/7.svg" },
  { id: 6, image: "/assets/6.svg" },
  { id: 5, image: "/assets/5.svg" },
  { id: 4, image: "/assets/4.svg" },
  { id: 3, image: "/assets/3.svg" },
  { id: 2, image: "/assets/2.svg" },
  { id: 1, image: "/assets/1.svg" },
];

/*creates instructions for array behavior*/
const IconOverlay = ({ className }) => {
  const iconRefs = useRef([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scale = Math.max(0.4, Math.min(screenWidth / 1440, 1.2));
  const baseSize = Math.max(48, 120 * scale);

  const handleMouseEnter = (index) => {
    gsap.to(iconRefs.current[index], {
      scale: 1.2,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(iconRefs.current[index], {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      {iconData.map((icon, index) => {
        return (
          <div
            key={icon.id}
            ref={(el) => {
              if (el) iconRefs.current[index] = el;
            }}
            className="cursor-pointer pointer-events-auto"
            style={{
              width: baseSize,
              height: baseSize,
              margin: "0 10px",
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div
              className="w-full h-full rounded-xl shadow-lg"
              style={{
                backgroundColor: `transparent`, // Add transparency
              }}
            >
              <img
                src={icon.image}
                alt={`Icon ${icon.id}`}
                className={"w-full h-full object-contain rounded-xl"}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const About = () => {
  return (
    <section className={"section-bg"}>
      <div className={"BgContainer"}>
        <div className={"w-full h-full relative inset-0 p-6"}>
          <Canvas
            className={"absolute inset-0 w-full h-full rounded-[50px]"}
            shadows
            gl={{ toneMapping: THREE.AgXToneMapping }}
            camera={{
              position: [7.569, 1.09, -8],
              far: 40,
              near: 4,
              fov: 20.968,
              rotation: [-3.736, 1.419, 2.714],
            }}
          >
            <ambientLight intensity={0.75} />

            {/*lights*/}

            <pointLight
              intensity={10}
              decay={2}
              position={[-1.277, 0.618, -1.638]}
              rotation={[-Math.PI / 2, 0, 0]}
              castShadow={true}
            />

            <directionalLight
              size={1}
              intensity={5}
              position={[0, 2.93, 0]}
              castShadow={true}
            />

            <directionalLight
              size={1}
              intensity={3}
              color={"#ffffff"}
              decay={2}
              position={[2.4, 1.7, -2.62]}
              castShadow={true}
            />

            <Wormpile position={[0, -0.75, 0]} rotation={[0, 1.4, 0]} />

            <Rig />
          </Canvas>

          {/*calls the icon array*/}
          <IconOverlay className="absolute top-1/3 left-1/2 -translate-x-1/2 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
export default About;
