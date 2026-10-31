import { Link } from "react-router-dom";
import { Logo } from "./assets/Urls";

const Header = ({ cartCount }) => {
    return (
        <header className="Header">
            <Link className="Header__home" to="/" aria-label="Dastarkhwan home">
                <Logo />
            </Link>
            <nav className="nav-links" aria-label="Main navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>
                        <Link to="/cart">
                            Cart{cartCount > 0 && <span className="Header__cartCount">{cartCount}</span>}
                        </Link>
                    </li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;