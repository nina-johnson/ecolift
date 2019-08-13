import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import './App.css';

import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Services from '../Services/Services';
import About from '../About/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Home />
        <Services />
        <About />


      </div>
    </Router>
  );
}

export default App;
