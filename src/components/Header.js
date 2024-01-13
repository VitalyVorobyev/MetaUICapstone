import Nav from "./Nav";
import Logo from "../images/Logo.svg";

const Header = (props) => {
    return (
        <header>
            <img src={Logo} alt="Logo" />
            <Nav {...props} />
        </header>
    )
}

export default Header;
