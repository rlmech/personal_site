import React from 'react';
import './experience.css'

const Experience = () => {

    const workExperience = [

    ]

    const volunteerExperience = [
        {
            name: "LA Mentoring",
            description: <>
                <ul>
                    <li>
                        Facilitated discussion during class activities involving 500 students on the topics of boolean logic, proofs, graphs, relationships, and finite state machines
                    </li>
                    <li>
                        Collaborated with 20 other learning facilitators/assistants and course staff to discuss students’ weaknesses and discuss facilitation techniques
                    </li>
                    <li>
                    Held additional office hours outside of class to assist struggling students with difficult material
                    </li>
                </ul>
            </>
        },
    ]

    const insertExperience = (entries) => {
        return entries.map( (entry) => {
            return (
                <>
                <div className="entry">
                    <p className="entryTitle">{entry.name}</p>
                    <p className="entryDescription">{entry.description}</p>
                </div>
                </>
            )
        })
    } 

    return (
        <div className="experience-sections">
            <div className="work-experience">
                <p className="work-experience-header">WORK</p>
                {insertExperience(workExperience)}
            </div>
            <div className="volunteer-experience">
                <p className="volunteer-experience-header">VOLUNTEER</p>
                {insertExperience(volunteerExperience)}
            </div>
        </div>
    );
}

export default Experience;