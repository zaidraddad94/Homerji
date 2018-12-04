import React from 'react';
import {
  Nav,
  NavDropdown,
  MenuItem
} from "react-bootstrap";
import { BrowserRouter as Link } from "react-router-dom";

import axios from 'axios';
import $ from 'jquery';
import Sign from './Signup.jsx';
import Login from './Login.jsx';
import Logout from './logout.jsx';


class WorkersLogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <div>
        {/* <button className='glyphicon glyphicon-wrench' onClick={this.props.handleWorkersButton}> Workers </button> */}
        <Nav pullRight>
          <NavDropdown eventKey={3} title="Workers" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1} href='/signup'>Sign up</MenuItem>
            <MenuItem eventKey={3.2} href='/login'>Login In</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3} href='/logout'>Log out</MenuItem>
          </NavDropdown>
        </Nav>
      </div>
    )
  }

}

export default WorkersLogo;

//className='glyphicon glyphicon-home'