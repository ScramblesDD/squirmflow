import { useState } from 'react';

export default function AboutArray() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Coordinate points for icon placement
    const coordinatePoints = [
        [230, 529],
        [390, 370],
        [626, 242],
        [847, 178],
        [1114, 242],
        [1312, 357],
        [1440, 529]
    ];

    // Array of icon elements
    const imageElements = [
        {src: "/assets/1.svg", alt:"Photoshop", name: "Photoshop"},
        {src: "/assets/2.svg", alt:"Illustrator", name: "Illustrator"},
        {src: "assets/3.svg", alt:"React", name: "React"},
        {src: "assets/4.svg", alt:"Blender", name: "Blender"},
        {src: "assets/5.svg", alt:"Three.js", name: "Three"},
        {src: "assets/6.svg", alt:"Rive", name: "Rive"},
        {src: "assets/7.svg", alt:"Figma", name: "Figma"},
    ];

    // Calculate scale based on distance from hovered icon
    const getIconScale = (currentIndex) => {
        if (hoveredIndex === null) return 1;

        const distance = Math.abs(currentIndex - hoveredIndex);
        if (distance === 0) return 1.4; // Hovered icon gets largest scale
        if (distance === 1) return 0.9; // Adjacent icons get smaller
        if (distance === 2) return 0.8; // Further icons get even smaller
        return 0.7; // Distant icons get smallest scale
    };

    // Calculate icon size based on scale
    const getIconSize = (currentIndex) => {
        const scale = getIconScale(currentIndex);
        const baseSize = 128;
        return baseSize * scale;
    };

    {/* Icons positioned at specified coordinates */}
    {coordinatePoints.map((point, index) => {
        const [x, y] = point;
        const imageElement = imageElements[index % imageElements.length];
        const scale = getIconScale(index);
        const iconSize = getIconSize(index);

    return (
        <div className="w-full h-full overflow-hidden">
            <div className="relative" >

                    return (
                        <div
                            key={index}
                            className="absolute flex items-center justify-center
                          rounded-2xl cursor-pointer"
                            style={{
                                left: `${x - iconSize / 2}px`, // Center the icon by offsetting half width
                                top: `${y - iconSize / 2}px`,  // Center the icon by offsetting half height
                                width: `${iconSize}px`,
                                height: `${iconSize}px`,
                                animationDelay: `${index * 0.3}s`,
                                transform: `scale(${scale})`,
                                zIndex: hoveredIndex === index ? 20 : 10
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img
                                src={imageElement.src}
                                alt={imageElement.alt}
                                className="w-full h-full object-contain rounded-2xl"
                                style={{
                                    filter: hoveredIndex === index ? 'brightness(1.1) saturate(1.2)' : 'brightness(1)'
                                }}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}