import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import './App.css';

import Nav from '../Nav/Nav';
import Home from '../Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Home />


      </div>
    </Router>
  );
}

export default App;
