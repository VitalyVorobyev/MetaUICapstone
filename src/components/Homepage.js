import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";

const HomePage = () => {
    return (
        <>
        <Header/>
        <main>
            <Hero/>
            <Highlights/>
            <Testimonials/>
            <About/>
        </main>
        <Footer/>
        </>
    )
}

export default HomePage;
