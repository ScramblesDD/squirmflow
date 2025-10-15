'use client'
import {RiveDemo} from "../components/squirmflow.jsx";
import React, {useRef} from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger); // register the hook to avoid React version discrepancies import gsap from "gsap";


const Hero = () => {

    const textRef = useRef();
    const containerRef = useRef();
    const canvasRef = useRef();
    const rightTextRef = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: '50% 50%',
                scrub: true

            }
        });
        tl.to(textRef.current, {
            y: -200,
        })
            .to(canvasRef.current, {
                scale: 1.2,
            })
            .to(rightTextRef.current, {
                y: -300,
            })
            .to(containerRef.current, {
                y: -300,
            })

    })

    return (
        <section className={"section-bg"}>
            <div ref={containerRef} className={"BgContainer"}>

                    {/*left text block*/}
                    <div
                         ref={textRef} className="left-text-block">
                        <div className="hero-text"><span
                            className="font-universbold_condensed">AMAZE</span><span
                            className="font-universcondensed"> your family!<br/></span><span
                            className="font-universbold_condensed">AMAZE</span><span
                            className="font-universcondensed">  your friends!<br/></span><span
                            className="font-universbold_condensed">AMAZE</span><span
                            className="font-universcondensed"> yourself!<br/></span></div>
                    </div>

                {/*rive canvas*/}

                <div ref={canvasRef} className="riveCanvasSize">
                    <RiveDemo />
                </div>

                    {/*right text block*/}
                    <div
                         ref={rightTextRef} className="right-text-block">
                        <div className="hero-text"><span
                            className="font-universcondensed">You can make <br/></span><span
                            className="font-universbold_condensed">SQUIRMFLOW </span><span
                            className="font-universcondensed">do all<br/>sorts of tricks!</span>
                        </div>
                    </div>
            </div>
        </section>
    )
}
export default Hero
