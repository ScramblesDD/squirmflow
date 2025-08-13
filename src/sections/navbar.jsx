import {useState} from "react";
import {navLinks} from "../constants/index.js";


const NavItems = () => {

    return(
        <ul className={"nav-ul text-green-100"}>
            {navLinks.map(({id, href, name}) => (
                <li key={id} className={"nav-li"}>
                    <a href={href} className={"nav-li_a"}
                    onClick={() => {}}>
                        {name}
                    </a>
                </li>
             )
         )}
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    }

    return (
        <header className={"navbar"}>
            <div className={"max-w-9xl mx auto"}>
                <div className={"flex justify-between items-center py-5 mx-auto"}>
                    <a href={"/"} className={"text-squirmgreen font-octopussregular text-size text-stroke " +
                        "text-stroke-width text-stroke-white transition-colors"}>
                        Squirmflow
                    </a>

                    {/*hamburger menu*/}
                    <button onClick={toggleMenu}
                            className={"text-neutral-400 hover:text-white focus:outline-none flex"}
                    aria-label={"toggle menu"}>
                        <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt={"toggle"}
                             className={"icon-size"}
                        />
                    </button>

                    <nav className={isOpen ? 'block' : 'hidden'}>
                        <NavItems />
                    </nav>
                </div>
            </div>

            {/* mobile menu */}
            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : `max-h-0`}`}>
                <nav className={"p-5"}>
                    <NavItems />
                </nav>
            </div>
        </header>
    )
}

export default Navbar
