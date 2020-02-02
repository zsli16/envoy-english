import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import EmailForm from '../components/email-form';

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

//material
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
    console.log('messages', messages)

    return (
      <>
      <div style={{'position': 'absolute', 'top': '3%', 'right': '3%', 'display': 'flex', 'flexDirection': 'row-reverse', 'alignItems': 'center'}}>
      <Link to='/apply'><Button primary>Sign up</Button></Link>
      <FormControl variant="outlined">
        <Select value={this.state.language} onChange={this.handleChange}>
          <MenuItem value={'EN'}>EN</MenuItem>
          <MenuItem value={'ES'}>ES</MenuItem>
        </Select>
      </FormControl>
      </div>
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
        <h1>How It Works</h1>
        <Row>The best way to master a language is to immerse yourself in real-life situations, which often requires traveling abroad. With Envoy English, you can now practice speaking English at your level without leaving your home. Each Mission requires you to learn specific vocabulary, phrases, and strategies. You will then use what you’ve learned to communicate with your teammates and complete a challenge.</Row>
        <Row left tall>
          <img src={convo} alt="chat"/>
          <div>
            <h3>Prepare for Your Mission</h3>
            <h4>Study Your Mission Briefing to Learn Key Phrases and Vocabulary</h4>
            <p>Your Mission Briefing contains the words, phrases, and information crucial to your success. Prepare to use these new phrases in your upcoming Mission, and you’ll sound like a native English speaker in no time! </p>
          </div>
        </Row>
        <Row right tall>
          <div>
            <h3>Overcome Obstacles</h3>
            <h4>Use Your Language Skills to Solve Problems with Your Teammates</h4>
            <p>In order to succeed, you must use all of your English communication skills and the new vocabulary you have learned. You will have to work closely with your teammates to complete each challenge by uncovering clues, asking questions, and agreeing upon a course of action. Your native English instructor will guide you along the way, but the success of the Mission depends on you.</p>
          </div>
          <img src={obstacle} alt="obstacles"/>
        </Row>
        <Row left tall>
          <img src={missioncompleted} alt="levels" />
          <div>
            <h3>Mission Accomplished!</h3>
            <h4>Elevate Your Language Skills</h4>
            <p>Each Mission is designed to increase your English speaking level. After the course, your instructor will send you personalized feedback with tips on how to keep improving. As you master the language, you will unlock higher level Missions. Are you up for the challenge?</p>
          </div>
        </Row>
      </Container>
      <ColoredContainer>
        <h1>Our Curriculum</h1>
        <Row>Envoy English uses digital immersion and interactive challenges to improve your English. Each Mission is designed to increase your level of fluency, coherency, interaction, and range of expression, as defined by the internationally recognized Common European Framework of Reference for Languages (CEFR). </Row>
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
        <h1>Upcoming English Speaking Missions</h1>
        <Row>
          <p>
            Ready to embark on your English speaking journey? Enroll in an upcoming Mission for free. We match you to a team with your right language level.
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
                <p>Available for: {mission.levels}</p>
                <Link to='/apply'><Button>Join Mission</Button></Link>
              </div>
            </Cell>
          })
        }
        </Grid>
        <Row>
          <Button primary><Link to="/missions">View More Missions</Link></Button>
        </Row>
      </Container>
      <ColoredContainer>
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

export default LandingPage;