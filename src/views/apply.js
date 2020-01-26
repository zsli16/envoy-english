import React, {Component} from 'react';

class Application extends Component {
  render() {
    
    const style = {
      'position': 'relative',
      'minWidth':'100%',
      'frameborder': 0, 
      'scrolling': 'yes',
      'seamless': 'seamless',
      'height': 1998,
      'width': '100%'
    };

    return (
      <>
        <h2 style={{'text-align': 'center'}}>English Course Application</h2>
        <iframe src="https://services.cognitoforms.com/f/neg3yezHME-sqGKAznf3rA?id=36" style={style}/>
      </>
    );
  }
};

export default Application;