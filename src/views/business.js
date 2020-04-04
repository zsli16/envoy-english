import React, {Component} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import {Container, Grid, BigCell, WhiteCell, Footer, Row, ColoredContainer} from '../styles/layout';
import {Button, MissionCover} from '../styles/ui-components';
import EmailForm from '../components/email-form';
import Header from '../components/header';

//content
import EN from '../content/en.json';
import ES from '../content/es.json';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

//images
import envoytraining from '../assets/envoytraining_business.png';
import annualevent from '../assets/annualevent_business.png';
import finaldestination from '../assets/finaldestination_business.png';
import hiringgame from '../assets/hiringgame_business.png';

const translations = {EN, ES};

class BusinessProgram extends Component {
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
    const missionExamples = messages.BusinessMissions;

    return (
      <>
      <Header 
        handleChange={(e) => this.handleChange(e)}
        buttonText={messages.Hero.button_2}
        language={this.state.language}
      />
      <Container>
        <h1>{messages.Business.header}</h1>
        <h2>{messages.Business.tagline}</h2>
        <Row>
          <p className="hero-description">{messages.Business.description}</p>
        </Row>
        <Row>
          <Link to="/business/#signup-business-form">
            <Button primary>{messages.FreeTrial.button}</Button>
          </Link>
        </Row>
      </Container>
      <ColoredContainer>
        <h1>{messages.SpecialOffer.header}</h1>
        <Row><h5 className="hero-description">{messages.SpecialOffer.description}</h5></Row>
        <Row>
          <WhiteCell>
            <h3>{messages.SpecialOffer.program}</h3>
            <ul>
              <li>{messages.SpecialOffer.offer_1}</li>
              <li>{messages.SpecialOffer.offer_2}</li>
              <li>{messages.SpecialOffer.offer_3}</li>
              <li>{messages.SpecialOffer.offer_4}</li>
            </ul>
          </WhiteCell>
        </Row>
      </ColoredContainer>
      <Container>
        <h1>{messages.BusinessProgram.header}</h1>
        <Grid>
          {
            missionExamples.map((mission, i) => {
              let imgSrc = envoytraining;
              switch(mission.img) {
                case 'envoytraining':
                  imgSrc = envoytraining;
                  break;
                case 'annualevent':
                  imgSrc = annualevent;
                  break;
                case 'finaldestination':
                  imgSrc = finaldestination;
                  break;
                case 'hiringgame':
                  imgSrc = hiringgame;
                  break;
                default:
                  imgSrc = envoytraining;
                  break;
              }
              return <BigCell key={i}>
                <div>
                  <MissionCover src={imgSrc.toString()} alt="cover-image" />
                  <h4>{mission.title}</h4>
                  <p>{mission.subtitle}</p>
                </div>
                <div style={{width: '80%'}}>
                  <h5 style={{textDecoration: 'underline'}}>{messages.BusinessProgram.learning_goals}</h5>
                  <ul>
                    <li>{mission.skill_1}</li>
                    <li>{mission.skill_2}</li>
                    <li>{mission.skill_3}</li>
                  </ul>
                </div>
              </BigCell>
            })
          }
        </Grid>
      </Container>
      <ColoredContainer id="signup-business-form">
        <h1>{messages.EmailForm.header}</h1>
        <Row>
          <EmailForm url={'https://services.cognitoforms.com/f/neg3yezHME-sqGKAznf3rA?id=43'}/>
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

export default BusinessProgram;