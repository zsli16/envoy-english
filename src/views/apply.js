import React, {Component} from 'react';
import {Container, Row} from '../styles/layout';
import {StyledApplicationForm} from '../styles/ui-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {HashLink} from 'react-router-hash-link';

class Application extends Component {
  render() {

    return (
      <>
      <Container>
        <h1>Register for Our Beta Trial</h1>
        <h2>Find Your Level, Pick a Mission, Get Started!</h2>
        <Row>
          <h4>We are currently accepting applications for our Beta trial. To participate, please fill out the form below. This form will allow us to identify your English level and recommend Missions that are most suitable to you. </h4>
        </Row>
        <Row>
          <p>All of our Beta missions are Free! The only requirements are a computer with a camera, microphone, and a strong internet connection. Ready? Get started below.</p>
        </Row>
        <Row>
          <HashLink to="/apply/#application"><FontAwesomeIcon id="down-arrow" color='lightgray' size="3x" icon={faChevronDown}/></HashLink>
        </Row>
      </Container>
      <Container id="application">
        <h4>Application for English Course</h4>
        <StyledApplicationForm 
          src="https://services.cognitoforms.com/f/neg3yezHME-sqGKAznf3rA?id=36"
          scrolling='yes'
          frameBorder='0'
          seamless='seamless'
          title='application'
        />
      </Container>
      </>
    );
  }
};

export default Application;