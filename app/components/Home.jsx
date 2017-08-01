import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import LoginSignup from './LoginSignup'
import Footer from './Footer'
import NavigationBar from './NavigationBar'
import Body from './Body'
import AllProducts from './AllProducts'
import SingleProduct from './SingleProduct'
import Orders from './Orders'
import Profile from './Profile'

class Home extends Component {
  render() {
    return (
      <div>
         <NavigationBar />
        <main>
          <Switch>
            <Route exact path="/" component={ Body } />
            <Route exact path="/products" component={ AllProducts } />
            <Route path='/products/:id' component={ SingleProduct } />
            <Route path='/cart' component={ Orders } />
            <Route path='/login-signup' component={ LoginSignup } />
            <Route path='/profile' component={ Profile } />
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}

export default Home
