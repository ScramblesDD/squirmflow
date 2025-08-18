import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Wormpile from "../components/wormpile.jsx";
import * as THREE from "three";
import { Vector3 } from "three";

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
const IconOverlay = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 1440, height: 800 });
  const containerRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({
          width: rect.width,
          height: rect.height,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  //constructs values for ellipse that array follows
  const scale = Math.max(0.4, Math.min(dimensions.width / 1440, 1.2));
  const centerX = dimensions.width / 2;
  const centerY = dimensions.height * 0.5;
  const ellipseWidth = Math.min(dimensions.width * 0.8, 1200 * scale);
  const baseSize = Math.max(48, 120 * scale);

  // Position icons equidistant along the ellipse perimeter
  const getIconPosition = (index) => {
    const totalIcons = iconData.length;
    const angleStep = Math.PI / (totalIcons - 1); // Distribute across top half of ellipse
    const angle = index * angleStep; // 0 to π

    const radiusX = ellipseWidth / 2;
    const radiusY = ellipseWidth * 0.3; // Height of ellipse

    const x = centerX + radiusX * Math.cos(angle);
    const y = centerY - radiusY * Math.sin(angle);

    // Make edge icons responsive to screen height
    const edgeIconOffset =
      dimensions.height < 600 ? dimensions.height * 0.05 : 30 * scale;

    return {
      x,
      y: index === 0 || index === totalIcons - 1 ? centerY + edgeIconOffset : y,
    };
  };

  //changes the size of icons when one is hovered over
  const getIconSize = (index) => {
    if (hoveredIndex === null) return baseSize;
    const distance = Math.abs(index - hoveredIndex);
    const multipliers = [1.4, 1.2, 1, 0.8, 0.6];
    return baseSize * (multipliers[distance] || 0.6);
  };

  //changes opacity based on hover
  const getIconOpacity = (index) => {
    if (hoveredIndex === null) return 0.9;
    const distance = Math.abs(index - hoveredIndex);
    const opacities = [1, 0.95, 0.8, 0.6, 0.4];
    return opacities[distance] || 0.4;
  };

  return (
    <div ref={containerRef}>
      <div className="relative w-full h-full pointer-events-none">
        {iconData.map((icon, index) => {
          const position = getIconPosition(index);
          const size = getIconSize(index);
          const opacity = getIconOpacity(index);

          return (
            <div
              key={icon.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer
                            transition-all duration-300 ease-out pointer-events-auto"
              style={{
                left: position.x,
                top: position.y,
                width: size,
                height: size,
                opacity,
                zIndex: hoveredIndex === index ? 100 : 50,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="w-full h-full rounded-xl shadow-lg transition-all duration-300"
                style={{
                  backgroundColor: `transparent`, // Add transparency
                  boxShadow:
                    hoveredIndex === index
                      ? "0 8px 25px rgba(0,0,0,0.25)"
                      : "0 4px 15px rgba(0,0,0,0.15)",
                }}
              >
                <img
                  src={icon.image}
                  alt={`Icon ${icon.id}`}
                  className={"w-full h-full object-contain rounded-xl"}
                  style={{
                    filter:
                      hoveredIndex === index
                        ? "brightness(1.1)"
                        : "brightness(1)",
                  }}
                />
              </div>
            </div>
          );
        })}

        {/* Info Panel - only visible on hover */}
        {hoveredIndex !== null && (
          <div
            className="absolute top-6 left-6 bg-black/20 backdrop-blur-md rounded-xl p-4 shadow-lg
                    pointer-events-none"
          >
            <h3 className="text-lg font-semibold text-white mb-1">
              {iconData[hoveredIndex].name}
            </h3>
            <p className="text-sm text-white/80">
              Icon {hoveredIndex + 1} of {iconData.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section className={"section-bg"}>
      <div className={"BgContainer"}>
        <div className={"w-full h-full relative inset-0 p-6"}>
          <Canvas
            className={"w-full h-full rounded-[50px]"}
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
          <IconOverlay />
        </div>
      </div>
    </section>
  );
};
export default About;
