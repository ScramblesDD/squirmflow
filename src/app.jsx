import Navbar from "./sections/navbar.jsx";
import Hero from "./sections/hero.jsx";
import About from "./sections/about.jsx";

const App = () => {
    return (
        <main className={"max-w-9xl mx-auto"}>
            <Navbar />
            <Hero />
            <About />
        </main>
    )
}
export default App
