import Logo from "../images/Logo2.svg";
import GitHub from "../images/github-svgrepo-com.svg";
import Facebook from "../images/Facebook_icon_2013.svg.png";
import LinkedIn from "../images/LinkedIn_icon.svg.png";
import Nav from "./Nav";

const Footer = () => {
    return (
        <footer>
            <section className="footer-section">
                <img src={Logo} alt="Logo"/>
            </section>
            <section className="footer-section">
            <h2 className="footer-header">Navigation</h2>
                <Nav/>
            </section>
            <section className="footer-section">
                <h2 className="footer-header">Contact</h2>
                <ul>
                    <li>Burgstraße 24, 73207 Plochingen</li>
                    <li>071537060</li>
                    <li>littlelemon@gmail.com</li>
                </ul>
            </section>
            <section className="footer-section">
                <h2 className="footer-header">Social media</h2>
                <ul>
                    <li><img className="footer-sotial-logo" src={GitHub} alt="Github Logo"/></li>
                    <li><img className="footer-sotial-logo" src={Facebook} alt="Facebook Logo"/></li>
                    <li><img className="footer-sotial-logo" src={LinkedIn} alt="LinkedIn Logo"/></li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer;
