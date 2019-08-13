import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import './App.css';
import Nav from '../Nav/Nav';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />


      </div>
    </Router>
  );
}

export default App;
