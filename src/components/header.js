import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar} from '../styles/layout';
import {Button, Logo} from '../styles/ui-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import {primary} from '../styles/colors';

const iconStyle = {
  'backgroundColor': `${primary}`,
  'color': 'white',
  'padding': '.5em',
  'border-radius': '45px',
  'margin': '.25em',
};

const formUrl = 'https://www.cognitoforms.com/AgaveCommerce/EnvoyEnglishBetaApplication';

class Header extends Component {
  render() {
    const {auth} = this.props;
    return (
      <Navbar>
        <Link to="/">
          <FontAwesomeIcon color={primary} style={iconStyle} size="2x" icon={faRocket}/>
        </Link>
        <Logo>Envoy Education</Logo>
        {!auth && <a target='_blank' href={formUrl}><Button primary>Sign up</Button></a>}
      </Navbar>
    );
  }
};

export default Header;