import './App.css';

import { Welcome, About, Experience, Projects, Contacts } from './containers';
// import { Navbar, Button, Tab } from './components';

function App() {
  return (
    <div className="App">
      <Welcome />
      <About />
      <Projects />
      <Experience />
      <Contacts />
    </div>
  );
}

export default App;
