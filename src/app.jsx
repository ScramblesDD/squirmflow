
import Navbar from "./sections/navbar.jsx";
import Hero from "./sections/hero.jsx";
import About from "./sections/about.jsx";
import {Layout} from "./layout/layout.jsx";


const App = () => {
    return (
        <main className={"max-w-9xl mx-auto"}>
            <Navbar />
            <Layout>
                <Hero/>
                <About/>
            </Layout>
        </main>
    )
}
export default App
