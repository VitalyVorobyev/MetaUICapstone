
const TestimonialCard = (props) => {
    return (
        <div class="testimonial-card">
            <div class='testimonial-rating'>{props.rating}</div>
            <div class='testimonial-img-container'>
                <img class='testimonial-img' src={props.img} alt='person avatar'/>
            </div>
            <div class='testimonial-name'>{props.name}</div>
            <div class='testimonial-text'>{props.text}</div>
        </div>
    )
};

export default TestimonialCard;
