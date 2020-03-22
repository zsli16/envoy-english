import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import LandingPage from './views/landing';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LandingPage}/>
    </div>
  );
}

export default App;
