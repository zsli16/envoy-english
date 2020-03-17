import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Logo, Navbar, Button, NavbarButtons, ApplicationDeadline} from '../styles/ui-components';
import logo from '../assets/logo.png';

//material
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const iconStyle={
  'width': '60px',
  'marginRight': '20px'
}

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
    if (path === '/apply' || path === '/free-trial') {
      this.setState({signup: false})
      this.setState({apply: true})
    }
  }

  render() {

    return (
      <Navbar>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Link to="/">
            <img src={logo} alt="logo" style={iconStyle}/>
          </Link>
          <Logo>Envoy Education</Logo>
        </div>
        <NavbarButtons>
          {this.props.page === 'landing' &&
            <Link to='/free-trial'><Button primary>{this.props.buttonText}</Button></Link>
          }
          {this.props.page === 'briefing' &&
            <Link to='/'><Button primary>Download as PDF</Button></Link>
          }
          {this.props.handleChange && 
            <FormControl variant="outlined">
              <Select value={this.props.language} onChange={(e) => this.props.handleChange(e)}>
                <MenuItem value={'EN'}>EN</MenuItem>
                <MenuItem value={'ES'}>ES</MenuItem>
              </Select>
            </FormControl>
          }
          {(this.props.page === 'landing' || this.props.page === 'landing') &&
            <ApplicationDeadline>
              {this.props.language === 'EN' && 'Beta program now available'}
              {this.props.language === 'ES' && '¡Únete al Programa Beta!'}
            </ApplicationDeadline>
          }
        </NavbarButtons>
      </Navbar>
    );
  }
};

export default Header;
