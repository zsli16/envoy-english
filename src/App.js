import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import LandingPage from './views/landing';
import LandingPage2 from './views/landing_v2';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LandingPage2}/>
    </div>
  );
}

export default App;
