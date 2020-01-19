import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import Header from './components/header';
import LandingPage from './views/landing';
import Missions from './views/missions';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/missions' component={Missions}/>
        <Redirect to='/'/>
      </Switch>
    </div>
  );
}

export default App;
