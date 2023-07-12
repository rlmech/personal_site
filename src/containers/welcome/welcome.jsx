import React from 'react';
import './welcome.css';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className="welcome-screen">
            <div className="welcome-fg">
                <div className="welcome-logo"></div>
                <div className="welcome-text">
                    <p>WELCOME</p>
                </div>
                <div className="welcome-navbar">
                    <ul className="welcome-navbar-list">
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><Link to="/projects">PROJECTS</Link></li>
                        <li><Link to="/experience">EXPERIENCE</Link></li>
                        <li><Link to="/contacts">CONTACT</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Welcome;