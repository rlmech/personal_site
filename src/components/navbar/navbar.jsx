import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';

function Navbar () {

    const [navActive, setNavActive] = React.useState(false);
    const toggleActive = () => {
        setNavActive(!navActive);
    }

    const pages = ["", "about", "projects", "experience", "contacts"];
    const insertNavItems = pages.map((item) => {
        const pageurl = '/' + item;
        if ( item === "" ){
            return <li>{(navActive) && (<Link to={pageurl}>HOME</Link>)}</li>
        } else {
            return <li>{(navActive) && (<Link to={pageurl}>{item.toUpperCase()}</Link>)}</li>
        }
    });

    return (
        <nav className="navbar">
            <div className="navbar-icon" onClick={toggleActive}>
                {((navActive) && <><p>&gt;&gt;</p></>) || <><p>&lt;&lt;</p></>}
            </div>
            <ul className={`navbar-list`}>
                {insertNavItems}
            </ul>
        </nav>
    );

}

export default Navbar;