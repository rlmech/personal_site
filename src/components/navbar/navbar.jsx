import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';

function Navbar () {

    const [navActive, setNavActive] = React.useState(false);
    const toggleActive = () => {
        setNavActive(!navActive);
    }

    return (
        <nav className="navbar">
            <p className="navbar-icon" onClick={toggleActive}>&gt;&gt;</p>
            {(navActive) && (
            <ul className="navbar-list">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/projects">PROJECTS</Link></li>
                <li><Link to="/experience">EXPERIENCE</Link></li>
                <li><Link to="/contacts">CONTACT</Link></li>
            </ul>
            )}
        </nav>
    );

}

export default Navbar;