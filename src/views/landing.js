import React, {Component} from 'react';
import {Container, Row} from '../styles/layout';
import {Link} from 'react-router-dom'
import {Button} from '../styles/ui-components';

class LandingPage extends Component {
  render() {
    return (
      <Container>
        <h1>Welcome to Envoy English</h1>
        <h2>We launch your English to the next level</h2>
        <Row>Improve your English conversation skills with live, interactive video classes led by native speakers.
        <br/>Practice speaking in immersive, role playing exercises to overcome real life challenges.
        </Row>
        <Row>
          <Button>How it works</Button>
          <Button primary><Link to="/missions">Start Now</Link></Button>
        </Row>
      </Container>
    );
  }
};

export default LandingPage;