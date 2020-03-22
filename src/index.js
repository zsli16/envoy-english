import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, useLocation, Route, Redirect } from 'react-router-dom';
import {useEffect} from 'react';
import SignupWidget from './views/signup-widget';

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
    <Redirect to='/'/>
  </BrowserRouter>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
