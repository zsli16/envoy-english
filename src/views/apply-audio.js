import React, {Component} from 'react';
import {Container, Row} from '../styles/layout';
import {StyledApplicationForm} from '../styles/ui-components';
import Header from '../components/header';
import whatsapp from '../assets/whatsapp.png';

//content
import EN from '../content/en.json';
import ES from '../content/es.json';

const translations = {EN, ES};

class ApplyAudio extends Component {

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

    return (
      <>
      <Header 
        handleChange={(e) => this.handleChange(e)}
        buttonText={messages.Hero.button_2}
        language={this.state.language}
      />
      <Container>
        <h1>{messages.Audio.header}</h1>
        <h2>{messages.Audio.tagline}</h2>
        <Row>
          <h4>{messages.Audio.description}</h4>
        </Row>
      </Container>
      <Container>
        <Row block>
          <h1>1. {messages.Audio.option_1}</h1>
          <StyledApplicationForm 
            src="https://services.cognitoforms.com/f/neg3yezHME-sqGKAznf3rA?id=41"
            scrolling='no'
            frameBorder='0'
            seamless='seamless'
            title='application'
            height='200px'
          />
        </Row>
        <Row><h1>{messages.Audio.or}</h1></Row>
        <Row block>
          <h1>2. {messages.Audio.option_2}</h1>
          <div style={{'display': 'flex', 'align-items': 'center', 'margin': '1em'}}>
            <a href="https://wa.me/5215584219934">
              <img src={whatsapp}/>
            </a>
            <a href="https://wa.me/5215584219934"><h2 color="white">+52 55 8421 9934</h2></a>
          </div>
        </Row>
      </Container>
      </>
    );
  }
};

export default ApplyAudio;
