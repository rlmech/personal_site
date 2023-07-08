import React from 'react';
import './contacts.css';
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

    const emailForm = <>
        <div className="email-form-container">
            <div className="email-form">
                <div className="name-fields">
                    <div className="wrap-field">
                        <p>First Name</p>
                        <input type="text" id="fname" placeholder="First Name"></input>
                    </div>
                    <div className="wrap-field">
                        <p>Last Name</p>
                        <input type="text" id="lname" placeholder="Last Name"></input>
                    </div>
                </div>

                <div className="wrap-field">
                    <p>Email</p>
                    <input type="text" id="email" placeholder="Your Email"></input>
                </div>
                <div className="wrap-field">
                    <p>Message</p>
                    <textarea id="message" maxLength="2000" placeholder="Message Contents"></textarea>
                </div>
                <div className="sendButton">
                    <button>Send</button>
                </div>
            </div>
        </div>
    </>

    return (
        <>
        <ul className="contactables">
            {insertContacts}
        </ul>
        {emailForm}
        </>
    );
}

export default Contacts;