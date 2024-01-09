import { FaBeer } from 'react-icons/fa';

const HighlightCard = (props) => {
    return (
        <div className='highlight-card'>
            <div className='highlight-img-container'>
                <img className='highlight-img' src={props.img} alt="dish"/>
            </div>
            <div className='highlight-main'>
                <h3 className='highlight-title'>{props.title}</h3>
                <p className='highlight-price'>{props.price}</p>
                <p className='highlight-text'>{props.text}</p>
                <div className='highlight-button'>Order a delivery <FaBeer/></div>
            </div>
        </div>
    )
}

export default HighlightCard;
