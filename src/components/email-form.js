import React, {Component} from 'react';

class EmailForm extends Component {

  render() {
    const style = {
      'position': 'relative',
      'minWidth':'100%',
      'frameborder': 0, 
      'scrolling': 'yes',
      'seamless': 'seamless',
      'height': 328,
      'width': '100%'
    };

    return(
      <iframe src="https://services.cognitoforms.com/f/neg3yezHME-sqGKAznf3rA?id=37" style={style} />
    );
  }
}

export default EmailForm;