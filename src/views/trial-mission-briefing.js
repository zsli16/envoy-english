import React, {Component} from 'react';
import Header from '../components/header';

class TrialMissionBriefing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'EN',
      pdf: 'https://drive.google.com/open?id=14SLwU9qZWlO20WkEGfu5mbk150kyB-2u'
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const iframe = document.getElementById('briefing');
    const body = iframe.contentWindow.document.getElementsByTagName('body')[0];
    body.style.overflow = 'hidden';
  }

  handleChange(event) {
    const lang = event.target.value;
    this.setState({language: lang});
    const iframe = document.getElementById('briefing')
    if (lang === 'EN') {
      iframe.setAttribute("src", "https://docs.google.com/document/d/e/2PACX-1vTXfQmkU7EKmda2ZqL_7sij0hYslstPXD2b4GeEYalaKDFItR6MNt4Vsg7HQidvs-lmG4hyDGYn0vri/pub?embedded=true");
      this.setState({pdf: 'https://drive.google.com/open?id=14SLwU9qZWlO20WkEGfu5mbk150kyB-2u'})
    }
    if (lang === 'ES') {
      iframe.setAttribute("src", "https://docs.google.com/document/d/e/2PACX-1vQXj8SHgVj2W_YamLk_x7DqokNNRuQqJiQWuOZQoS-b5G0cHMoRhGCb29eVvKdiC1aI0eU76xHWNjw_/pub?embedded=true");
      this.setState({pdf: 'https://drive.google.com/open?id=1zGtuiP1QAet0qEObbL4Cxn_C4DPhOsZy'})
    }
  }

  render() {
    return (
      <>
      <Header
        className = 'briefing-header'
        handleChange = {(e) => this.handleChange(e)} 
        page={'briefing'}
        language={this.state.language}
        pdf={this.state.pdf}
      />
      <div style={{height: '100vh', width: '100vw'}}>
        <iframe
          id = 'briefing' 
          src= "https://docs.google.com/document/d/e/2PACX-1vTXfQmkU7EKmda2ZqL_7sij0hYslstPXD2b4GeEYalaKDFItR6MNt4Vsg7HQidvs-lmG4hyDGYn0vri/pub?embedded=true"
          width="100%"
          seamless='seamless'
          overflow='hidden'
          height="100%"
          style={{position: 'absolute', left: '15%', top: '15%'}}
        />
      </div>
      </>
    );
  }
};

export default TrialMissionBriefing;