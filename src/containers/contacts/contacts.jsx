import React from 'react';
import './contacts.css';
import linkedin_icon from '../../assets/svgs/linkedin.svg'
import github_icon from '../../assets/svgs/github-mark.svg';

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
        <>
        <ul className="contactables">
            {insertContacts}
        </ul>
        <div className="email-button">
            <a href="mailto:robert.lauv3@gmail.com"><p>Email me!</p></a>
        </div>
        </>
    );
}

export default Contacts;