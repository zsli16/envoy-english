import React, {Component} from 'react';
import {Container, Row} from '../styles/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/header';

//content
import EN from '../content/en.json';
import ES from '../content/es.json';

const translations = {EN, ES};

class SignUpFreeTrial extends Component {

  constructor(props) {
    super(props);
    this.state = {
      language: 'EN',
      messages: EN,
      loaded: false,
    }
  }

  componentWillUnmount() {
    const el = document.getElementById('simplybook');
    el.parentNode.removeChild(el);
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
        language={this.state.language}
      />
      <Container>
        <h1>{messages.FreeTrial.header}</h1>
        <h2>{messages.FreeTrial.tagline}</h2>
      <Row>
        <h3>{messages.FreeTrial.description}</h3>
      </Row>
      <Row>
        <FontAwesomeIcon id="down-arrow" color='lightgray' size="3x" icon={faChevronDown}/>
      </Row>
      </Container>
      <Container bookingform id="simplybook">
        {!this.state.loaded &&
          <>
          <Row>
            <h4>Loading classes...</h4>
          </Row>
          <Row>
            <FontAwesomeIcon id="spinner" color='lightgray' size="3x" icon={faCircleNotch} spin/>
          </Row>
          </>
        }
        <iframe 
          src="https://envoyenglish.simplybook.me/v2/#book"
          frameBorder='0'
          scrolling = 'auto'
          id = 'simplybook'
          border = '0'
          width = "80%"
          height = "1000px"
          className = "sb-widget-iframe"
          onLoad = {() => this.setState({loaded: true})}
        />
      </Container>
      </>
    );
  }
};

export default SignUpFreeTrial;
