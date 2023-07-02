import Image1 from "../images/restaurant.jpg";
import Image2 from "../images/restaurant chef B.jpg";

const About = () => {
    return (
        <section className="section-about" id='about'>
            <div className="about-left-column">
                <div>
                    <h2 className="about-title">Little Lemon</h2>
                    <h3 className="about-subtitle">Chicago</h3>
                </div>
                <div className="about-text">
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
            </div>
            <div className="about-img-container1">
                <img src={Image1} class="about-image" alt="restaurant" />
            </div>
            <div className="about-img-container2">
                <img src={Image2} class="about-image" alt="restaurant chief" />
            </div>
        </section>
    )
};

export default About;
