import HighlightCard from "./HighlightCard";

import GreekSaladImg from "../../images/greek salad.jpg"
import BruchettaImg from "../../images/bruchetta.png"
import LemonDessertImg from "../../images/lemon dessert.jpg"

const Highlights = () => {
    return (
        <section className="highlights-section" id='highlights'>
            <header className="highlights-heading">
                <h1 className="highlights-header">This week's specials!</h1>
                <button className="highlights-button">Online menu</button>
            </header>
            <div className="highlight-card-array">
                <HighlightCard
                    img={GreekSaladImg}
                    price='$12.99'
                    title='Greek Salad'
                    text='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
                />
                <HighlightCard
                    img={BruchettaImg}
                    price='$5.99'
                    title='Bruchetta'
                    text='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
                />
                <HighlightCard
                    img={LemonDessertImg}
                    price='$5.00'
                    title='Lemon dessert'
                    text='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
                />
            </div>
        </section>
    )
};

export default Highlights;
