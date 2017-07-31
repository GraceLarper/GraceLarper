import React, {Component} from 'react'
import {render} from 'react-dom'
import {Provider, connect} from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import { NavLink } from 'react-router-dom';

import Login from './Login'
import WhoAmI from './WhoAmI'
import NotFound from './NotFound'
import Footer from './Footer'
import NavigationBar from './NavigationBar'
import Body from './Body'
import AllProducts from './AllProducts'
import SingleProduct from './SingleProduct'
import Orders from './Orders'


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
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}

//CONTAINER

const mapState = state => ({
  products: state.products,
  cart: state.cart
})

export default connect(mapState, null)(Home);
