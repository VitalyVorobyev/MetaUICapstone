
const TestimonialCard = (props) => {
    return (
        <div className="testimonial-card">
            <div className='testimonial-rating'>{props.rating}</div>
            <div className='testimonial-img-container'>
                <img className='testimonial-img' src={props.img} alt='person avatar'/>
            </div>
            <div className='testimonial-name'>{props.name}</div>
            <div className='testimonial-text'>{props.text}</div>
        </div>
    )
};

export default TestimonialCard;
