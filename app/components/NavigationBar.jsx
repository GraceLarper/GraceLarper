import React, { Component } from 'react'
import { connect } from 'react-redux'

import Navbar from 'react-bootstrap/lib/Navbar'

import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'

class Navigationbar extends Component {


  render() {
    return (
    <div>
      <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Grace Larper</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Login</NavItem>
            <NavItem eventKey={2} href="#">SignUp</NavItem>
            <NavDropdown eventKey={3} title="Products" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Weapons</MenuItem>
              <MenuItem eventKey={3.2}>Costumes</MenuItem>

            </NavDropdown>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

//CONTAINER

export default connect(null, null)(Navigationbar)
