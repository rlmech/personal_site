import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';

function Navbar () {
    return (
        <div className="navbar">
            <p>&gt;&gt;</p>
            <ul className="navbar-list">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/projects">PROJECTS</Link></li>
                <li><Link to="/experience">EXPERIENCE</Link></li>
                <li><Link to="/contacts">CONTACT</Link></li>
            </ul>
        </div>
    );

}

export default Navbar;