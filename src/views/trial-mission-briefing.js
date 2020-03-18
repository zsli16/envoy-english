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
      language: 'EN'
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const lang = event.target.value;
    this.setState({language: lang});
    const iframe = document.getElementById('briefing')
    if (lang === 'EN') {
      iframe.setAttribute("src", "https://docs.google.com/document/d/e/2PACX-1vTXfQmkU7EKmda2ZqL_7sij0hYslstPXD2b4GeEYalaKDFItR6MNt4Vsg7HQidvs-lmG4hyDGYn0vri/pub?embedded=true");
    }
    if (lang === 'ES') {
      iframe.setAttribute("src", "https://docs.google.com/document/d/e/2PACX-1vQXj8SHgVj2W_YamLk_x7DqokNNRuQqJiQWuOZQoS-b5G0cHMoRhGCb29eVvKdiC1aI0eU76xHWNjw_/pub?embedded=true");
    }
  }

  render() {


    return (
      <>
      <Header
        handleChange = {(e) => this.handleChange(e)} 
        page={'briefing'}
        language={this.state.language}
      />
      <div style={{height: '100vh', width: '100vw'}}>
        <StyledDocs
          id = 'briefing' 
          src= "https://docs.google.com/document/d/e/2PACX-1vTXfQmkU7EKmda2ZqL_7sij0hYslstPXD2b4GeEYalaKDFItR6MNt4Vsg7HQidvs-lmG4hyDGYn0vri/pub?embedded=true"
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