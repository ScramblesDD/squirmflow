
import React, {useRef, useState} from 'react'
import { useGLTF } from '@react-three/drei'

export function Display ({setActiveModal, ...props}) {
    const meshRef = useRef();
    const [hoveredPart, setHoveredPart] = useState(null);

    //determines the part of the model that is being hovered over
    const handlePointerMove = (event) => {
        const intersects = event.intersections;
        if (intersects.length > 0) {
            // Assuming your object has named parts (e.g., child meshes)
            const intersectedObject = intersects[0].object;
            setHoveredPart(intersectedObject.name);
        } else {
            setHoveredPart(null);
        }
    };
    const { nodes, materials } = useGLTF('./models/display.glb')
    return (
        <group {...props}
            dispose={null}
            ref={meshRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={() => setHoveredPart(null)} >
            <mesh name="three"
                geometry={nodes.three.geometry}
                  onClick={() => setActiveModal("tri")}
            >
                <meshStandardMaterial color={hoveredPart === 'three' ? 'black' : 'white'} roughness={0.33} metalness={1}
                                      envMapIntensity={2} />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.display.geometry}
                material={materials['Material.003']}
            />
            <mesh name="rive"
                geometry={nodes.rive.geometry}
                >
                <meshStandardMaterial color={hoveredPart === 'rive' ? 'white' : 'black'}
                                      envMapIntensity={2} />
            </mesh>

            <mesh name ='blender_eyelash'
                geometry={nodes.Curve002_1.geometry}
                >
                <meshStandardMaterial color={hoveredPart === 'blender_eyelash' ? '#0a77c0' :
                    hoveredPart === 'blender_pupil' ? '#0a77c0' : hoveredPart === 'blender_sclera' ? '#0a77c0' :
                        '#f5883f'} envMapIntensity={2} />
            </mesh>

            <mesh name ='blender_pupil'
                  geometry={nodes.Curve002.geometry}
            >
                <meshStandardMaterial color={hoveredPart === 'blender_eyelash' ? '#905b00' :
                    hoveredPart === 'blender_pupil' ? '#905b00' : hoveredPart === 'blender_sclera' ? '#905b00' :
                        '#6fa4ff'} envMapIntensity={2} />
            </mesh>

            <mesh name = 'blender_sclera'
                geometry={nodes.Curve002_2.geometry}
            >
                <meshStandardMaterial color={hoveredPart === 'blender_sclera' ? 'black' :
                    hoveredPart === 'blender_pupil' ? 'black' : hoveredPart === 'blender_eyelash' ? 'black' :
                        'white'} envMapIntensity={2} />
            </mesh>
            <mesh name='react_atom'
                geometry={nodes.Curve006.geometry}
            >
                <meshStandardMaterial color={hoveredPart === 'react_atom' ? '#4a1100' : hoveredPart === 'react_nucleus'
                    ? '#4a1100' : '#b5eeff'} envMapIntensity={2} />
            </mesh>

            <mesh name='react_nucleus'
                geometry={nodes.Curve006_1.geometry}
            >
                <meshStandardMaterial color={hoveredPart === 'react_atom' ? '#200000' : hoveredPart === 'react_nucleus'
                    ? '#200000' : '#dfffff'} envMapIntensity={2} />
            </mesh>
            <mesh name='s'
                geometry={nodes.Curve010.geometry}
            >
                <meshStandardMaterial color={hoveredPart === 's' ? '#a63500' : hoveredPart === 'p' ? '#a63500' :
                    hoveredPart === 'ps_base' ? '#a63500' : '#59caff'} envMapIntensity={2} />
            </mesh>
            <mesh name='ps_base'
                geometry={nodes.Curve010_1.geometry}
            >
                <meshStandardMaterial color={hoveredPart === 's' ? '#cabaa5' : hoveredPart === 'p' ? '#cabaa5' :
                hoveredPart === 'ps_base' ? '#cabaa5' : '#35455a'} envMapIntensity={2} />
            </mesh>
            <mesh name='p'
                geometry={nodes.Curve010_2.geometry}
            >
                <meshStandardMaterial color={hoveredPart === 's' ? '#a63500' : hoveredPart === 'p' ? '#a63500' :
                    hoveredPart === 'ps_base' ? '#a63500' : '#59caff'} envMapIntensity={2} />
            </mesh>
            <mesh name='i'
                geometry={nodes.Curve011.geometry}
            >
                <meshStandardMaterial color={hoveredPart === 'i' ? '#004aba' : hoveredPart === 'a' ? '#004aba' :
                    hoveredPart === 'ai_base' ? '#004aba' : '#ffb545'} envMapIntensity={2} />
            </mesh>
            <mesh name='ai_base'
                geometry={nodes.Curve011_1.geometry}
            >
                <meshStandardMaterial color={hoveredPart === 'i' ? '#b4c6c1' : hoveredPart === 'a' ? '#b4c6c1' :
                    hoveredPart === 'ai_base' ? '#b4c6c1' : '#4b393e'} envMapIntensity={2} />
            </mesh>
            <mesh name='a'
                geometry={nodes.Curve011_2.geometry}
            >
                <meshStandardMaterial color={hoveredPart === 'i' ? '#004aba' : hoveredPart === 'a' ? '#004aba' :
                    hoveredPart === 'ai_base' ? '#004aba' : '#ffb545'} envMapIntensity={2} />
            </mesh>

            <mesh name='1'
                geometry={nodes.Curve019.geometry}
            >
                <meshStandardMaterial color={hoveredPart === '1' ? '#d52165' : hoveredPart === '2' ? '#d52165' :
                    hoveredPart === '3' ? '#d52165' : hoveredPart === '4' ? '#d52165' : hoveredPart === '5' ? '#d52165'
                        : '#2ADE9A'} envMapIntensity={2} />
            </mesh>
            <mesh name='2'
                geometry={nodes.Curve019_1.geometry}
            >
                <meshStandardMaterial color={hoveredPart === '1' ? '#792c00' : hoveredPart === '2' ? '#792c00' :
                    hoveredPart === '3' ? '#792c00' : hoveredPart === '4' ? '#792c00' : hoveredPart === '5' ? '#792c00'
                        : '#86d3ff'} envMapIntensity={2} />
            </mesh>
            <mesh name='3'
                geometry={nodes.Curve019_2.geometry}
            >
                <meshStandardMaterial color={hoveredPart === '1' ? '#006060' : hoveredPart === '2' ? '#006060' :
                    hoveredPart === '3' ? '#006060' : hoveredPart === '4' ? '#006060' : hoveredPart === '5' ? '#006060'
                        : '#ff9f9f'} envMapIntensity={2} />
            </mesh>
            <mesh name='4'
                geometry={nodes.Curve019_3.geometry}
            >
                <meshStandardMaterial color={hoveredPart === '1' ? '#00828a' : hoveredPart === '2' ? '#00828a' :
                    hoveredPart === '3' ? '#00828a' : hoveredPart === '4' ? '#00828a' : hoveredPart === '5' ? '#00828a'
                        : '#ff7d75'} envMapIntensity={2} />
            </mesh>
            <mesh name='5'
                geometry={nodes.Curve019_4.geometry}
            >
                <meshStandardMaterial color={hoveredPart === '1' ? '#498200' : hoveredPart === '2' ? '#498200' :
                    hoveredPart === '3' ? '#498200' : hoveredPart === '4' ? '#498200' : hoveredPart === '5' ? '#498200'
                        : '#b67dff'} envMapIntensity={2} />
            </mesh>

        </group>
    )
}



useGLTF.preload('./models/display.glb')



