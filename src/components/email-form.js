import React, {Component} from 'react';
import {StyledEmailForm} from '../styles/ui-components';

class EmailForm extends Component {

  render() {
    return(
      <StyledEmailForm 
        src={this.props.url}
        title='email-form'
        frameborder="0"
        scrolling="yes"
        seamless="seamless"
      />
    );
  }
}

export default EmailForm;