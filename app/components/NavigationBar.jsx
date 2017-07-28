import React, { Component } from 'react'
import { connect } from 'react-redux'

import Navbar from 'react-bootstrap/lib/Navbar'

import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'

import Login from './Login'
import WhoAmI from './WhoAmI'

class Navigationbar extends Component {
  constructor(props){
    super(props)
  }

  render(props) {
    return (
    <div>
      <Navbar>

          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Grace Larper</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <Link to="/login-signup"><NavItem eventKey={1} href="#">Login</NavItem></Link>
            <Link to="/login-signup"><NavItem eventKey={2} href="#">Sign Up</NavItem></Link>
            <NavDropdown eventKey={3} title="Products" id="basic-nav-dropdown">
              <Link to="/products"><MenuItem eventKey={3.1}>All Products</MenuItem></Link>
              <Link to="/costumes"></Link><MenuItem eventKey={3.2}>Costumes</MenuItem></Link>
              <Link to="/weapons"><MenuItem eventKey={3.2}>Weapons</MenuItem></Link>

            </NavDropdown>
          </Nav>
            {this.props.user ? <WhoAmI/> : <Login/>}
        </Navbar>
      </div>
    )
  }
}

//CONTAINER

export default connect(({auth}) => ({user: auth}), null)(Navigationbar)
