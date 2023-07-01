import { FaBeer } from 'react-icons/fa';

const HighlightCard = (props) => {
    return (
        <div class='highlight-card'>
            <div class='highlight-img-container'>
                <img class='highlight-img' src={props.img} alt="dish"/>
            </div>
            <div class='highlight-main'>
                <h3 class='highlight-title'>{props.title}</h3>
                <p class='highlight-price'>{props.price}</p>
                <p class='highlight-text'>{props.text}</p>
                <div class='highlight-button'>Order a delivery <FaBeer/></div>
            </div>
        </div>
    )
}

export default HighlightCard;
