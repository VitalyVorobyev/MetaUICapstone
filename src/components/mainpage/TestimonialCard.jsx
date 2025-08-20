
const TestimonialCard = (props) => {
    return (
        <div className="testimonial-card">
            <div className='testimonial-rating'>{props.rating.toFixed(1)}</div>
            <div className='testimonial-img-container'>
                <img className='testimonial-img' src={props.img} alt='person avatar'/>
            </div>
            <div className='testimonial-name'>{props.name}</div>
            <span className='testimonial-text'>{props.text}</span>
        </div>
    )
};

export default TestimonialCard;
