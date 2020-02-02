import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import EmailForm from '../components/email-form';
import Header from '../components/header';

//styles
import {Container, ColoredContainer, Footer, Row, Cell, Grid} from '../styles/layout';
import {Button, Circle, LevelDescription, Tube} from '../styles/ui-components';

//content
import EN from '../content/en.json';
import ES from '../content/es.json';

//images
import convo from '../assets/videocall.png';
import obstacle from '../assets/obstacle.png';
import missioncompleted from '../assets/missioncompleted.png';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const translations = {EN, ES};

class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      language: 'EN',
      messages: EN
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const lang = event.target.value;
    this.setState({language: lang});
    this.setState({messages: translations[lang]});
  }

  render() {
    const {messages} = this.state;
    const missionExamples = messages.Missions;
    const Levels = messages.Levels;

    return (
      <>
      <Header 
        handleChange={(e) => this.handleChange(e)}
        buttonText={messages.Hero.button_2}
        language={this.state.language}
      />
      <Container hero>
        <h1>{messages.Hero.title}</h1>
        <h2>{messages.Hero.tagline}</h2>
        <Row>
          <p id="hero-description">{messages.Hero.description}</p>
        </Row>
        <Row>
          <HashLink to="/#how-it-works"><Button>{messages.Hero.button_1}</Button></HashLink>
          <Link to='/apply'><Button primary>{messages.Hero.button_2}</Button></Link>
        </Row>
      </Container>
      <Container id="how-it-works">
        <h1>{messages.HowItWorks.heading}</h1>
        <Row>{messages.HowItWorks.description}</Row>
        <Row left tall>
          <img src={convo} alt="chat"/>
          <div>
            <h3>{messages.HowItWorks.section_header_1}</h3>
            <h4>{messages.HowItWorks.section_tagline_1}</h4>
            <p>{messages.HowItWorks.section_description_1}</p>
          </div>
        </Row>
        <Row right tall>
          <div>
            <h3>{messages.HowItWorks.section_header_2}</h3>
            <h4>{messages.HowItWorks.section_tagline_2}</h4>
            <p>{messages.HowItWorks.section_description_2}</p>
          </div>
          <img src={obstacle} alt="obstacles"/>
        </Row>
        <Row left tall>
          <img src={missioncompleted} alt="levels" />
          <div>
            <h3>{messages.HowItWorks.section_header_3}</h3>
            <h4>{messages.HowItWorks.section_tagline_3}</h4>
            <p>{messages.HowItWorks.section_description_3}</p>
          </div>
        </Row>
      </Container>
      <ColoredContainer>
        <h1>{messages.Curriculum.header}</h1>
        <Row>{messages.Curriculum.description}</Row>
        <Container>
          {Levels.map((l, i) => {
            return <Tube key={i}>
              <Circle className="circle">{l.level}</Circle>
              <LevelDescription>
                <p style={{'fontWeight': '600', 'fontFamily': 'Exo, sans-serif'}}>{l.title}</p> 
                <p>{l.description}</p>
              </LevelDescription>
            </Tube>
          })}
        </Container>
      </ColoredContainer>
      <Container>
        <h1>{messages.UpcomingMissions.header}</h1>
        <Row>
          <p>
            {messages.UpcomingMissions.description}
          </p>
        </Row>
        <Grid>
        {
          missionExamples.map((mission, i) => {
            return <Cell key={i}>
              <div>
                <h4>{mission.title}</h4>
                <h5>{mission.subtitle}</h5>
              </div>
              <div>
                <p>{mission.levels}</p>
                <Link to='/apply'><Button>{messages.UpcomingMissions.button_1}</Button></Link>
              </div>
            </Cell>
          })
        }
        </Grid>
        <Row>
          <Button primary><Link to="/missions">{messages.UpcomingMissions.button_2}</Link></Button>
        </Row>
      </Container>
      <ColoredContainer>
        <h1>{messages.EmailForm.header}</h1>
        <Row>{messages.EmailForm.description}</Row>
        <Row>
          <EmailForm/>
        </Row>
      </ColoredContainer>
      <Footer>
        <h4>{messages.Contact.header}</h4>
        <p><span><FontAwesomeIcon color='white' size="1x" icon={faPhoneAlt}/></span>  +52 55 8421 9934 (Whatsapp)</p>
        <p><span><FontAwesomeIcon color='white' size="1x" icon={faEnvelope}/></span>  hello@envoyenglish.com</p>
      </Footer>
      </>
    );
  }
};

export default LandingPage;