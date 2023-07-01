import TestimonialCard from "./TestimonialCard";

import Person1Img from "../images/img3.png"
import Person2Img from "../images/img4.png"
import Person3Img from "../images/img7.png"
import Person4Img from "../images/img6.png"

const Testimonials = () => {
    return (
        <section class="testimonials">
            <h1 class="testimonials-header">Testimonials</h1>
            <div class='testimonials-reviews'>
                <TestimonialCard
                    rating='4.5'
                    img={Person1Img}
                    name='Nick Norton'
                    text='Review text'
                />
                <TestimonialCard
                    rating='4.0'
                    img={Person2Img}
                    name='Ella Fitzgerald'
                    text='Review text'
                />
                <TestimonialCard
                    rating='5.0'
                    img={Person3Img}
                    name='Hannah Arendt'
                    text='Review text'
                />
                <TestimonialCard
                    rating='4.5'
                    img={Person4Img}
                    name='Alec Baldwin'
                    text='Review text'
                />
            </div>
        </section>
    )
};

export default Testimonials;
