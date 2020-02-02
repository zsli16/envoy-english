import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import LandingPage from './views/landing';
import Missions from './views/missions';
import Application from './views/apply';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/missions' component={Missions}/>
        <Route path='/apply' component={Application}/>
        <Redirect to='/'/>
      </Switch>
    </div>
  );
}

export default App;
