import React, {Component} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import {Container, Grid, Cell, Footer, Row, ColoredContainer} from '../styles/layout';
import {Button} from '../styles/ui-components';
import EmailForm from '../components/email-form';

//content
import missionData from '../content/missions.json';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

class Missions extends Component {
  render() {

    return (
      <>
      <Link to='/apply'><Button style={{'position': 'absolute', 'top': '3%', 'right': '3%'}} primary>Sign up</Button></Link>
      <Container>
        <h2>English Speaking Missions</h2>
        <Grid>
          {
            missionData.map(mission => {
              return <Cell>
                <div>
                  <h4>{mission.title}</h4>
                  <h5>{mission.subtitle}</h5>
                </div>
                <div>
                  <p>Available for: {mission.levels}</p>
                  <Link to='/apply'><Button primary>Join Mission</Button></Link>
                </div>
              </Cell>
            })
          }
          <Cell>
            <div>
              <h4>Request a mission</h4>
              <h5>Don't see an interesting topic for conversation here? Have a different language challenge in mind? Send us your ideas!</h5>
            </div>
            <Link to='#email-form'>
              <Button primary>Contact us</Button>
            </Link>
          </Cell>
        </Grid>
      </Container>
      <ColoredContainer id="email-form">
        <h1>Gain Confidence in English</h1>
        <Row>Do you struggle to express yourself in English? Have you had communication problems with international coworkers? Join a Mission today to gain the confidence you need to succeed in your personal and professional goals.</Row>
        <Row>
          <EmailForm/>
        </Row>
      </ColoredContainer>
      <Footer>
        <h4>Contact Us</h4>
        <p><span><FontAwesomeIcon color='white' size="1x" icon={faPhoneAlt}/></span>  +52 55 8421 9934 (Whatsapp)</p>
        <p><span><FontAwesomeIcon color='white' size="1x" icon={faEnvelope}/></span>  hello@envoyenglish.com</p>
      </Footer>
      </>
    );
  }
};

export default Missions;