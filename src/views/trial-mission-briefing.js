import React, {Component} from 'react';
import {StyledDocs} from '../styles/ui-components';
import Header from '../components/header';

//content
import EN from '../content/en.json';
import ES from '../content/es.json';

const translations = {EN, ES};

class TrialMissionBriefing extends Component {
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
      <Header page={'briefing'}/>
      <div style={{height: '100vh', width: '100vw'}}>
        <StyledDocs 
          src="https://docs.google.com/document/d/e/2PACX-1vTXfQmkU7EKmda2ZqL_7sij0hYslstPXD2b4GeEYalaKDFItR6MNt4Vsg7HQidvs-lmG4hyDGYn0vri/pub?embedded=true"
          width="100%"
          height="100%"
          style={{position: 'absolute', left: '15%', top: '15%'}}
        />
      </div>
      </>
    );
  }
};

export default TrialMissionBriefing;