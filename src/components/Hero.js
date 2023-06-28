import Photo from "../images/restauranfood.jpg"

const Hero = () => {
    return (
        <section class="hero">
            <div class="hero-card">
                <h1 class="hero-title">Little Lemon</h1>
                <h2 class="hero-subtitle">Chicago</h2>
                <div class="hero-text">We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</div>
                <button class="hero-button">Reserve a table</button>
            </div>
            <div class="hero-img-container">
                <img class="hero-img" src={Photo} alt="A restaurant dish"/>
            </div>
        </section>
    )
}

export default Hero;