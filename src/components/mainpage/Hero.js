import Photo from "../../images/restauranfood.jpg"

const Hero = () => {
    return (
        <section className="hero" id='hero'>
            <div className="hero-card">
                <h1 className="hero-title">Little Lemon</h1>
                <h2 className="hero-subtitle">Chicago</h2>
                <div className="hero-text">We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</div>
                <a href="/booking">
                    <button className="hero-button" >Reserve a table</button>
                </a>
            </div>
            <div className="hero-img-container">
                <img className="hero-img" src={Photo} alt="A restaurant dish"/>
            </div>
        </section>
    )
}

export default Hero;
