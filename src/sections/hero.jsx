import {RiveDemo} from "../components/squirmflow.jsx";

const Hero = () => {

    return (
        <section className={"section-bg"}>
            <div className={"BgContainer"}>

                    {/*left text block*/}
                    <div
                        className="left-text-block">
                        <div className="hero-text"><span
                            className="font-universbold_condensed">AMAZE</span><span
                            className="font-universcondensed"> your family!<br/></span><span
                            className="font-universbold_condensed">AMAZE</span><span
                            className="font-universcondensed">  your friends!<br/></span><span
                            className="font-universbold_condensed">AMAZE</span><span
                            className="font-universcondensed"> yourself!<br/></span></div>
                    </div>

                {/*rive canvas*/}

                <div className="riveCanvasSize">
                    <RiveDemo />
                </div>

                    {/*right text block*/}
                    <div
                        className="right-text-block">
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
