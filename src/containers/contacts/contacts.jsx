import React from 'react';
import './contacts.css';

// import linkedin_icon from '../../assets/svgs/linkedin.svg'
// import github_icon from '../../assets/svgs/github-mark.svg';
// import pdf_icon from '../../assets/imgs/adobe_pdf.png'
// import resume from '../../assets/files/resume.pdf'

const Contacts = () => {

    return (
        <div className="page-screen-background" id="contacts">
            <div className="page-foreground">
                <div className="page-title">
                    <p>Contacts</p>
                </div>
            </div>
        </div>
    );

    // render() {
    //     return(
    //         <div class="bottom-icons">
    //             <div id="contact">
    //                 <ul class="bottom-icons">
    //                     {/* LinkedIn */}
    //                     <li class="bottom-icons">
    //                         <a target="_blank" href="https://www.linkedin.com/in/robertlauv/">
    //                             <img class="logo" alt="LinkedIn logo" src={linkedin_icon}></img>
    //                             {/* https://brand.linkedin.com/policies */}
    //                         </a>
    //                     </li>
    //                     {/* Github */}
    //                     <li class="bottom-icons">
    //                         <a target="_blank" href="https://github.com/rlmech">
    //                             <img class="logo" alt="GitHub logo" src={github_icon}></img>
    //                             {/* https://github.com/logos */}
    //                         </a>
    //                     </li>
    //                     {/* Resume */}
    //                     <li class="bottom-icons">
    //                         <a target="_blank" href={resume}>
    //                             <img class="logo" alt="pdf file img" src={pdf_icon}></img>
    //                             {/* https://www.adobe.com/legal/permissions/icons-web-logos.html */}
    //                         </a>
    //                     </li>
    //                 </ul>
    //             </div>

    //         </div>
    //     );
    // }
}

export default Contacts;