import Image1 from "../../images/restaurant.jpg";
import Image2 from "../../images/restaurant chef B.jpg";

const About = () => {
    return (
        <section className="section-about" id='about'>
            <div className="about-left-column">
                <div>
                    <h2 className="about-title">Little Lemon</h2>
                    <h3 className="about-subtitle">Chicago</h3>
                </div>
                <div className="about-text">
                    <p>Run by the Kostas family, the cozy eatery offers a warm ambiance and a menu blending classic recipes with contemporary twists. From traditional hummus to inventive lemon-infused tzatziki, each dish is a flavorful journey.</p>
                    <p>This charming restaurant in the heart of Chicago encapsulates the essence of family, culture, and the timeless allure of Mediterranean cuisine.</p>
                </div>
            </div>
            <div className="about-img-container1">
                <img src={Image1} className="about-image" alt="restaurant" />
            </div>
            <div className="about-img-container2">
                <img src={Image2} className="about-image" alt="restaurant chief" />
            </div>
        </section>
    )
};

export default About;
