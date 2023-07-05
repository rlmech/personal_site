import './App.css';

import { Welcome, About, Experience, Projects, Contacts } from './containers';
// import { Navbar, Button, Tab } from './components';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Welcome /> } />
        <Route path="about" element={ <About /> } />
        <Route path="projects" element={ <Projects /> } />
        <Route path="experience" element={ <Experience /> } />
        <Route path="contacts" element={ <Contacts /> } />
      </Routes>
    </div>
  );
}

export default App;
