import Logo from "../images/Logo2.svg";
import Nav from "./Nav";

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt="Logo"/>
        <Nav/>
        <section>
            <h2>Contact</h2>
            <ul>
                <li>Address</li>
                <li>Phone number</li>
                <li>Email</li>
            </ul>
        </section>
        <section>
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
