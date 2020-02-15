import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Logo, Navbar, Button, NavbarButtons, ApplicationDeadline} from '../styles/ui-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import {primary} from '../styles/colors';

//material
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const iconStyle = {
  'backgroundColor': `${primary}`,
  'color': 'white',
  'padding': '.5em',
  'borderRadius': '45px',
  'margin': '.25em',
};

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      signup: true,
      language: 'EN',
      apply: false
    }
  }

  componentDidMount() {
    const path = window.location.pathname;
    if (path === '/apply') {
      this.setState({signup: false})
      this.setState({apply: true})
    }
  }

  render() {

    return (
      <Navbar>
        <Link to="/">
          <FontAwesomeIcon color={primary} style={iconStyle} size="2x" icon={faRocket}/>
        </Link>
        <Logo>Envoy Education</Logo>
        <NavbarButtons>
          {this.state.signup &&
            <Link to='/apply'><Button primary>{this.props.buttonText}</Button></Link>
          }
          <FormControl variant="outlined">
            <Select value={this.props.language} onChange={(e) => this.props.handleChange(e)}>
              <MenuItem value={'EN'}>EN</MenuItem>
              <MenuItem value={'ES'}>ES</MenuItem>
            </Select>
          </FormControl>
          {(this.state.signup || this.state.apply) &&
            <ApplicationDeadline>
              {this.props.language === 'EN' && 'Now accepting beta applications'}
              {this.props.language === 'ES' && '¡Aceptando aplicaciones para el programa beta!'}
            </ApplicationDeadline>
          }
        </NavbarButtons>
      </Navbar>
    );
  }
};

export default Header;
