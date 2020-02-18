import React, {Component} from 'react';
import {Container, Row} from '../styles/layout';
import {Button} from '../styles/ui-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {HashLink} from 'react-router-hash-link';
import Header from '../components/header';
import MicRecorder from 'mic-recorder-to-mp3';

//content
import EN from '../content/en.json';
import ES from '../content/es.json';

const translations = {EN, ES};

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class AudioRecorder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      language: 'EN',
      messages: EN,
      isRecording: false,
      blobURL: '',
      isBlocked: false,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    navigator.getUserMedia({ audio: true },
      () => {
        console.log('Permission Granted');
        this.setState({ isBlocked: false });
      },
      () => {
        console.log('Permission Denied');
        this.setState({ isBlocked: true })
      },
    );
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
        <h1>{messages.Application.header}</h1>
        <input type="radio" name="media" value="audio">audio</input>
        <Button id="start">Start</Button>
        <Button id="stop">Stop</Button>
      </Container>
      </>
    );
  }
};

export default AudioRecorder;
