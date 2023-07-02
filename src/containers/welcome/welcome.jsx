import React, {Component} from 'react';
import './welcome.css';
import { Navbar } from '../../components';

const Welcome = () => {
    return (
        <div className="welcome-screen">
            <div className="welcome-fg">
                
                <div className="welcome-text">
                    <p>WELCOME</p>
                </div>

                <div className="welcome-navbar">
                    <ul className="welcome-navbar-list">
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#projects">PROJECTS</a></li>
                        <li><a href="#experience">EXPERIENCE</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Welcome;