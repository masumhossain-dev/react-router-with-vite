import { Link } from "react-router-dom";
import  './Heaader.css';

const Header = () => {
    return (
        <div className="nav-body">
            <nav className="navbar">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            </nav>
        </div>
    );
};

export default Header;