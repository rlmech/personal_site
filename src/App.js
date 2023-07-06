import React, { Component } from 'react';
import './App.css';
import { Welcome, About, Experience, Projects, Contacts } from './containers';
import { Navbar } from './components';
import { Routes, Route } from 'react-router-dom';

function NotFound (){
  return (
    <div className="NotFoundPage">
      <Navbar />
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        <p>The page you are trying to reach does not exist.</p>
      </div>
    </div>
  )
}

class App extends Component {
  render() {
      return (
      <div className="App">
        <Routes>
          <Route path="/" element={ <Welcome /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/projects" element={ <Projects /> } />
          <Route path="/experience" element={ <Experience /> } />
          <Route path="/contacts" element={ <Contacts /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </div>
    );
  }
}
// 
export default App;
