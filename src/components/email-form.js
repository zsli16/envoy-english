import React, {Component} from 'react';
import {StyledEmailForm} from '../styles/ui-components';

class EmailForm extends Component {

  render() {
    return(
      <StyledEmailForm 
        src="https://services.cognitoforms.com/f/neg3yezHME-sqGKAznf3rA?id=37"
        title='email-form'
        frameborder="0"
        scrolling="yes"
        seamless="seamless"
      />
    );
  }
}

export default EmailForm;