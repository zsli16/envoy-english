import React, {Component} from 'react';
import {Container, Row} from '../styles/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/header';
import Footer from '../components/footer';

//content
import EN from '../content/en.json';
import ES from '../content/es.json';

const translations = {EN, ES};

class FreeClassCode extends Component {

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
        page = {'apply'}
        handleChange={(e) => this.handleChange(e)}
        buttonText={messages.Hero.button_2}
        language={this.state.language}
      />
      <Container>
        <h1>{messages.FreeClassCode.header}</h1>
        <h2>{messages.FreeClassCode.tagline}</h2>
        <Row>
          <h4>{messages.FreeClassCode.description}</h4>
        </Row>
        <Row>
          <FontAwesomeIcon id="down-arrow" color='lightgray' size="3x" icon={faChevronDown}/>
        </Row>
      </Container>
      <Container id="application">
        <iframe 
          src="https://services.cognitoforms.com/f/neg3yezHME-sqGKAznf3rA?id=42"
          scrolling='yes'
          frameBorder='0'
          seamless='seamless'
          title='booking-code'
          height='1060px'
          width="100%"        
        />
      </Container>
      <Footer header={messages.Contact.header}/>
      </>
    );
  }
};

export default FreeClassCode;
