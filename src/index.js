import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, useLocation, Route, Redirect, Switch } from 'react-router-dom';
import {useEffect} from 'react';
import SignupWidget from './views/signup-widget';
import TrialMissionBriefing from './views/trial-mission-briefing';
import FreeClassCode from './views/free-class-code';
import Missions from './views/missions';
import Application from './views/apply';
import ApplyAudio from './views/apply-audio';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop/>
    <Route exact path='/' component={App}/>
    <Route exact path='/free-trial' component={SignupWidget}/>
    <Route exact path='/missions' component={Missions}/>
    <Route exact path='/trial-mission-briefing' component={TrialMissionBriefing}/>
    <Route exact path='/free-class-code' component={FreeClassCode}/>
    <Route exact path='/audio' component={ApplyAudio}/>
    <Route exact path='/apply' component={Application}/>
  </BrowserRouter>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
