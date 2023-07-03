import React, {Component} from 'react';
import './projects.css'
import PersonalSite from '../../assets/imgs/project_personal_site.jpg'

const Projects = () => {
    return (
        <div className="page-screen-background" id="projects">
            <div className="page-foreground">
                <div className="page-title">
                    <p>Projects</p>
                </div>
                <div className="projects-showcase">
                    <ul className="projects-list">
                        <li>
                            <div>
                                <a href={'https://github.com/rlmech/personal_site'} target='_blank'><img src={PersonalSite}></img></a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>Project 2</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>Project 3</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>Project 4</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Projects;