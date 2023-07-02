import './App.css';

import { Welcome, About, Experience, Projects, Contacts } from './containers';
import { Navbar, Button, Page, Tab } from './components';

function App() {
  return (
    <div className="App">
      <Welcome />
      <About />
      <Experience />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
