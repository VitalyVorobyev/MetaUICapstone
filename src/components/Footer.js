import Logo from "../images/Logo2.svg";
import Nav from "./Nav";

const Footer = () => {
    return (
        <footer>
            <section class="footer-section">
                <img src={Logo} alt="Logo"/>
            </section>
            <section class="footer-section">
                <Nav/>
            </section>
            <section class="footer-section">
                <h2>Contact</h2>
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>
            </section>
            <section class="footer-section">
                <h2>Social media links</h2>
                <ul>
                    <li>Github</li>
                    <li>Facebook</li>
                    <li>LinkedIn</li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer;
