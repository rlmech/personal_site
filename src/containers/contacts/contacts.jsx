import React from 'react';
import './contacts.css';
import { Navbar } from '../../components'
import linkedin_icon from '../../assets/svgs/linkedin.svg'
import github_icon from '../../assets/svgs/github-mark.svg';
import pdf_icon from '../../assets/imgs/adobe_pdf.png'
import resume from '../../assets/files/resume.pdf'

const Contacts = () => {
    const contactables = [
        {
            name: "GitHub",
            link: "https://github.com/rlmech",
            image: github_icon,
            alt: "GitHub logo"
        }, 
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/robertlauv/",
            image: linkedin_icon,
            alt: "LinkedIn logo"
        }, 
        {
            name: "Resume",
            link: resume,
            image: pdf_icon,
            alt: "pdf file img"
        }
    ]
    const insertContacts = contactables.map((contact) => {
        return (
            <li class="contactable">
                <a href={contact.link} target="_blank" rel="noreferrer">
                    <img alt={contact.alt} src={contact.image}></img>
                    <p>Click to check out my {contact.name}!</p>
                </a>
            </li>
        )
    })

    return (
        <div className="page-screen-background" id="contacts">
            <div className="page-foreground">
                <div className="page-title">
                    <p>Contacts</p>
                </div>
                <ul className="contactables">
                    {insertContacts}
                </ul>
            </div>
            <Navbar />
        </div>
    );
}

export default Contacts;