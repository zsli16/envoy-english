import React, {Component} from 'react';
import {Container, Row} from '../styles/layout';
import {StyledApplicationForm} from '../styles/ui-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {HashLink} from 'react-router-hash-link';
import Header from '../components/header';

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
          <h1>{messages.Audio.option_1}</h1>
        </Row>
        <Row block>
          <h1>{messages.Audio.option_2}</h1>
        </Row>
      </Container>
      </>
    );
  }
};

export default ApplyAudio;
