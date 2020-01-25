import React, {Component} from 'react';
import HubspotForm from 'react-hubspot-form';

class EmailForm extends Component {

  setForm() {
    console.log('FORM HAS LOADED')
    const iframe = document.getElementsByTagName('iframe')[0];
    const window = iframe.contentWindow || iframe.contentDocument;
    if (window) {
      const document = window.document;
      console.log('document', document)
    }
  }

  render() {
    return(
      <HubspotForm
        portalId='7028167'
        formId='152b4d03-9104-45fb-b5e5-8f7cfdb4b06d'
        onSubmit={() => console.log('Submit!')}
        onReady={() => this.setForm()}
        loading={<div>Loading...</div>}
      />
    );
  }
}

export default EmailForm;