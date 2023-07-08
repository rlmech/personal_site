import React from 'react';
import './projects.css'
import PersonalSite from '../../assets/imgs/project_personal_site.jpg'
import ZotsPerMinute from '../../assets/imgs/project_zotsperminute.png'
import OldSite from '../../assets/imgs/project_old_site.jpg'

const Projects = () => {
    return (
        <div className="projects-showcase">
            <ul className="projects-list">
                <li>
                    <div>
                        <a href={'https://github.com/rlmech/personal_site'} rel="noreferrer" target='_blank'>
                            <img src={PersonalSite} alt="Pic of new personal site home page"></img>
                        </a>
                    </div>
                </li>
                <li>
                    <div>
                        <a href={'https://github.com/rlmech/ZotsPerMinute'} rel="noreferrer" target='_blank'>
                            <img src={ZotsPerMinute} alt="Pic of ZotsPerMinute home screen"></img>
                        </a>
                    </div>
                </li>
                <li>
                    <div>
                        <a href={'https://github.com/rlmech/rlmech.github.io'} rel="noreferrer" target='_blank'>
                            <img src={OldSite} alt="Pic of old personal site home page"></img>
                        </a>
                    </div>
                </li>
                <li>
                    <div>
                        <p>Project 4</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Projects;