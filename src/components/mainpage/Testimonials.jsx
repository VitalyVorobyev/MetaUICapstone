import TestimonialCard from "./TestimonialCard";

import Person1Img from "../../images/img3.png"
import Person2Img from "../../images/img4.png"
import Person3Img from "../../images/img7.png"
import Person4Img from "../../images/img6.png"

const Testimonials = () => {
    const cards = [
        {
            rating:4.5,
            img:Person1Img,
            name:'Alex Rodriguez',
            text:"Had an amazing dining experience at 'Flavors of Fusion.' The ambiance, the service, and, most importantly, the mouthwatering dishes made our evening unforgettable. Can't wait to visit again!"
        },
        {
            rating:4.0,
            img:Person2Img,
            name:'Sarah Johnson',
            text:"Kudos to 'Sizzle Street' for serving the best steaks in town! The flavors were extraordinary, and the staff was attentive. A top-notch place for steak lovers."
        },
        {
            rating:5.0,
            img:Person3Img,
            name:'Emily Chen',
            text:"'Spice Symphony' never fails to impress! The diverse menu and bold flavors create a culinary journey. Every dish tells a story. Loved every bite. Highly recommended!"
        },
        {
            rating:4.5,
            img:Person4Img,
            name:"Jason Thompson",
            text:"Cafe Serenity' is my go-to spot for a peaceful brunch. The cozy atmosphere and delightful brunch options make it a perfect weekend retreat. Great food, great vibes!"
        }
    ].map((item, index) => <TestimonialCard {...item} key={index} />);

    return (
        <section className="testimonials" id='testimonials'>
            <h1 className="testimonials-header">Testimonials</h1>
            <div className='testimonials-reviews'>{cards}</div>
        </section>
    )
};

export default Testimonials;
