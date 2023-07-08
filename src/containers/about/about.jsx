import React from 'react';
import './about.css'
import Peter from '../../assets/imgs/BCeater-right.png'
import Robert from '../../assets/imgs/robert_img_compressed.jpg'

const About = () => {

    const sections = [
        {
            textcontents: <>
                <p>My name is Robert Lauv. I'm currently a third year pursuing a B.S. in Computer Science at University of California, Irvine.</p>
                <p>I enjoy solving problems and am</p>
                <p>My pastimes include eating, hanging out with friends, asking random questions about life, 
                    and playing games like Chess, Valorant, Terraria, etc.</p>
            </>,
            img: {
                imgsrc: Robert,
                alt: "Pic of Robert Lauv",
            }
        }
    ]
    
    const insertSections = sections.map( (section) => {
        return (
            <div className={`section-wrapper${("img" in section)? " has-img" : ""}`}>
                {('textcontents' in section) && (
                    <div className="section-text">
                        {section.textcontents}
                    </div>
                )}
                {('img' in section) && (
                <div className="section-img">
                    <img styles={('styles' in section.img) && (section.styles)} src={section.img.imgsrc} alt={section.img.alt}></img>
                </div>
                )}
            </div>
        )
    })

    return (
        <>
            <div className="sectionContainer">
                {insertSections}
            </div>
            <div className="page-footer">
                <img className="bottomPageDecor" src={Peter} alt="Pic of UCI Mascot Peter the Anteater"></img>
            </div>
        </>
    );
}

export default About;