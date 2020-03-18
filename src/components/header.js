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
      language: 'EN'  
    }
  }

  render() {

    return (
      <Navbar className = {this.props.className}>
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
            <a target='_blank' href={this.props.pdf}>
              <Button primary>
                {this.props.language === 'EN' ? 'Download as PDF' : 'Descarger en PDF'}
              </Button>
            </a>
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
