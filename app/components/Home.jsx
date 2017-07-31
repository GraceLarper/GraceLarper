import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

/*
OB/ET:
- Don't require 'react-router-dom' twice; NavLink should be in list on line 4
- Remove unused dependencies (again, look @ having linter auto-detect these)
*/

import Login from './Login'
import LoginSignup from './LoginSignup'
import WhoAmI from './WhoAmI'
import NotFound from './NotFound'
import Footer from './Footer'
import NavigationBar from './NavigationBar'
import Body from './Body'
import AllProducts from './AllProducts'
import SingleProduct from './SingleProduct'
import Orders from './Orders'

/* OB/ET: If a class doesn't maintain state or anything, no reason to use it. Consider just a function that returns the JSX */

class Home extends Component {


  render() {
    return (
      <div>
        <NavigationBar />
        <main>
          <Switch>
            <Route exact path="/" component={Body} />
            <Route exact path="/products" component={AllProducts} />
            <Route path='/products/:id' component={SingleProduct} />
            <Route path='/cart' component={Orders} />
            <Route path='/login-signup' component={LoginSignup} />
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}


export default Home;
