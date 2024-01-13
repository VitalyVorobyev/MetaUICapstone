import { useEffect } from "react";
import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";

const HomePage = (props) => {
    useEffect(() => { props.setActivenav(0); }, []);

    return (
        <>
        <main>
            <Hero/>
            <Highlights/>
            <Testimonials/>
            <About/>
        </main>
        </>
    )
}

export default HomePage;
