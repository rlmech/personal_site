    import React from 'react';
    import './App.css';
    import { Welcome, About, Experience, Projects, Contacts, NotFound } from './containers';
    import { Page } from './components';
    import { Routes, Route } from 'react-router-dom';

    const pageData = [
        {
            path: "/",
            element: <Welcome />
        },
        {
            title: "ABOUT",
            path: "/about",
            element: <About />
        },
        {
            title: "PROJECTS",
            path: "/projects",
            element: <Projects />
        },
        {
            title: "EXPERIENCE",
            path: "/experience",
            element: <Experience />
        },
        {
            title: "CONTACTS",
            path: "/contacts",
            element: <Contacts />
        },
        {
            path: "*",
            element: <NotFound />
        }
    ]

    const insertPages = pageData.map( (page) => {
        console.log(page);
        return <Route path={page.path} element={<Page pageContent={page} />} />
    })

    const App = () => {
        return (
        <div className="App">
            <Routes>
                {insertPages}
            </Routes>
        </div>
        );
    }
    
    export default App;
