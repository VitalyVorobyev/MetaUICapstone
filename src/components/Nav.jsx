const Nav = (props) => {
    const items = [
        ["/", "Home"],
        ["/#about", "About"],
        ["/", "Menu"],
        ["/booking", "Reservations"],
        ["/", "Order online"],
        ["/", "Login"]
    ].map((item, index) => {
        const classname = index === props.active ? "active" : "";
        return <li key={index}><a className={classname} href={item[0]}>{item[1]}</a></li>
    }
    );
    return (
        <nav><ul>{items}</ul></nav>
    )
}

export default Nav;
