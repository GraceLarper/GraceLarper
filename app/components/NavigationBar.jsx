import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/lib/Navbar'

import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'

import Login from './Login'
import WhoAmI from './WhoAmI'

class NavigationBar extends Component {
  constructor(props){
    super(props)
  }

  render(props) {
    return (
    <div>
      <Navbar>

          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Grace Larper</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="/login-signup">Login/SignUp</NavItem>
            <NavDropdown eventKey={3} title="Products" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1} href="/products">All Products</MenuItem>
              <MenuItem eventKey={3.2} href="/products?category=costume">Costumes</MenuItem>
              <MenuItem eventKey={3.3} href="/products?category=weapon">Weapons</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight={true}>
            {this.props.user ? <WhoAmI/> : <Login/>}
            <Link to="/cart">My Cart <img src="/images/cart.jpg" style={{width: 25, height: 25}}/></Link>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

//CONTAINER

export default connect(({auth}) => ({user: auth}), null)(NavigationBar)
