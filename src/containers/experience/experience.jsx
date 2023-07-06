import React from 'react';
import './experience.css'
import { Navbar } from '../../components'

const Experience = () => {
    return (
        <div className="page-screen-background" id="experience">
            <div className="page-foreground">
                <div className="page-title">
                        <p>Experience</p>
                </div>
                <div className="experience-sections">
                    <div className="work-experience"></div>
                    <div className="volunteer-experience"></div>
                </div>
            </div>
            <Navbar />
        </div>
    );
}

export default Experience;