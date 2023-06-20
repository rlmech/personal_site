import logo from './rlauv.png';
import './App.css';

import Navbar from './components/navbar';
import Tab from './components/tab';
import Contacts from './components/contacts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Navbar />
      <Tab />
      <Contacts />
      
    </div>
  );
}

export default App;
