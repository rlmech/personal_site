import React from 'react';
import './about.css'
import '../general-styles/page.css'
import Peter from '../../assets/imgs/BCeater-right.png'
import Robert from '../../assets/imgs/robert_img.jpg'
import { Navbar } from '../../components'

const About = () => {
    return (
        <div className="page-screen-background" id="about">
            <div className="page-foreground">
                <div className="page-title">
                    <p>About</p>
                </div>
                <div className="about-text">
                    <p>My name is Robert Lauv. 
                        I'm currently a third year pursuing a B.S. in Computer Science at University of California, Irvine.</p>
                    <br></br>
                    <p>My interests are somewhere.</p>
                    <br></br>
                    <p>My pastimes include eating, hanging out with friends, asking random questions about life, 
                        and playing games like Chess, Valorant, Terraria, etc.</p>
                </div>
                <img src = {Peter} alt="Pic of UCI Mascot Peter the Anteater" className="petr_img"></img>
                <div className="robert_img">
                    <img src = {Robert} alt="Pic of Robert Lauv"></img>
                </div>
            </div>
            <Navbar />
        </div>
    );
}

export default About;